import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: `${profile.firstName} ${profile.lastName} | Portfolio`,
  description: `${profile.title} — minimal editorial portfolio.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider>
          <SmoothScroll />
          <div className="hidden pointer-fine:block">
            <CustomCursor />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
