import React, { useEffect, useState } from "react";
import MainContentPage from "./components/MainContent";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth, firestore } from "../auth/firebaseConfig"; // Adjust based on your project structure
import ConversationPage from "../components/Conversation";
import { IChatMessagesProps } from "../interface/chatMessages";
import createChat from "../functions/CreateChat";

export interface IMessageriePageProps {}

const MessageriePage: React.FunctionComponent<IMessageriePageProps> = (
  props
) => {
  const [messages, setMessages] = useState<Array<string>>();
  const [error, setError] = useState<any>();
  const [message, setMessage] = useState<string>();
  const [conv, setConv] = useState<Array<IChatMessagesProps>>();

  useEffect(() => {
    const getAllConv = async () => {
      if (auth.currentUser?.uid) {
        try {
          const docRef = query(
            collection(firestore, "messages"),
            where("sid", "==", auth.currentUser.uid)
          );
          const docSnap = await getDocs(docRef);

          if (docSnap) {
            let arr: any = [];
            docSnap.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arr.push(doc.data());
            });
            setMessages(arr);
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch {
          console.log("error");
        }
      }
    };
    getAllConv();
  }, []);

  const getConv = async (mid: string | undefined) => {
    const convRef = collection(firestore, "messages");
    const convQuery = query(
      convRef,
      orderBy("createdAt"),
      limit(25),
      where("mid", "==", mid)
    );
    const res = await getDocs(convQuery);
    const a: Array<IChatMessagesProps | undefined> = [];
    res.forEach((doc) => {
      const { createdAt, mid, sid, uid, text, sName } = doc.data();
      a.push({ createdAt, mid, sid, uid, text, sName });
    });
    setConv(a as Array<IChatMessagesProps>);
  };
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <MainContentPage>
        <div className="flex row mt-9  ">
          <div className="w-1/3">
            <h3>Messagerie</h3>

            {/* <button onClick={() => createChat("XsOHJvKYz8bAIgIt3Ix7Rgc1Uhm2")}>
              New Conv
            </button> */}
            {messages &&
              messages.slice(1).map((element: string) => {
                return (
                  <button
                    className="w-[236px] h-20 px-3 py-[30px] bg-dark-blue shadow justify-center items-center gap-2.5 inline-flex"
                    onClick={(e) => getConv(element)}
                  >
                    <div className="text-white text-[27px] font-bold font-['Marianne'] leading-tight">
                      {element}
                    </div>
                  </button>
                );
              })}
          </div>
          <div className="w-2/3 h-full">
            {conv && <ConversationPage conv={conv} />}
          </div>
        </div>
      </MainContentPage>
    </div>
  );
};

export default MessageriePage;
