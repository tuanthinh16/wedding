import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

// Font có hỗ trợ tiếng Việt, phù hợp kiểu trang Wedding
const notoSerif = Noto_Serif({ subsets: ["latin", "vietnamese"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "T&H Wedding Invitation",
  description: "You're Invited to Celebrate T&H's Wedding!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "T&H Wedding Invitation",
    description: "You're Invited to Celebrate T&H's Wedding!",
    url: "https://your-domain.com",
    siteName: "T&H Wedding",
    images: [
      {
        url: "/og-image.jpg", // (1200x630)
        width: 1200,
        height: 630,
        alt: "T&H Wedding Invitation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T&H Wedding Invitation",
    description: "You're Invited to Celebrate T&H's Wedding!",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${notoSerif.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
