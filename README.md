
# TensorWave Takehome: Stock Ticker Dashboard

This is a Next.js (Pages Router, TypeScript, Tailwind CSS) application for displaying stock market data using the AlphaVantage API.

## Features
- Homepage with 15 popular stock tickers, each as a card with company logo
- Click a ticker to view detailed company info and historical prices
- Company overview: symbol, asset type, name, description, exchange, sector, industry, market cap
- Historical prices: date, close, volume, % change from previous day
- Company logos on homepage and details page
- Type-safe API integration and reusable types
- Error handling and loading states

## Setup
1. **Clone the repo and install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```
2. **Get a free AlphaVantage API key:**
	- https://www.alphavantage.co/support/#api-key
3. **Create a `.env.local` file:**
	```env
	NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_api_key_here
	```
4. **Run the development server:**
	```bash
	npm run dev
	# or
	yarn dev
	```
5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Bonus Features
- Company logos via Clearbit Logo API (with fallback)
- TypeScript throughout
- Responsive design with Tailwind CSS

## File Structure
- `src/pages/` — Next.js pages (homepage, stock details)
- `src/components/` — Reusable UI components
- `src/utils/alphaVantage.ts` — API utilities
- `src/utils/types.ts` — Shared TypeScript types
- `src/utils/tickerLogos.ts` — Ticker-to-logo mapping

## Notes
- You must provide your own AlphaVantage API key in `.env.local`.
- If a company logo is missing, a default icon is shown.

---
Made for the TensorWave takehome project.
