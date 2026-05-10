import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/components/FAQ";

/**
 * Treatments — the SEO + booking spine of the site.
 *
 * Core facial prices match the public Instagram menu (May 2026). Add-ons are
 * listed separately in `treatmentAddons`. Items not on that menu keep
 * reasonable "from" pricing until Razan confirms.
 *
 * Each `slug` becomes /services#<slug>. Injectables, fillers, and laser are
 * not offered — see trust line on /services.
 */
export const treatments = [
  {
    slug: "signature-hydrabrasion",
    category: "Face",
    name: "Luxury Hydrabrasion Facial",
    duration: "75 min",
    priceFrom: 160,
    pitch: "Glassier, plumper, brighter skin in one session.",
    blurb:
      "Razan's luxury hydrabrasion. Cleansing, gentle exfoliation, and deep hydration delivered through a hydrabrasion wand — pulls out impurities while pushing in serums tailored to your skin. Zero downtime.",
    bestFor: ["Dullness", "Dehydration", "Texture", "Pre-event glow"],
    feature: true,
    homeResultPair: {
      beforeSrc: "/images/results/home-hydrabrasion-before.png",
      afterSrc: "/images/results/home-hydrabrasion-after.png",
    },
  },
  {
    slug: "custom-medi-facial",
    category: "Face",
    name: "Classic Facial",
    duration: "60 min",
    priceFrom: 85,
    pitch: "Your essential reset — calm, clean, glowing.",
    blurb:
      "A full facial tailored to your skin that day: cleanse, exfoliation, treatment mask, and hydration. Ideal for maintenance or a first visit when you want results without a peel or device-heavy protocol.",
    bestFor: ["First-time clients", "Sensitive skin", "Maintenance"],
  },
  {
    slug: "hydrabrasion-facial",
    category: "Face",
    name: "Hydrabrasion Facial",
    duration: "60 min",
    priceFrom: 130,
    pitch: "The glow-up facial — deep cleanse and hydrabrasion infusion.",
    blurb:
      "Clinical hydrabrasion in a full facial format: cleansing, exfoliation, extractions as needed, and serum infusion through the hydrabrasion wand for visibly clearer, plumper skin the same day.",
    bestFor: ["Dullness", "Congestion", "Texture", "Pre-event"],
  },
  {
    slug: "algae-peel",
    category: "Face",
    name: "Algae Peel",
    duration: "45–60 min",
    priceFrom: 70,
    pitch: "Refined texture and clarity — powered by professional algae resurfacing.",
    blurb:
      "A results-focused algae peel that lifts buildup, softens congestion, and jump-starts renewal. Razan calibrates strength and timing for your skin so you get visible refinement with the right amount of downtime for you.",
    bestFor: ["Texture", "Dullness", "Congestion", "Uneven tone"],
    homeResultPair: {
      beforeSrc: "/images/results/home-medi-algae-before.png",
      afterSrc: "/images/results/home-medi-algae-after.png",
    },
  },
  {
    slug: "acne-reset",
    category: "Face",
    name: "Acne Facial",
    duration: "90 min",
    priceFrom: 110,
    pitch: "A series-based plan to clear breakouts at the root.",
    blurb:
      "Designed for breakout-prone and inflamed skin. Includes deep cleanse, gentle extractions, calming masks, and an at-home protocol. Best results over 4–6 sessions, two to four weeks apart.",
    bestFor: ["Active acne", "Hormonal breakouts", "Post-acne marks"],
    feature: true,
    homeResultPair: {
      beforeSrc: "/images/results/home-acne-before.png",
      afterSrc: "/images/results/home-acne-after.png",
    },
  },
  {
    slug: "dermaplaning-glow",
    category: "Face",
    name: "Dermaplaning",
    duration: "Add-on or stand-alone",
    priceFrom: 25,
    pitch: "Smoother makeup, instantly brighter skin.",
    blurb:
      "Professional dermaplaning to lift dead skin and peach fuzz — often added to a facial for $25. Book as an add-on with your treatment or ask Razan about a stand-alone session if you're not sure.",
    bestFor: ["Pre-event prep", "Texture", "Better product absorption"],
  },
  {
    slug: "led-light-therapy",
    category: "Face",
    name: "LED Light Therapy",
    duration: "30 min add-on · 45 min stand-alone",
    priceFrom: 25,
    pitch: "Calm inflammation, boost healing — without lifting a finger.",
    blurb:
      "Medical-grade red, blue, and near-infrared light. Often stacked onto a facial as a $25 add-on. Reduces redness, supports collagen, and accelerates healing post-treatment.",
    bestFor: ["Acne", "Redness", "Post-treatment recovery", "Anti-aging"],
  },
  {
    slug: "back-treatment",
    category: "Body",
    name: "Back Treatment",
    duration: "60 min",
    priceFrom: 140,
    pitch: "A facial — for the skin you forget about.",
    blurb:
      "Cleanse, exfoliate, gentle extractions, and a hydrating finishing mask for your back. Especially helpful before summer, weddings, and the kind of dresses you don't want a cardigan over.",
    bestFor: ["Bacne", "Pre-wedding", "Special events"],
  },
  {
    slug: "body-polish",
    category: "Body",
    name: "Brightening Body Polish",
    duration: "60 min",
    priceFrom: 130,
    pitch: "Soft, even-toned, head-to-toe glow.",
    blurb:
      "Full-body exfoliation followed by a deep moisture lock. Targets uneven tone, dullness, and rough patches on knees, elbows, and decolletage.",
    bestFor: ["Pre-event", "Dryness", "Even tone"],
  },
  {
    slug: "consult",
    category: "Consult",
    name: "Skin Consultation",
    duration: "30 min",
    priceFrom: 0,
    pitch: "Not sure where to start? Start here.",
    blurb:
      "A 30-minute one-on-one with Razan to look at your skin, talk through your goals, and map a realistic plan — including what to do *and* not do at home. Free with first booking.",
    bestFor: ["Newcomers", "Multiple concerns", "Plan-builders"],
  },
] as const;

