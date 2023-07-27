import firebase_app from "@/firebase/config";
import {
  getFirestore,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

export class AccountsService {
  #accountId;
  #db;
  #collectionPath;

  constructor(accountId) {
    this.#accountId = accountId;
    this.#db = getFirestore(firebase_app);
    this.#collectionPath = `accounts`;
  }

  async get() {
    const docRef = doc(this.#db, this.#collectionPath, this.#accountId);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  async post(data) {
    const docRef = doc(this.#db, this.#collectionPath, this.#accountId);
    await setDoc(docRef, data);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  async put(data) {
    const docRef = doc(this.#db, this.#collectionPath, this.#accountId);
    await setDoc(docRef, data, { merge: true });
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  delete() {
    return deleteDoc(doc(this.#db, this.#collectionPath, this.#accountId));
  }
}
