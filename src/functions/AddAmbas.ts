import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../auth/firebaseConfig";
import { Iusers } from "../interface/users";

const addAmbas = async (mail: string) => {
  console.log(mail);

  const ambasQuery = query(
    collection(firestore, "users"),
    where("email", "==", mail)
  );
  const ambasSnap = await getDocs(ambasQuery);
  let user: Array<Iusers> = [];
  if (ambasSnap.empty) return `Ambassadeur ${mail} introuvé`;
  ambasSnap.forEach((u) => {
    user.push(u.data() as Iusers);
  });
  if (user.length >= 2) {
    return `Error : Deux utilisateurs ${mail} introuvé`;
  } else {
    const currentUserUid = auth.currentUser?.uid;
    if (!currentUserUid) {
      return "Error: No current user found";
    }

    try {
      const idRef = doc(firestore, "users", user[0].uid);
      await updateDoc(idRef, {
        sid: currentUserUid,
        role: "ambas",
      });
      return "User updated successfully";
    } catch (error) {
      return `Error updating user: `;
    }
  }
};

export default addAmbas;
