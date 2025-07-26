"use client";
import { ThemeSwitcher } from "./theme-swtich";
import { useTheme } from "next-themes";

export function ThemeCard() {
  const { setTheme, theme } = useTheme();

  return <ThemeSwitcher value={theme as any} onChange={setTheme} />;
}