/** Facial add-ons from the Instagram menu — stack onto a booked facial. */
export const treatmentAddons = [
  { name: "Scalp massage", price: 10 },
  { name: "High frequency", price: 15 },
  { name: "Hydrojelly mask", price: 25 },
  { name: "Dermaplaning", price: 25 },
  { name: "LED light therapy", price: 25 },
  { name: "RF lifting & tightening", price: 45 },
  { name: "Resurfacing peel", price: 70 },
] as const;

export type TreatmentAddon = (typeof treatmentAddons)[number];

export type Treatment = (typeof treatments)[number];

/** Treatments visible on /services (home can spotlight others). */
export function isListedOnServicesPage(t: Treatment): boolean {
  return !("hideFromServicesPage" in t && t.hideFromServicesPage);
}

/**
 * Fallback review cards if the Google Places API is unavailable.
 * Live site prefers `fetchSpaGoogleReviews()` in Server Components.
 */
export type FallbackReview = {
  name: string;
  initial: string;
  date: string;
  body: string;
  reviewCount: number;
  avatarColor: string;
  localGuide?: boolean;
};

export const fallbackReviews: FallbackReview[] = [
  {
    name: "Yosra K.",
    initial: "Y",
    date: "Classic Facial",
    body: "Razan took good care of my skin — I love the results. She explained the purpose of every step and product. The environment is calm and soothing, overall a very relaxing experience. I'm looking forward to my next appointment.",
    reviewCount: 12,
    avatarColor: "#0E4F4A",
  },
  {
    name: "Eunica D.",
    initial: "E",
    date: "Long-time client",
    body: "Razan is a highly skilled and knowledgeable esthetician. She takes the time to go over your skin concerns and personalizes every treatment. The skin glow-up I've had because of her is much appreciated. Her space is welcoming, neat, and well-maintained.",
    reviewCount: 8,
    localGuide: true,
    avatarColor: "#C9A66A",
  },
  {
    name: "Sylvia P.",
    initial: "S",
    date: "Found her on Instagram",
    body: "Razan is wonderful and very knowledgeable. Her space is clean and welcoming. I love that she adds to her stories if she has an opening, and often posts specials. My skin is glowing when I leave. Cannot say enough good things — worth taking a chance and pampering yourself.",
    reviewCount: 14,
    avatarColor: "#E8C4BD",
  },
  {
    name: "May T.",
    initial: "M",
    date: "Hydrabrasion",
    body: "I love Razan's services, especially the hydrabrasion. I always leave feeling hydrated and refreshed — my skin looks like it's glowing every time. I would recommend coming here.",
    reviewCount: 5,
    avatarColor: "#0E4F4A",
  },
  {
    name: "Dede T.",
    initial: "D",
    date: "Skin transformation",
    body: "Razan is the best — she has completely changed my skin. Her hospitality is amazing. She knows how to take care of you and make sure you're getting the right treatment.",
    reviewCount: 9,
    localGuide: true,
    avatarColor: "#C9A66A",
  },
  {
    name: "Anika R.",
    initial: "A",
    date: "Acne Reset · 4-week mark",
    body: "After two months of regular sessions my skin has actually changed — fewer breakouts, less redness, real results. Razan tells you what's going on and what to do at home, no pressure. The privacy of the space is its own gift.",
    reviewCount: 3,
    avatarColor: "#E8C4BD",
  },
];

