import React, { createContext, useContext, useState, useEffect } from "react";
import { Children } from "react";

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) {
      salvaToken(token);
    }
  }, [token]);

  useEffect(() => {
    chiamaToken();
  }, []);

  const salvaToken = (token) => {
    localStorage.setItem("token", `${token}`);
  };

  const chiamaToken = () => {
    const itemToken = localStorage.getItem("token");
    if (itemToken !== "") {
      setToken(itemToken);
    } else {
      console.log("token non trovato");
    }
  };
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
