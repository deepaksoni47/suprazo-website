import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuPrazo Technologies - Innovative IT Solutions",
  description:
    "Driving Digital Excellence with Smart IT Solutions. Expert web development, mobile apps, ERP systems, and AI/ML solutions including CampusEye.ai and Sign Language Translation App.",
  generator: "SuPrazo Technologies",
  keywords: [
    "IT solutions",
    "web development",
    "mobile apps",
    "ERP systems",
    "AI solutions",
    "ML solutions",
    "CampusEye.ai",
    "sign language app",
    "digital transformation",
    "software development",
    "technology consulting",
  ].join(", "),
  authors: [{ name: "SuPrazo Technologies", url: "https://suprazotech.in/" }],
  creator: "SuPrazo Technologies",
  publisher: "SuPrazo Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SuPrazo Technologies - Innovative IT Solutions",
    description:
      "Driving Digital Excellence with Smart IT Solutions. Expert development services and cutting-edge AI products.",
    type: "website",
    locale: "en_US",
    url: "https://suprazotech.in/",
    siteName: "SuPrazo Technologies",
    images: [
      {
        url: "https://suprazotech.in/assets/LOGO_light-DTglrqWy.png",
        width: 1200,
        height: 630,
        alt: "SuPrazo Technologies - Innovative IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuPrazo Technologies - Innovative IT Solutions",
    description: "Driving Digital Excellence with Smart IT Solutions",
    images: ["https://suprazotech.in/assets/LOGO_light-DTglrqWy.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://suprazotech.in/",
  },
  icons: {
    icon: "/favicon.ico", // classic favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // iOS/Apple devices
    other: [
      {
        rel: "icon",
        url: "/logo.png", // your PNG logo if you prefer
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0B64D4" />
        <meta name="msapplication-TileColor" content="#0B64D4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SuPrazo Technologies",
              description:
                "Innovative IT Solutions - Driving Digital Excellence with Smart IT Solutions",
              url: "https://suprazotech.in/",
              logo: "https://suprazotech.in/assets/LOGO_light-DTglrqWy.png",
              foundingDate: "2019",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 9665658240",
                contactType: "customer service",
                email: "info@suprazotech.in",
              },
              sameAs: [
                "https://www.linkedin.com/company/suprazo-technologies",
                "https://twitter.com/suprazo-technologies",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Custom web applications and websites",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description: "iOS and Android mobile applications",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI/ML Solutions",
                      description:
                        "Artificial Intelligence and Machine Learning solutions",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${GeistMono.variable} antialiased`}
      >
        <Navigation />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
