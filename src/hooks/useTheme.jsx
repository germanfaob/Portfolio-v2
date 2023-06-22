import { useState, useEffect } from "react";

export const useTheme = (initialTheme) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || initialTheme);

  const handleChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, handleChange];
};
