import React, { useEffect, useState } from "react";
import { IChatMessagesProps } from "../interface/chatMessages";
import { firestore } from "../auth/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import ChatMessages from "./ChatMessages";
import MessageInput from "./InputChat";

export interface IConversationPageProps {
  conv: Array<IChatMessagesProps>;
}

const ConversationPage: React.FunctionComponent<IConversationPageProps> = (
  props
) => {
  const [schoolName, setSchoolName] = useState<string>();
  const messagesRef = collection(firestore, "messages");
  const [message, setMessage] = useState<Array<IChatMessagesProps>>();
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("mid", "==", props.conv[0].mid),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: any = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });

    return () => unsuscribe();
  }, []);
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="flex-none">
        {schoolName && (
          <h1 className="text-black text-2xl font-medium font-marianne-medium leading-tight ">
            {schoolName}
          </h1>
        )}
        <div className="w-full h-0.5 relative mt-2">
          <div className="w-full h-0.5 left-0 top-0 absolute bg-dark-blue" />
        </div>
      </div>
      <div className="pt-10 flex-1 max-h-[600px] overflow-y-scroll">
        <div className="h-[200vh] flex flex-col justify-end">
          {message &&
            message.map((con) => {
              return <ChatMessages message={con} />;
            })}
        </div>
      </div>
      <div className="w-full flex-none">
        <MessageInput message={props.conv[0]} />
      </div>
    </div>
  );
};

export default ConversationPage;
