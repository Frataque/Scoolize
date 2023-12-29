import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, firestore } from "../auth/firebaseConfig";
import { IChatMessagesProps } from "../interface/chatMessages";

const createChat = async (sid: string, sName: string) => {
  let mid: string;

  let messages: IChatMessagesProps = {
    createdAt: serverTimestamp(),
    mid: "",
    text: null,
    uid: null,
    sid: sid,
    sName: sName,
  };

  await addDoc(collection(firestore, "messages"), messages).then((data) => {
    mid = data.id;
    updateDoc(doc(collection(firestore, "users"), auth.currentUser?.uid), {
      conv: arrayUnion(mid),
    });
    messages.mid = mid;
    addDoc(collection(firestore, "wait"), messages);
    updateDoc(doc(firestore, "messages", mid), {
      mid: mid,
    });
  });
};
export default createChat;
