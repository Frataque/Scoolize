import React, { useEffect, useState } from "react";
import MainContentPage from "../../components/MainContent";
import ConvCard from "./components/ConvCard";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../auth/firebaseConfig";
import { useAuth } from "../../context/AuthContext";
import { IChatMessagesProps } from "../../interface/chatMessages";

export interface IAllConvProps {}

const AllConv: React.FunctionComponent<IAllConvProps> = (props) => {
  const [allConv, setAllConv] = useState<Array<IChatMessagesProps>>([]);
  const waitRef = collection(firestore, "wait");
  const { user } = useAuth();
  useEffect(() => {
    const queryMessages = query(
      waitRef,
      where("sid", "==", user?.sid),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: any = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setAllConv(messages);
    });

    console.log(allConv);
    return () => unsuscribe();
  }, []);
  //   useEffect(() => {
  //     const getAllConv = async () => {
  //       const queryAllConv = query(
  //         waitRef,
  //         where("sid", "==", user?.sid),
  //         orderBy("createdAt")
  //       );
  //       const dataAllConv = await getDocs(queryAllConv);
  //       if (!dataAllConv.empty) {
  //         let a: IChatMessagesProps[] = [];
  //         dataAllConv.forEach((conv) => {
  //           console.log(conv);

  //           a.push(conv.data() as IChatMessagesProps);
  //         });
  //         setAllConv(a);
  //       }
  //     };
  //     getAllConv();
  //   }, []);

  return (
    <MainContentPage>
      <div className="mt-40 flex gap-5 ">
        {allConv.map((conv) => (
          <ConvCard key={conv.id} conv={conv} />
        ))}
      </div>
    </MainContentPage>
  );
};

export default AllConv;
