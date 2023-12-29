// src/components/MessageInput.tsx
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, firestore } from "../auth/firebaseConfig";
import { IChat } from "./ChatMessages";
import { useAuth } from "../context/AuthContext";

const MessageInput: React.FC<IChat> = (props) => {
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() === "") return;
    const messagesRef = collection(firestore, "messages");
    await addDoc(messagesRef, {
      text: message,
      createdAt: serverTimestamp(),
      uid: auth.currentUser?.uid,
      mid: props.message.mid,
      sid: props.message.sid,
      sName: props.message.sName,
    })
      .then((rep) => console.log(rep))
      .catch((err) => console.log(err.message));
    setMessage("");

    if (props.message.sid === "bn97htoA2ZIx2kHI8hqp") {
      const prompt = message;

      try {
        // const response = await openai.chat.completions.create({
        //   model: "gpt-3.5-turbo",
        //   messages: [
        //     { role: "system", content: "You are a helpful assistant." },
        //     { role: "user", content: prompt },
        //   ],
        // });
        // console.log(response);
        // const botMessage = response.data.choices[0].message.content;
        // console.log(response);
        // // Send the bot's   response to Firestore
        // await addDoc(messagesRef, {
        //   text: botMessage,
        //   createdAt: serverTimestamp(),
        //   uid: "WVVmFBBEACwKV1rVkuqv", // Replace with actual bot's UID
        //   mid: props.message.mid,
        //   sid: "WVVmFBBEACwKV1rVkuqv", // Replace with actual bot's SID
        // });
      } catch (error) {
        console.error("Error in sending message:", error);
      }
    }
  };
  const getRole = () => {
    if (user?.role === "school") return "invisible";
  };
  return (
    <form
      onSubmit={sendMessage}
      className={`flex mt-4 w-full font-['Marianne'] ${getRole()}`}
    >
      <input
        type="text"
        placeholder="Votre message"
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        className="w-full bg-light-grey pl-3 "
      />
      <button
        type="submit"
        className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne"
      >
        Envoyer
      </button>
    </form>
  );
};
export default MessageInput;
