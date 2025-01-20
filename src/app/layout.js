import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rebec's ART Finder Dashboard",
  description: "Research and analysis dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
