"use client";
import { createContext, useState, useContext } from "react";
import initialState from "./initialState";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ctx, setCtx] = useState(initialState);
  return (
    <AppContext.Provider value={[ctx, setCtx]}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
