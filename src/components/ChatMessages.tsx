import React, { useEffect, useState } from "react";
import { IChatMessagesProps } from "../interface/chatMessages";
import { auth, firestore } from "../auth/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
export interface IChat {
  message: IChatMessagesProps;
}
const ChatMessages: React.FunctionComponent<IChat> = (props) => {
  const { uid, text } = props.message;
  const [name, setName] = useState<string>();
  useEffect(() => {
    if (uid) {
      const handleSearch = async () => {
        const userRef = doc(firestore, "users", uid);
        const snapshot = await getDoc(userRef);
        const data = snapshot.data();
        if (data) setName(data.nom);
      };
      handleSearch();
    }
  }, []);
  return (
    <div>
      <div
        className={` flex mt-3 ${
          uid === auth.currentUser?.uid ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`bg-light-grey rounded-[3px] flex-col justify-center font-['Marianne']gap-2.5 inline-flex max-w-[75%] p-4 ${
            uid === auth.currentUser?.uid ? "item-end" : "item-start"
          }`}
        >
          <div>
            <div className="text-xl">{name}</div>
          </div>
          <div className="text-zinc-800 text-l font-normal font-['Marianne'] tracking-wide">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
