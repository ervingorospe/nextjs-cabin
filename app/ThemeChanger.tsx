"use client";
import { useTheme } from "next-themes";
import useMounted from "./hooks/useMounted";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const { mounted } = useMounted();

  if (!mounted) return null;

  return (
    <div className="gap-4">
      The current theme is: {theme}
      <button className="btn-primary btn">test</button>
      <button
        className="bg-primary btn btn-small"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button className="btn" onClick={() => setTheme("dark")}>
        Dark
      </button>
    </div>
  );
}

export default ThemeChanger;
