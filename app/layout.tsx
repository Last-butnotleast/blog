import type { Metadata } from "next";
import "./globals.css";
import { BlogHeader } from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "Bevy Learning Journey",
  description: "Learning Rust game development with Bevy engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BlogHeader />
        {children}
      </body>
    </html>
  );
}
