import React, { createContext, useState, useContext, useEffect } from "react";
import { IChatMessagesProps } from "../interface/chatMessages";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../auth/firebaseConfig";

interface IChatContext {
  conv: Array<IChatMessagesProps>;
  setConv: React.Dispatch<React.SetStateAction<Array<IChatMessagesProps>>>;
}

export const ChatContext = createContext<IChatContext | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC<any> = ({ children }) => {
  const [conv, setConv] = useState<Array<IChatMessagesProps>>([]);
  const messagesRef = collection(firestore, "messages");

  useEffect(() => {
    if (conv[0]) {
      const queryMessages = query(
        messagesRef,
        where("mid", "==", conv[0].mid),
        orderBy("createdAt")
      );
      const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
        let messages: any = [];
        snapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setConv(messages);
      });
      console.log("he");
      return () => unsuscribe();
    }
  }, []);

  return (
    <ChatContext.Provider value={{ conv, setConv }}>
      {children}
    </ChatContext.Provider>
  );
};
