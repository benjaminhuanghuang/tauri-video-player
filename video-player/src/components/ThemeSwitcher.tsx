import { useTheme } from "../hooks/useThemeContext";
import { Moon, Sun } from "lucide-react";
const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="hidden sm:flex">
      <div className="flex items-center justify-center">
        <Sun
          className={`${
            darkMode ? "text-gray-200" : "text-gray-900"
          } md:text-3xl sm:text-2xl text-xl cursor-pointer`}
          onClick={toggleDarkMode}
        />
        <Moon
          className={`${
            darkMode ? "text-gray-900" : "text-gray-200"
          } md:text-3xl sm:text-2xl text-xl cursor-pointer`}
          onClick={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
