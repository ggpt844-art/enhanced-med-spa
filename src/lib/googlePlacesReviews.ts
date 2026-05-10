/**
 * Google Places Details → reviews (max 5 per request per Google).
 * Call from Server Components only — requires GOOGLE_PLACES_API_KEY in env.
 */

import { SPA } from "./spa";

export type SpaGoogleReview = {
  authorName: string;
  initial: string;
  relativeTime: string;
  text: string;
  rating: number;
};

export type SpaGoogleReviewsPayload = {
  rating: number;
  userRatingsTotal: number;
  reviews: SpaGoogleReview[];
};

type DetailsResponse = {
  status: string;
  error_message?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      rating?: number;
      relative_time_description?: string;
      text?: string;
    }>;
  };
};

function initialFromAuthor(name: string): string {
  const t = name.trim();
  if (!t) return "?";
  return t[0]!.toUpperCase();
}

export async function fetchSpaGoogleReviews(): Promise<SpaGoogleReviewsPayload | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;

  const placeId = process.env.GOOGLE_PLACE_ID || SPA.googlePlaceId;
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", key);

  let res: Response;
  try {
    res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  } catch {
    return null;
  }
  if (!res.ok) return null;

  const json = (await res.json()) as DetailsResponse;
  if (json.status !== "OK" || !json.result) return null;

  const { rating = 0, user_ratings_total = 0, reviews = [] } = json.result;
  const normalized: SpaGoogleReview[] = reviews
    .filter((r) => r.text && r.author_name)
    .map((r) => ({
      authorName: r.author_name,
      initial: initialFromAuthor(r.author_name),
      relativeTime: r.relative_time_description || "",
      text: r.text!.trim(),
      rating: typeof r.rating === "number" ? r.rating : 5,
    }));

  if (normalized.length === 0 && rating === 0) return null;

  return {
    rating,
    userRatingsTotal: user_ratings_total,
    reviews: normalized,
  };
}
