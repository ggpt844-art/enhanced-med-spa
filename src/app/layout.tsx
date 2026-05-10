import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SkipLink from "@/components/SkipLink";
import { SPA, SITE_URL } from "@/lib/spa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Enhanced Aesthetics Medi Spa | Private Med Spa in Mississauga, ON",
    template: "%s | Enhanced Aesthetics Medi Spa",
  },
  description:
    "Result-driven, one-on-one medical aesthetics in a private home studio in Mississauga. Hydrabrasion, facials, acne care, LED, and body treatments by Razan Shahrour — 4.9★ from 66+ Google reviews.",
  keywords: [
    "medi spa Mississauga",
    "home based medi spa Mississauga",
    "medical aesthetician Mississauga",
    "hydrabrasion Mississauga",
    "best facial Mississauga",
    "acne facial Mississauga",
    "skin specialist Mississauga",
    "private medi spa Erin Mills",
    "Razan Shahrour",
    "Enhanced Aesthetics Medi Spa",
  ],
  authors: [{ name: SPA.name }],
  creator: SPA.name,
  publisher: SPA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SPA.name,
    title:
      "Enhanced Aesthetics Medi Spa | Private Med Spa in Mississauga, ON",
    description:
      "Private, home-based medical aesthetics in Mississauga. 4.9★ from 66+ Google reviews. Book your glow on Calendly.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Enhanced Aesthetics Medi Spa | Private Med Spa in Mississauga, ON",
    description:
      "Private, home-based medical aesthetics in Mississauga. 4.9★ from 66+ Google reviews. Book your glow on Calendly.",
  },
  alternates: {
    canonical: SITE_URL,
  },
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
};

export const viewport: Viewport = {
  themeColor: "#0E4F4A",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "BeautySalon", "HealthAndBeautyBusiness"],
  "@id": `${SITE_URL}/#spa`,
  name: SPA.name,
  alternateName: "Enhanced Aesthetics",
  description:
    "Private, home-based medical aesthetics studio in Mississauga led by Razan Shahrour, certified Para-Medical Skin Care Technician. Offering hydrabrasion, custom medi-facials, acne care, dermaplaning, LED light therapy, and body treatments.",
  url: SITE_URL,
  telephone: `+1-${SPA.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`,
  email: SPA.email,
  image: `${SITE_URL}/images/og.png`,
  logo: `${SITE_URL}/icon.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SPA.address.street,
    addressLocality: SPA.address.city,
    addressRegion: SPA.address.region,
    postalCode: SPA.address.postal,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SPA.geo.lat,
    longitude: SPA.geo.lng,
  },
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(SPA.mapsQuery)}`,
  areaServed: [
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Oakville" },
    { "@type": "City", name: "Brampton" },
    { "@type": "AdministrativeArea", name: "Peel Region" },
  ],
  openingHoursSpecification: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((dayOfWeek) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek,
    opens: "11:00",
    closes: "18:00",
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SPA.rating.toString(),
    reviewCount: SPA.reviewCount.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  founder: {
    "@type": "Person",
    name: SPA.founder.name,
    jobTitle: SPA.founder.title,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: SPA.founder.school,
    },
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: SPA.calendlyUrl,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Spa appointment",
    },
  },
  sameAs: [SPA.social.instagram, SPA.social.calendly, SPA.social.google],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: SPA.name,
  inLanguage: "en-CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-[#F8F1EC] text-[#1A1A1A] min-h-screen font-sans">
        <SkipLink />
        {children}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
