import firebase_app from "../config";
import { signOut as fb_signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOut() {
  return fb_signOut(auth);
}
