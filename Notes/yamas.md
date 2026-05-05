# YAMAs — Documentation

## Overview

The Yarona FM Music Awards (YAMAs) are Yarona FM's annual awards celebration recognising excellence across Botswana's music industry. This doc covers categories, nomination and voting process, rules, schedule, past winners, and integration notes for the app.

## Categories (shortlist)

- Artist of the Year
- Song of the Year
- Best Male Single
- Best Female Single
- Best Newcomer
- Best Hip Hop / Motswako
- Best Collabo
- Best RnB Single
- Best Afro-Pop
- Best Producer
- People's Choice Artist
- Social Media Award
- YAMAs Hall of Fame
- Yarona FM Icon Award

## Nomination Process

- Call for entries: artists/publishers submit tracks via `submit@yaronafm.co.bw` or the Submit Music form in the app.
- Eligibility window: releases within the calendar year preceding the awards (define exact dates per edition).
- Submission fields: artist name, track title, release date, label, genre, streaming links (YouTube/Spotify), cover art, contact email/phone.

## Voting Mechanism

- Voting channels: in-app voting (`top40.html` style), SMS short-code, and official web portal (if available).
- Client-side prototype enforces a 10-votes-per-day per user limit (localStorage key `yarona:top40:YYYY-MM-DD`).
- For production, enforce server-side checks tied to verified user accounts and SMS receipts.

## Rules & Governance

- One vote per category per action; daily caps apply (e.g., max 10 votes across categories per day per user) — configurable.
- Age restrictions: voters must be 13+ to vote; prize eligibility requires 18+.
- Fraud prevention: combine SMS verification and account verification to prevent duplicate votes.
- Transparency: publish final tallies with timestamps and anonymised vote metadata for audit.

## Schedule (example)

- Call for entries: Jan 1 – Mar 31
- Shortlist announcement: May 15
- Voting opens: May 20 – June 20
- Awards ceremony: July (TBD)

## Prizes & Sponsorship

- Categories may have sponsored prizes (cash, vouchers, products).
- Sponsors must be listed on the app's sponsor card with external link to sponsor page.

## Past Winners (sample extracted from app content)

- YAMAs 2014 (1st Edition)
  - Artist of the Year: Vee Mampeezy
  - Song of the Year: Vee Mampeezy - "Eita"
  - Best Female: Samantha Mogwe
  - Best Newcomer: PGB Linxsta

- YAMAs 2015
  - Artist of the Year: MMP Family
  - Mascom Song of the Year: MMP Family - "Lebala Ka Nna"

- YAMAs 2016 — Artist of the Year: Vee

- YAMAs 2017 — Artist of the Year: Yaw Bannerman

- YAMAs 2018 — Artist of the Year: Ban T

- YAMAs 2019 — Artist of the Year: ATI

## Voting UI & App Integration

- Files: `yamas.html`, `top40.html`, `view-yamas` in `index.html`.
- Voting prototype: `top40.html` demonstrates daily limits via `yarona:top40:YYYY-MM-DD`.
- Sponsor card: include `sponsor-card` artwork and external link; open links in new tab.

## Acceptance Criteria (for app feature)

- Users can view categories and nominees.
- Logged-in users can vote via app or SMS; client enforces daily caps.
- Admin interface allows uploading nominees and closing/opening voting windows.
- Final results exportable as CSV for verification.

## Contact & Support

- Email: info@yaronafm.co.bw (general enquiries)
- Submissions: submit@yaronafm.co.bw
- SMS short-codes: 16639 (quiz stub) and 16106 (app contact/SMS shown in UI) — confirm production short-codes with product.

## Notes & Next Steps

- Replace client-side vote enforcement with server-side validation before production launch.
- Confirm exact voting windows, prize rules, and legal T&Cs with legal/product teams.
