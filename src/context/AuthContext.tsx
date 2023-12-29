import React, { createContext, useContext, useState } from "react";

import { Iusers } from "../interface/users";

interface IAuthContext {
  user: Iusers | undefined;
  setUser: React.Dispatch<React.SetStateAction<Iusers | undefined>>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<Iusers>();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
