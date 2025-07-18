import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google" // Import DM_Serif_Display
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollIndicator } from "@/components/scroll-indicator" // New import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }) // Define as variable
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display", // Define as variable
})

export const metadata: Metadata = {
  title: "Elite8 Digital - UI/UX Portfolio",
  description: "Crafting futuristic, emotionally captivating digital experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Header - Minimalistic & Elegant */}
          <header className="px-4 lg:px-8 h-20 flex items-center justify-between border-b border-gray-200/50 bg-white/70 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 dark:bg-gray-950/70 dark:border-gray-800">
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-gray-900 dark:text-gray-50"
              prefetch={false}
            >
              <span className="text-primary">Elite8</span> Digital
            </Link>
            <nav className="hidden md:flex gap-10">
              <Link
                href="/"
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors relative group dark:text-gray-300 dark:hover:text-primary"
                prefetch={false}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors relative group dark:text-gray-300 dark:hover:text-primary"
                prefetch={false}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/portfolio"
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors relative group dark:text-gray-300 dark:hover:text-primary"
                prefetch={false}
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors relative group dark:text-gray-300 dark:hover:text-primary"
                prefetch={false}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base font-medium"
                prefetch={false}
              >
                Let's Connect
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <ScrollIndicator /> {/* Integrated Scroll Indicator */}
          {children}
          {/* Footer */}
          <footer className="flex flex-col gap-4 sm:flex-row py-10 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200/50 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
            <p className="text-sm">&copy; {new Date().getFullYear()} Elite8 Digital. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-6 sm:gap-8">
              <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors" prefetch={false}>
                Terms of Service
              </Link>
            </nav>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
