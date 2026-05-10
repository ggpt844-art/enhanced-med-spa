import { SPA } from "./spa";
import { fallbackReviews } from "./content";
import { fetchSpaGoogleReviews } from "./googlePlacesReviews";

const AVATAR_PALETTE = ["#0E4F4A", "#C9A66A", "#E8C4BD", "#1A6F68", "#9C7A39"] as const;

/** Normalized row for `<GoogleReviewCard />` (server-fetched or fallback). */
export type DisplayReviewRow = {
  key: string;
  name: string;
  initial: string;
  date: string;
  body: string;
  rating: number;
  reviewCount?: number;
  localGuide?: boolean;
  avatarColor: string;
};

export async function loadReviewsForSite(max: number): Promise<{
  rating: number;
  userRatingsTotal: number;
  fromGoogle: boolean;
  reviews: DisplayReviewRow[];
}> {
  const live = await fetchSpaGoogleReviews();

  if (live && live.reviews.length > 0) {
    return {
      rating: live.rating,
      userRatingsTotal: live.userRatingsTotal,
      fromGoogle: true,
      reviews: live.reviews.slice(0, max).map((r, i) => ({
        key: `${r.authorName}-${r.relativeTime}-${i}`,
        name: r.authorName,
        initial: r.initial,
        date: r.relativeTime,
        body: r.text,
        rating: r.rating,
        avatarColor: AVATAR_PALETTE[i % AVATAR_PALETTE.length]!,
      })),
    };
  }

  return {
    rating: SPA.rating,
    userRatingsTotal: SPA.reviewCount,
    fromGoogle: false,
    reviews: fallbackReviews.slice(0, max).map((r, i) => ({
      key: r.name,
      name: r.name,
      initial: r.initial,
      date: r.date,
      body: r.body,
      rating: 5,
      reviewCount: r.reviewCount,
      localGuide: r.localGuide,
      avatarColor: r.avatarColor,
    })),
  };
}
