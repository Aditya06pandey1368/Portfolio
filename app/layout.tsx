import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// We use Inter for a highly technical, readable, professional look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Pandey | Software Engineer",
  description: "Full-stack developer specializing in MERN and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required by next-themes to work properly
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}