import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Card Component",
  description: "Frontend mentor website QR code card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body
        className={`${outfit.className} antialiased bg-slate-300 flex justify-center items-center h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
