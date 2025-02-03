import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const PTserif = PT_Serif({
  variable: "--ptserif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ImageBase",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
