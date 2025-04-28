/*
Why use a Custom Hook for React Context API instead of useContext (+ TypeScript)
https://www.youtube.com/watch?v=I7dwJxGuGYQ
*/

import { createContext } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
