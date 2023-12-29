import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, firestore } from "../auth/firebaseConfig";

const acceptConv = (mid: string | null | undefined, id: string | undefined) => {
  if (mid) {
    updateDoc(doc(collection(firestore, "users"), auth.currentUser?.uid), {
      conv: arrayUnion(mid),
    });
    if (id) deleteDoc(doc(firestore, "wait", id));
  }
};
export default acceptConv;
