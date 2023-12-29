import React, { useState } from "react";
import createAccount from "./hooks/createAccount";

type Props = {};

const RegisterPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [bac, setBac] = useState("");
  const [fname, setFname] = useState("");
  const [adress, setAdress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      createAccount(email, password, name, bac, year, fname, adress);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-xl font-bold text-center">Inscription</h1>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="lname" className="text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="fname" className="text-sm font-medium">
              Prénom
            </label>
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="adress" className="text-sm font-medium">
              Mot de passe
            </label>
            <input
              type="text"
              id=""
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="pwd" className="text-sm font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
