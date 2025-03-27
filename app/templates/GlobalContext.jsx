"use client";
import { Jaini_Purva } from "next/font/google";
import { createContext, useContext, useState } from "react";

// Context creation
const GlobalContext = createContext();

const jainiPurva = Jaini_Purva({
  subsets: ["latin"],
  weight: "400",
});

export const GlobalProvider = ({ children }) => {
  const options = ["Dating", "Marriage", "Friendship", "Professional"];
  const [isShowNav, setIsShowNav] = useState(false);
  const [dropValue, setDropValue] = useState(options[0]);
  
  return (
    <GlobalContext.Provider
      value={{
        jainiPurva: jainiPurva.className,
        isShowNav,
        setIsShowNav,dropValue,setDropValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
