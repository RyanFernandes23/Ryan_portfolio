import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { links, site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.titleDefault, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "Ryan Fernandes",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Agentic AI",
    "LLM Applications",
    "MCP",
    "FastMCP",
    "PyTorch",
    "FastAPI",
    "Next.js",
    "Backend Engineer",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.titleDefault,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.titleDefault,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${links.email}`,
  jobTitle: "Software Engineer",
  description: site.description,
  sameAs: [links.github, links.medium],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Agentic AI",
    "Large Language Models",
    "Model Context Protocol",
    "PyTorch",
    "FastAPI",
    "Next.js",
    "Backend Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <a href="#main" className="sr-only-focusable">
          Skip to content
        </a>

        <Navbar />

        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
