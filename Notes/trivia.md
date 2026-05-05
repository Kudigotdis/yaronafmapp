# Trivia — Documentation

## Overview

The Trivia prototype is a question-and-answer game focused on music history, local music facts (Botswana), and general pop-culture music knowledge. It is designed for short sessions and can be extended into timed rounds or multiplayer leaderboards.

## Gameplay & Rules

- Format: multiple-choice questions (A/B/C/D). Each correct answer awards points; optional time bonus.
- Access: gated to users with `yarona:profile` in localStorage.
- Difficulty Levels: Easy, Medium, Hard — adjust point values accordingly (e.g., 10/20/30 points).
- Rounds: typical session = 10 questions.

## Integration Notes

- File: `games/trivia.html` (prototype). Redirects `games/yamas-trivia.html` -> `games/trivia.html` are present.
- LocalStorage keys: `yarona:profile`, `yarona:trivia:history` (optional), `yarona:trivia:highscore`.

## Sample Questions (40)

Easy (1–15)
1. Which year were the YAMAs first held?
   - A: 2012
   - B: 2014
   - C: 2016
   - D: 2018

2. Which artist sang "Shape of You"?
   - A: Ed Sheeran
   - B: Bruno Mars
   - C: Shawn Mendes
   - D: Justin Bieber

3. "Bohemian Rhapsody" is by which band?
   - A: Queen
   - B: The Beatles
   - C: The Rolling Stones
   - D: Oasis

4. Amapiano originated in which country?
   - A: South Africa
   - B: Nigeria
   - C: Botswana
   - D: Ghana

5. Which instrument often features in jazz solos?
   - A: Saxophone
   - B: Banjo
   - C: Sitar
   - D: Marimba

6. Which platform popularised short music clips and trends?
   - A: TikTok
   - B: MySpace
   - C: SoundCloud
   - D: Mixcloud

7. "Brown Skin Girl" features which artist alongside Beyoncé?
   - A: SAINt JHN
   - B: Drake
   - C: Wizkid
   - D: Burna Boy

8. Which of these is an award show for music?
   - A: The Grammys
   - B: The Tonys
   - C: The Emmys
   - D: The Pulitzers

9. Which single helped Adele reach global fame from the album "21"?
   - A: Rolling in the Deep
   - B: Hello
   - C: Someone Like You
   - D: Skyfall

10. Where is Yarona FM based?
    - A: Botswana
    - B: South Africa
    - C: Nigeria
    - D: Kenya

Medium (16–30)
11. Who collaborated with Beyoncé on the song "Brown Skin Girl"?
    - A: SAINt JHN
    - B: Jay-Z
    - C: Kendrick Lamar
    - D: Pharrell

12. Which year did the YAMAs inaugural event take place?
    - A: 2012
    - B: 2014
    - C: 2016
    - D: 2019

13. Which Botswana artist is credited with the song "Eita"?
    - A: Vee Mampeezy
    - B: Han C
    - C: ATI
    - D: KX Legit

14. Which music genre features prominent log drums and maracas in Afrobeat fusion?
    - A: Afrobeat
    - B: Classical
    - C: Opera
    - D: Country

15. Which producer is synonymous with Amapiano?
    - A: Kabza De Small
    - B: Max Martin
    - C: Dr Dre
    - D: Timbaland

16. Which term describes the speed of a song in beats per minute?
    - A: BPM
    - B: RPM
    - C: CPS
    - D: HZ

17. What is the name of the Yarona FM youth program in the app?
    - A: Y-20
    - B: Y-POP
    - C: YOUNG
    - D: YOUTHX

18. Which streaming platform is known for curated playlists like "Discover Weekly"?
    - A: Spotify
    - B: iTunes
    - C: Bandcamp
    - D: Napster

19. Which artist released the single "Blinding Lights"?
    - A: The Weeknd
    - B: The 1975
    - C: Daft Punk
    - D: Calvin Harris

20. What is a common unit for measuring audio loudness?
    - A: Decibel (dB)
    - B: Watt (W)
    - C: Ampere (A)
    - D: Volt (V)

Hard (31–40)
21. Which producer is credited on the hit records for Drake and Rihanna collaborations in the 2010s?
    - A: Noah "40" Shebib
    - B: Max Martin
    - C: Dr Luke
    - D: Mark Ronson

22. Name the Botswana-born artist who has performed at YAMAs and national festivals.
    - A: (open response — local knowledge)

23. Which technique is commonly used to create a "sidechain" pumping effect in electronic music?
    - A: Ducking via compressor keyed to a kick drum
    - B: Increasing reverb only
    - C: Lowering master volume
    - D: Changing tempo mid-track

24. Which 1990s band produced the album "OK Computer"?
    - A: Radiohead
    - B: Oasis
    - C: Blur
    - D: Nirvana

25. Which history fact: who organised the first YAMAs (organiser name if known)?
    - A: Yarona FM (local organiser)
    - B: MTV
    - C: BBC
    - D: SABC

26. Which mixing process adjusts the stereo field of instruments?
    - A: Panning
    - B: Compression
    - C: Limiting
    - D: EQ

27. Which artist is credited with the single "Kilo Dalé" (local reference)?
    - A: KX Legit
    - B: Han C
    - C: ATI
    - D: Vee Mampeezy

28. What does "sync" licensing refer to in music?
    - A: Synchronising music with visual media (film, TV, ads)
    - B: Synchronising two tracks
    - C: Syncing playlists across devices
    - D: Synchronising audio levels

29. Which audio format offers lossy compression with small files and wide compatibility?
    - A: MP3
    - B: WAV
    - C: FLAC
    - D: AIFF

30. Who is often referred to as the "King of Pop"?
    - A: Michael Jackson
    - B: Prince
    - C: Elton John
    - D: Justin Bieber

## Notes for production

- Use `yarona:trivia:history` to store past sessions for each profile for leaderboards.
- Provide an admin interface to seed questions and mark correct answers (CSV import supported).
