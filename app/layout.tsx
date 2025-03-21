import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Sanudin | Software Engineer and Developer",
  description:
    "A software engineer and developer passionate about helping entrepreneurs create great products.",
  authors: [{ name: "Sanudin", url: "https://sanud.in" }],
  keywords: [
    "sanudin",
    "ssanudin",
    "software engineer",
    "developer",
    "web developer",
    "nextjs",
    "portfolio website",
    "portfolio site",
  ],
  openGraph: {
    title: "Sanudin | Software Engineer and Developer",
    description:
      "Passionate about helping entrepreneurs create great products.",
    images: "/og.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanudin | Software Engineer and Developer",
    description:
      "Passionate about helping entrepreneurs create great products.",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
