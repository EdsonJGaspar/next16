"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
    </div>
  );
}
