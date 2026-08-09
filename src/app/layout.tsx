import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/hooks/use-theme"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ScrollProgress from "@/components/effects/scroll-progress"
import LoadingScreen from "@/components/effects/loading-screen"
import MouseFollower from "@/components/effects/mouse-follower"
import FloatingShapes from "@/components/effects/floating-shapes"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Priyanka G | B.Tech IT Scholar | US MS CS Applicant 2027",
  description:
    "Portfolio of Priyanka G — B.Tech Information Technology student at Government College of Engineering, Erode. Specializing in AI Computer Vision, Cybersecurity, and Cloud Full-Stack Systems. Targeting US MS CS programs (Fall 2027).",
  keywords: [
    "Priyanka G",
    "Priyanka Gnanam",
    "B.Tech IT",
    "US MS CS Applicant",
    "AI Computer Vision",
    "Face Recognition",
    "Cybersecurity",
    "Full-Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "NPTEL Elite",
    "Government College of Engineering Erode",
    "Anna University",
    "MS Computer Science USA",
  ],
  authors: [{ name: "Priyanka G" }],
  creator: "Priyanka G",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Priyanka G Portfolio",
    title: "Priyanka G | B.Tech IT Scholar | US MS CS Applicant 2027",
    description:
      "Portfolio of Priyanka G — B.Tech IT student specializing in AI, Computer Vision, Cybersecurity and Cloud Systems. Aspiring US MS CS student.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka G | B.Tech IT Scholar | US MS CS Applicant 2027",
    description:
      "Portfolio of Priyanka G — AI Engineer, Full-Stack Developer, NPTEL Elite Scholar. Targeting US MS CS Fall 2027.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <FloatingShapes />
          <MouseFollower />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
