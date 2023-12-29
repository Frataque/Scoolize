// src/components/MessageInput.tsx
import React, { useState } from "react";

import addAmbas from "../../../functions/AddAmbas";

const MessageInput: React.FC = (props) => {
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addAmbas(mail).then((res) => setMessage(res));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mt-4 w-full font-['Marianne']"
      >
        <input
          type="mail"
          placeholder="Ajouter un ambassadeur : ambassadeur@mail.com"
          value={mail}
          onChange={(e: any) => setMail(e.target.value)}
          className="w-full bg-light-grey pl-3 "
        />
        <button
          type="submit"
          className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne"
        >
          Ajouter
        </button>
      </form>
      {message}
    </>
  );
};
export default MessageInput;
