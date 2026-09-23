import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Geist_Mono, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/web/theme-provider";

const fontSans = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nextjs 2026",
  description:
    "Fortalecendo as bases de Nextjs e entendendo as mudanças da nova versão 16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={cn(
        `h-full ${fontSans.variable} ${fontMono.variable} antialiased`,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
