import React, { useState } from "react";

const initialAuthValue: IAuth = { accessToken: "" };

export const AuthContext = React.createContext<IAuthContext>({
  auth: initialAuthValue,
  setAuth() {},
});

type Props = {
  children: React.ReactNode;
};

function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<IAuth>(initialAuthValue);

  const contextValue: IAuthContext = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