/**
 * Razan is open 11–6 every day per Birdeye + Fresha listings.
 */
export const hours = [
  { day: "Monday", time: "11:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 6:00 PM" },
  { day: "Thursday", time: "11:00 AM – 6:00 PM" },
  { day: "Friday", time: "11:00 AM – 6:00 PM" },
  { day: "Saturday", time: "11:00 AM – 6:00 PM" },
  { day: "Sunday", time: "11:00 AM – 6:00 PM" },
];

export const features: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: ShieldCheck,
    title: "Medically trained",
    blurb:
      "Razan is a certified Para-Medical Skin Care Technician (Body Pro Academy, 2022). Every plan is grounded in skin science — not trends.",
  },
  {
    icon: HeartHandshake,
    title: "One client at a time",
    blurb:
      "No waiting room, no overlapping bookings, no rushed handoffs. The studio is yours for the full session.",
  },
  {
    icon: Leaf,
    title: "Private home studio",
    blurb:
      "A calm, clean treatment room in a residential setting — clinical-grade equipment without the cold clinical feel.",
  },
  {
    icon: Sparkles,
    title: "Result-driven plans",
    blurb:
      "Honest timelines, realistic expectations, products that actually work. We tell you when to space out treatments — and when one isn't enough.",
  },
];

export const consultIncludes = [
  { label: "Skin analysis", value: "Included" },
  { label: "Treatment plan", value: "Personalized" },
  { label: "Aftercare notes", value: "Written" },
];

export const promiseCards = [
  {
    title: "No upselling",
    body: "If a treatment isn't right for you, Razan will tell you — and recommend the one that is, even if she doesn't offer it.",
  },
  {
    title: "Real timelines",
    body: "Skin doesn't change in one visit. We tell you up front whether a result needs one session, four, or none at all.",
  },
  {
    title: "Privacy-first",
    body: "Home studio, one client at a time, signed consent before every photo. Your skin journey stays yours.",
  },
];

export const firstVisitSteps = [
  {
    title: "Book online or message",
    blurb:
      "Pick a time on Fresha, or message Razan on Instagram if you have questions first. You'll get the address after booking.",
  },
  {
    title: "Arrive at the studio",
    blurb:
      "Quiet, residential setting with private parking. You're the only client during your session.",
  },
  {
    title: "Skin consult",
    blurb:
      "10–15 minutes one-on-one to look at your skin, talk through your goals, and confirm the right treatment for *today*.",
  },
  {
    title: "Your treatment",
    blurb:
      "60–90 minutes of cleansing, exfoliation, customized serums, and (depending on your plan) hydrabrasion or LED.",
  },
  {
    title: "Aftercare + plan",
    blurb:
      "You leave with a written aftercare guide and — if you want one — a realistic plan for your next 4–8 weeks.",
  },
];

/**
 * IG-grid filler used on the home page. Each is a label + caption.
 * When real images come in, we drop them into /public/images/ig/ and
 * point each entry at the file. Until then they render as gradient tiles.
 */
export const instagramShots = [
  { label: "Hydrabrasion glow", caption: "Mid-session, post-extraction." },
  { label: "Acne transformation", caption: "Six weeks of consistent care." },
  { label: "LED therapy", caption: "Calming inflammation under blue light." },
  { label: "Studio details", caption: "Clean tools, calm light, ready." },
  { label: "Body treatments", caption: "Smoother, more even tone." },
  { label: "Gift cards", caption: "The most-requested gift on the grid." },
];

/** Before/after cases with real client photos — `/results` gallery + shared data. */
export const hydrabrasionHomeResult = {
  treatment: "Signature Hydrabrasion · single session",
  note:
    "Same-day brightening and visible texture refinement. Captured with consent, matched lighting — about 30 minutes post-treatment.",
  beforeSrc: "/images/results/home-hydrabrasion-before.png",
  afterSrc: "/images/results/home-hydrabrasion-after.png",
} as const;

export const algaePeelFaceResult = {
  treatment: "Algae peel · face",
  note:
    "Professional algae resurfacing for texture, congestion, and clarity. Strength and dwell time customized; often booked as a series for stubborn texture.",
  beforeSrc: "/images/results/home-medi-algae-before.png",
  afterSrc: "/images/results/home-medi-algae-after.png",
} as const;

