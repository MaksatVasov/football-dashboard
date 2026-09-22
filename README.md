# One Football ⚽

Modern football dashboard built with React + TypeScript + Vite.

Live demo: [https://football-dashboard-lyart.vercel.app](https://football-dashboard-lyart.vercel.app)

---

## About

One Football is a football dashboard built with React and TypeScript. It shows the day's matches, league standings, and a detailed match page (lineups, events, formation, statistics), lets you follow clubs as favorites, and includes a news section and a shop. Comes with dark and light themes.

---

## Features

- Live & upcoming matches of the day
- League standings (Premier League by default)
- Detailed match page (statistics, lineups, events, formation)
- Follow / unfollow clubs (favorites)
- News section
- Shop (merchandise)
- Dark / Light theme
- Profile page
- Rate-limit handling from the API

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **React Router DOM 7**
- **Lucide React** (icons)
- **API-Football** (api-sports.io)

Deployed on **Vercel**.

---

## What's under the hood

Beyond the feature list, a few things worth mentioning for reviewers:

- **Typed API layer**: all API-Football responses (fixtures, statistics, lineups, events, player ratings) are typed by hand from the real API responses, not generated blindly — including edge cases like optional `grid` positions, string vs. number statistic values, and missing data for lower-league fixtures.
- **Graceful degradation**: statistics, formations, and lineups are not guaranteed by the free API tier (coverage varies by league). Each section falls back to an explicit empty state instead of crashing or showing broken UI.
- **Rate-limit aware**: the free plan caps requests per day. Finished matches are cached in `localStorage` so revisiting them costs zero requests, and a dedicated UI state handles hitting the daily limit gracefully instead of a blank screen.
- **Derived visuals, not fake data**: the match timeline (goals/cards) and player positions on the pitch (formation view) are computed directly from the API's raw event and lineup data — no hardcoded coordinates or invented stats.
- **Theme system**: dark/light mode is driven by CSS custom properties (not per-component `dark:` classes everywhere), synced to `localStorage`, and applied before first paint to avoid a flash of the wrong theme.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/one-football.git
cd one-football
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```
VITE_FOOTBALL_API_KEY=your_api_key_here
```

Get a free key at [api-football.com](https://www.api-football.com) (100 requests/day on the free plan).

### 4. Run the dev server

```bash
npm run dev
```

---

## Known limitations

- Free API tier: 100 requests/day, resets at 00:00 UTC.
- Statistics, lineups, and formation data aren't available for every league/match (depends on API coverage).
- No backend: the API key is used client-side, which is fine for a portfolio project but not for production use.

---
