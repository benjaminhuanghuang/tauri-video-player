/*
Why use a Custom Hook for React Context API instead of useContext (+ TypeScript)
https://www.youtube.com/watch?v=I7dwJxGuGYQ
*/
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
