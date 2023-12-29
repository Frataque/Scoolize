import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { firestore } from "../../../auth/firebaseConfig";

import { IChat } from "../../../components/ChatMessages";
import { IChatMessagesProps } from "../../../interface/chatMessages";
import { useChat } from "../../../context/ChatContext";

const CardChat: React.FunctionComponent<IChat> = (props) => {
  const { setConv } = useChat(); // Access the setConv function from the context

  const handleClick = async () => {
    const convRef = collection(firestore, "messages");
    const convQuery = query(
      convRef,
      where("mid", "==", props.message.mid),
      orderBy("createdAt"),
      limit(25)
    );
    const convSnap = await getDocs(convQuery);
    let messages: IChatMessagesProps[] = [];
    if (convSnap) {
      convSnap.forEach((snap) => {
        const data = snap.data() as IChatMessagesProps;
        messages.push(data);
      });

      setConv(messages); // Update the conversation in the context
    }
  };

  return (
    <>
      <button
        className="w-[236px] h-20 px-3 py-[30px] bg-dark-blue shadow justify-center items-center gap-2.5 inline-flex"
        onClick={(e) => handleClick()}
      >
        <div className="text-white text-[27px] font-bold font-['Marianne'] leading-tight">
          {props.message.sName}
        </div>
      </button>
    </>
  );
};

export default CardChat;
