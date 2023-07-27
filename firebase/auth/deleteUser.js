import firebase_app from "../config";
import { getAuth, deleteUser as fb_deleteUser } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function deleteUser() {
  const user = auth.currentUser;

  let result;
  let error;

  try {
    result = await fb_deleteUser(user);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
