import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Neo Care - Hospital Management System",
  description:
    "Enterprise-level hospital management system designed to streamline patient care, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/medical-cross.svg",
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
        className={cn(
          "min-h-screen bg-gradient-to-br from-peach-50 via-white to-teal-50 font-sans antialiased relative overflow-hidden",
          fontSans.variable
        )}
      >
        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-transparent to-mint-50/20"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-mint-200/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-peach-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-teal-100/40 rounded-full blur-lg"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#14B8A6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Floating Dots */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-teal-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-mint-400/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-teal-300/70 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 bg-mint-300/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        </div>

        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
