"use client"

import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
   const [state, setState] = useState({});
   const contextvalue = useMemo(() => {
      return [state, setState]
   })

   return (
      <AppContext.Provider value={contextvalue}>
         {children}
      </AppContext.Provider>
   );
}

export const useAppContext = () => useContext(AppContext);