import firebase_app from "@/firebase/config";
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  collection,
  deleteDoc,
  setDoc,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import _ from "lodash";

export class TodosService {
  #accountId;
  #db;
  #collectionPath;

  constructor(accountId) {
    this.#accountId = accountId;
    this.#db = getFirestore(firebase_app);
    this.#collectionPath = `todos`;
  }

  async getAll({ archived = false }) {
    const q = query(
      collection(this.#db, this.#collectionPath),
      where("accountId", "==", doc(this.#db, `accounts/${this.#accountId}`)),
      where("archived", "==", archived)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ..._.omit(doc.data(), "accountId"),
    }));
  }

  async getById(id) {
    const docRef = doc(this.#db, this.#collectionPath, id);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  async post(data) {
    const docRef = doc(collection(this.#db, this.#collectionPath));
    await setDoc(docRef, {
      ...data,
      isCompleted: false,
      accountId: doc(this.#db, `accounts/${this.#accountId}`),
      archived: false,
    });
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  async put(id, data) {
    const docRef = doc(this.#db, this.#collectionPath, id);
    await setDoc(docRef, data, { merge: true });
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  async delete(id) {
    await deleteDoc(doc(this.#db, this.#collectionPath, id));

    return {
      isDeleted: true,
    };
  }

  async archiveTodos(ids) {
    const batch = writeBatch(this.#db);

    ids.forEach((id) => {
      const docRef = doc(this.#db, this.#collectionPath, id);
      batch.update(docRef, { archived: true });
    });

    await batch.commit();

    return {
      archived: ids,
    };
  }
}
