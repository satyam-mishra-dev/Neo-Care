import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neo Care - Healthcare Management System",
  description: "Modern healthcare patient management application with advanced UI/UX and seamless appointment scheduling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-teal-50 to-mint-50 min-h-screen`}>
        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Large floating circles */}
          <div className="absolute top-20 left-20 size-32 bg-teal-100/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 size-24 bg-mint-100/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-32 left-1/4 size-40 bg-teal-200/20 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
          <div className="absolute bottom-20 right-20 size-28 bg-mint-200/20 rounded-full animate-float" style={{ animationDelay: "6s" }}></div>
          
          {/* Small floating dots */}
          <div className="absolute top-1/3 left-[16.6667%] size-2 bg-teal-300/40 rounded-full animate-float"></div>
          <div className="absolute top-1/4 right-1/4 size-1.5 bg-mint-300/40 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/3 left-1/3 size-1 bg-teal-400/30 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
          <div className="absolute bottom-1/4 right-[16.6667%] size-2.5 bg-mint-400/30 rounded-full animate-float" style={{ animationDelay: "5s" }}></div>
        </div>
        
        {children}
      </body>
    </html>
  );
}
