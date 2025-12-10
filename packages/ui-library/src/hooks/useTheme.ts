import { useEffect, useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

type Theme = "light" | "dark";

export default function useTheme() {
  // Detect system preference
  const systemPrefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Use localStorage with fallback to system theme
  const { value: theme, addValue } = useLocalStorage<Theme>(
    "theme",
    systemPrefersDark ? "dark" : "light"
  );

  // Apply theme to <html data-theme="...">
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Sync OS-level theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme: Theme = e.matches ? "dark" : "light";
      addValue(newSystemTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [addValue]);

  // Manual toggle
  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    addValue(newTheme);
  }, [theme, addValue]);

  return { theme, toggleTheme };
}
