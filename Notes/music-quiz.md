# Music Quiz — Documentation

## Overview

The Music Quiz is a short, engaging game that tests listeners' song and artist knowledge. It's gated to logged-in users (localStorage key `yarona:profile`) and intended to be simple to run as a browser-based prototype. Scores are simulated locally; prize-claim instructions are provided via SMS stub number `16639`.

## Gameplay & Rules

- Format: single-player, quick-play session producing a numeric score (0–100).
- Access: requires a logged-in profile in `localStorage` at key `yarona:profile`.
- Age: prize eligibility recommended for players age >= 18; age is read from `yarona:profile.age` when present.
- Replay: unlimited for practice; prize-entry rules require at most one qualifying submission per day per profile (enforced client-side if desired).
- Prize claim: players instructed to send `SCORE <space> NAME` to SMS number `16639` (stub). Example: `78 Jane Doe`.

## Integration Notes

- File: `games/quiz.html` is the prototype page.
- CTA: `music-quiz.html` (redirect) and `act.html` link to `games/quiz.html`.
- LocalStorage keys used: `yarona:profile`, optionally `yarona:quiz:lastSubmission`.
- SMS number is a stub — replace with production number when available.

## UI Copy (CTA)

Headline: "Music Quiz — Play & Win"

Body: "Win prizes — play the Music Quiz and send your score to 16639 with your name to claim. Gated to logged-in listeners."

Button: "Play (simulate)"

## Scoring

- Prototype generates a random score for demonstration. In production, score is computed from correct answers / total and may include time-based bonuses.

## Questions (Sample bank)

Format: multiple-choice (A/B/C/D) or open-entry when needed.

1. Which artist sang the song "Shape of You"?
   - A: Ed Sheeran
   - B: Bruno Mars
   - C: Shawn Mendes
   - D: Justin Bieber

2. "Blinding Lights" was a hit for which artist?
   - A: The Weeknd
   - B: Drake
   - C: Post Malone
   - D: Sam Smith

3. Which genre is Amapiano most associated with?
   - A: South African house music
   - B: Country
   - C: Classical
   - D: Reggae

4. Which artist released the album "Lemonade"?
   - A: Beyoncé
   - B: Rihanna
   - C: Nicki Minaj
   - D: SZA

5. The song "Brown Skin Girl" features which global artist?
   - A: Beyoncé
   - B: Rihanna
   - C: Adele
   - D: Ariana Grande

6. Which producer is known for bringing Afrobeat sounds to global audiences (Nigeria)?
   - A: Burna Boy
   - B: Wizkid
   - C: Don Jazzy
   - D: Davido

7. Which instrument is central to jazz music?
   - A: Saxophone
   - B: Kora
   - C: Balafon
   - D: Sitar

8. "Bohemian Rhapsody" was performed by which band?
   - A: Queen
   - B: Pink Floyd
   - C: The Beatles
   - D: Led Zeppelin

9. Which song contains the line "I'm gonna pop some tags"?
   - A: Thrift Shop (Macklemore)
   - B: Uptown Funk
   - C: Can't Hold Us
   - D: Treasure

10. Which Botswana artist is known for the hit "Eita" (past YAMAs reference)?
    - A: Vee Mampeezy
    - B: Han C
    - C: ATI
    - D: KX Legit

11. Who sang "Uptown Funk"?
    - A: Mark Ronson ft. Bruno Mars
    - B: Pharrell Williams
    - C: Bruno Mars solo
    - D: Justin Timberlake

12. Which music streaming metric is often used to calculate chart positions?
    - A: Number of plays/streams
    - B: Number of likes only
    - C: Number of app installs
    - D: Number of ads watched

13. Which year did Adele release the album "21"?
    - A: 2011
    - B: 2009
    - C: 2013
    - D: 2015

14. Which South African artist is associated with Amapiano popularity?
    - A: Kabza De Small
    - B: Drake
    - C: Ed Sheeran
    - D: Akon

15. A common BPM range for House music is:
    - A: 118–130
    - B: 60–80
    - C: 90–110
    - D: 140–160

16. Which platform is best known for short music clips and viral trends?
    - A: TikTok
    - B: LinkedIn
    - C: Reddit
    - D: GitHub

17. Who is the lead singer of Coldplay?
    - A: Chris Martin
    - B: Bono
    - C: Adam Levine
    - D: Thom Yorke

18. Which of these is a music award show?
    - A: The Grammys
    - B: The Tonys
    - C: The Emmys
    - D: The Olivier Awards

19. "Someone You Loved" is a hit by which artist?
    - A: Lewis Capaldi
    - B: Sam Smith
    - C: James Arthur
    - D: Ed Sheeran

20. Which artist collaborated with Beyoncé on the song "Brown Skin Girl"?
    - A: SAINt JHN
    - B: Drake
    - C: Kendrick Lamar
    - D: Wizkid

## Notes for production

- Replace the simulated scoring with deterministic scoring if using a question bank.
- Store prize submissions under `yarona:quiz:submissions` if you want client-side tracking for QA.
- Replace `16639` with the official SMS gateway when available; include instructions for message format and short-code confirmation.
