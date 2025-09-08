import type { Metadata } from "next";
import { Geist, Geist_Mono, Vollkorn } from "next/font/google";
import "./globals.css";

const vollkorn = Vollkorn({
  subsets: ["latin"], weight: ["400", "700"], variable: "--font-vollkorn"
});


export const metadata: Metadata = {
  title: "T&H Wedding Invitation",
  description: "You're Invited to Celebrate T&H's Wedding!",
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vollkorn.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
