import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const title = `${DATA.name} — Software engineer & builder`;
const description = "Akshat Singh builds useful, thoughtful products for the web.";
const url = "https://akshatsingh.xyz";

export const metadata: Metadata = { title, description, metadataBase: new URL(url), alternates: { canonical: "/" }, openGraph: { title, description, type: "website", url, siteName: DATA.name }, twitter: { title, description, card: "summary_large_image", creator: "@akshatsingh_s" }, robots: { index: true, follow: true } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`dark ${bodyFont.variable} ${displayFont.variable}`}><body className={cn("min-h-screen bg-background font-sans antialiased", bodyFont.variable, displayFont.variable)}><ThemeProvider attribute="class" defaultTheme="dark" enableSystem><TooltipProvider delayDuration={0}>{children}<Analytics /></TooltipProvider></ThemeProvider></body></html>;
}
