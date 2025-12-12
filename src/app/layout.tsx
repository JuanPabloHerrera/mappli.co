import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mappli",
  description: "The AI Marketplace community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-background text-foreground font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
