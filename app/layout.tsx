import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const dmMono = DM_Mono({
  subsets: ["latin"], // Define subsets for optimized loading
  weight: ["300", "400", "500"], // Define the font weights you want
  variable: "--font-dm-mono", // Optional: CSS custom property for better control
});

export const metadata: Metadata = {
  title: "Crawl4AI - Open source, high performant crawler for AI-ready data extraction",
  description: "GitHub's #1 trending crawler that delivers structured AI-ready data. Runs anywhere, Scales everywhere - All features free and open sourc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", dmMono.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
