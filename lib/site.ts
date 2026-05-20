// Site-wide config.
//
// CALENDLY_URL — the scheduling link used by every "Book a 15-min call"
// button (nav, hero, CTA, Safe Compute section).
//
// >>> Replace the fallback below with the real Calendly 15-minute event link. <<<
// You can also set NEXT_PUBLIC_CALENDLY_URL in Railway -> Variables to override
// it without a code change.
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/golivio/15min";
