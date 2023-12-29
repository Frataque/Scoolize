import React, { useEffect, useState } from "react";
import MainContentPage from "../../components/MainContent";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../auth/firebaseConfig"; // Adjust based on your project structure
import Conversation from "./Conversation";
import { IChatMessagesProps } from "../../interface/chatMessages";
import CardChat from "./components/CardChat";
import { useChat } from "../../context/ChatContext";
import createChat from "../../functions/CreateChat";
import { useAuth } from "../../context/AuthContext";

export interface IMessagerieProps {}

const Messagerie: React.FunctionComponent<IMessagerieProps> = (props) => {
  const { conv } = useChat();
  const { user } = useAuth();
  const [error, setError] = useState<any>();
  const [fm, setFm] = useState<Array<IChatMessagesProps>>([]);
  const messageRef = collection(firestore, "messages");

  useEffect(() => {
    getFm();
  }, []);
  const getFm = async () => {
    try {
      if (user?.conv) {
        const promises = user?.conv.map(async (e) => {
          const convRef = doc(firestore, "messages", e);
          const convSnap = await getDoc(convRef);
          return convSnap.exists()
            ? (convSnap.data() as IChatMessagesProps)
            : null;
        });

        const results = await Promise.all(promises);
        setFm(
          results.filter((item): item is IChatMessagesProps => item !== null)
        );
      } else if (user?.role === "school") {
        const queryMessages = query(
          messageRef,
          where("sid", "==", user?.sid),
          orderBy("createdAt")
        );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
          let messages: any = [];
          snapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          console.log(messages);

          setFm(messages);
        });
        return () => unsuscribe();
      }
    } catch (error) {
      setError(error);
    }
  };
  // const getConv = async (mid: string | undefined) => {
  //   const convRef = collection(firestore, "messages");
  //   const convQuery = query(
  //     convRef,
  //     orderBy("createdAt"),
  //     limit(25),
  //     where("mid", "==", mid)
  //   );
  //   const res = await getDocs(convQuery);
  //   const a: Array<IChatMessagesProps | undefined> = [];
  //   res.forEach((doc) => {
  //     const { createdAt, mid, sid, uid, text, sName } = doc.data();
  //     a.push({ createdAt, mid, sid, uid, text, sName });
  //   });
  //   setConv(a as Array<IChatMessagesProps>);
  // };

  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <MainContentPage>
        <div className="flex row mt-9">
          <div className="w-1/3 flex flex-col gap-1">
            {fm?.map((element) => {
              return <CardChat message={element} />;
            })}{" "}
          </div>
          <div className="w-2/3 h-full">
            {conv[0] && <Conversation conv={conv} />}
          </div>
        </div>
      </MainContentPage>
    </div>
  );
};

export default Messagerie;
