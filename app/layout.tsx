import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Sanudin - Software Engineer and Developer",
  description:
    "A software engineer and developer passionate about helping people to create great products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
