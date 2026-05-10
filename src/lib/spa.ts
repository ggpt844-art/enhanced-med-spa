/** Google Place ID for Enhanced Aesthetics (Maps, Places API, review links). */
const GOOGLE_PLACE_ID = "ChIJRzCReoRDK4gRZKxrEB7olh8" as const;

/**
 * Single source of truth for the business.
 * Edit here and every page (home, /about, /services, footer, schema, sitemap) updates.
 */
export const SPA = {
  name: "Enhanced Aesthetics Medi Spa",
  shortName: "Enhanced Aesthetics",
  tagline: "Result-driven beauty for women.",
  founder: {
    name: "Razan Shahrour",
    short: "Razan",
    title: "Medical Aesthetician & Skin Specialist",
    credentials: "Para-Medical Skin Care Technician",
    school: "Body Pro Beauty & Aesthetics Academy, Brampton, ON",
    schoolYear: 2022,
  },
  /** Plain digits for tel: links. Display string is separate. */
  phone: "6473002171",
  phoneDisplay: "(647) 300-2171",
  whatsapp: "16473002171",
  email: "hello@enhancedaesthetics.ca",
  address: {
    street: "3449 Covent Crescent",
    line1: "3449 Covent Crescent",
    line2: "Mississauga, ON L5M 7P1",
    city: "Mississauga",
    region: "ON",
    postal: "L5M 7P1",
    country: "Canada",
  },
  /** Used for the Google Maps embed and "directions" link. */
  mapsQuery:
    "Enhanced Aesthetics Medi Spa, 3449 Covent Crescent, Mississauga, ON L5M 7P1",
  /** Short landmark line — used in footer + about teaser. */
  landmark: "Private home studio · Erin Mills · Mississauga",
  /** Approx geo for schema.org JSON-LD. Lifesaver for local SEO. */
  geo: { lat: 43.5505, lng: -79.7211 },
  yearsInPractice: 4,
  treatmentsPerformed: 2_000,
  /** Synced with Google Business Profile (Places API aggregate when refreshed). */
  rating: 4.9,
  reviewCount: 66,
  igFollowers: 2472,
  /** Google Maps place — reviews, directions, and SEO. */
  googlePlaceId: GOOGLE_PLACE_ID,
  /** Opens the Business Profile in Google Maps (read reviews, photos, directions). */
  googleMapsPlaceUrl: `https://www.google.com/maps/search/?api=1&query_place_id=${GOOGLE_PLACE_ID}`,
  /**
   * Opens Google’s review composer for this Place ID.
   * (Generic Maps search URLs do not reliably open “leave a review” for the business.)
   */
  googleWriteReviewUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
  /** Fresha booking page for embed + deep link. */
  freshaUrl:
    "https://www.fresha.com/lvp/enhanced-aesthetics-medi-spa-covent-crescent-mississauga-yXWVjW",
  /** Fallback booking link Razan already uses today. */
  calendlyUrl: "https://calendly.com/enhancedaesthetics",
  social: {
    instagram: "https://www.instagram.com/enhancedaesthetics.spa/",
    instagramHandle: "@enhancedaesthetics.spa",
    google: `https://www.google.com/maps/search/?api=1&query_place_id=${GOOGLE_PLACE_ID}`,
    fresha:
      "https://www.fresha.com/lvp/enhanced-aesthetics-medi-spa-covent-crescent-mississauga-yXWVjW",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Journal", href: "/journal" },
  { label: "Book", href: "/book" },
] as const;

export const SITE_URL = "https://enhancedaesthetics.ca";