export const acneResetHomeResult = {
  treatment: "Acne Reset · inflammation & texture",
  note:
    "Active breakouts calmed and skin looks clearer and more even over a multi-session plan. Photos with consent, same setup for both.",
  beforeSrc: "/images/results/home-acne-before.png",
  afterSrc: "/images/results/home-acne-after.png",
} as const;

export const armPeelHomeResult = {
  treatment: "Arm peel · texture refinement",
  note:
    "Algae peel protocol on the arms for rough, bumpy skin (including keratosis pilaris). Often booked as a series; same lighting, consent on file — your plan is customized at consult.",
  beforeSrc: "/images/results/home-arm-peel-before.png",
  afterSrc: "/images/results/home-arm-peel-after.png",
} as const;

export const microneedlingHomeResult = {
  treatment: "Microneedling · texture & scars",
  note:
    "Collagen-induction for pitted texture and acne scarring. Best as a series spaced weeks apart; every photo with written consent, matched lighting and angle.",
  beforeSrc: "/images/results/home-microneedling-before.png",
  afterSrc: "/images/results/home-microneedling-after.png",
} as const;

/** Full gallery: every case we currently publish with real before/after assets. */
export const beforeAfters = [
  hydrabrasionHomeResult,
  algaePeelFaceResult,
  acneResetHomeResult,
  microneedlingHomeResult,
  armPeelHomeResult,
] as const;

export const faqItems: FaqItem[] = [
  {
    q: "Where exactly is the studio?",
    a: "The studio is a private treatment room inside a residential home in Mississauga (Erin Mills area, 3449 Covent Crescent, L5M 7P1). The full address is shared after you book on Fresha. There's quiet street parking and you walk straight in — no waiting room, no foot traffic.",
  },
  {
    q: "Is it safe? It's a home, not a clinic.",
    a: "Yes. Razan is a certified Para-Medical Skin Care Technician (Body Pro Academy, 2022) and runs the space as a single-treatment-room studio with clinical-grade tools, fresh linens per client, and full hygiene protocols. Most clients say it feels calmer and cleaner than a chain spa.",
  },
  {
    q: "What does the first visit look like?",
    a: "You arrive, we sit down for a 10–15 minute skin consult, then move into your treatment. Plan on 75–90 minutes door-to-door. You leave with a written aftercare guide and — if you want it — a plan for your next sessions.",
  },
  {
    q: "Do you do Botox, fillers, or laser?",
    a: "No. The studio focuses on result-driven facials, hydrabrasion, acne care, dermaplaning, LED light therapy, and body treatments. If you ask about an injectable or laser service we don't offer, Razan will refer you to a clinic she trusts.",
  },
  {
    q: "How are payments handled?",
    a: "Booking on Fresha holds your spot. Payment is taken at the studio at the end of your session — debit, credit, e-transfer, or cash. You'll see exact pricing before you book.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Please give 24 hours' notice if you need to reschedule — the studio runs one client at a time, so a no-show means a full session lost. Late cancellations may be charged 50% of the booking.",
  },
  {
    q: "Can I bring a friend?",
    a: "The studio is built for one client at a time, so we ask that you come solo unless it's a parent/guardian for a minor (14+). For couples or duo bookings, message Razan and we'll work something out.",
  },
  {
    q: "Do you sell gift cards?",
    a: "Yes — digital gift cards are available year-round through Fresha. They're the most-requested gift on the IG grid. Mother's Day, birthdays, weddings, and 'I survived the year' all qualify.",
  },
];

/**
 * Journal articles — these double as long-tail SEO assets.
 * Status `live` means the slug routes to a real article; `coming` is a
 * teaser card with no link.
 */
export const journalPosts = [
  {
    slug: "hydrabrasion-vs-hydrafacial",
    title: "Hydrabrasion vs. HydraFacial: which is right for your skin?",
    tag: "Treatment guide",
    date: "Apr 2026",
    intro:
      "They sound the same and even feel the same in the chair, but the results, intensity, and price point are different. Here's the honest breakdown.",
    status: "live" as const,
  },
  {
    slug: "first-time-private-medi-spa",
    title: "What to expect at a private home-based medi spa",
    tag: "First visit",
    date: "Coming soon",
    intro:
      "From parking to aftercare — exactly how a session at Enhanced Aesthetics works, why one-client-at-a-time matters, and what makes a home studio safe.",
    status: "coming" as const,
  },
  {
    slug: "acne-reset-roadmap",
    title: "The 6-week Acne Reset roadmap",
    tag: "Acne",
    date: "Coming soon",
    intro:
      "What real, lasting clearing actually looks like — week by week, session by session.",
    status: "coming" as const,
  },
];
