// Utility functions for AlphaVantage API integration

const API_BASE = 'https://www.alphavantage.co/query';
const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

export async function fetchCompanyOverview(symbol: string) {
  const url = `${API_BASE}?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch company overview');
  return res.json();
}

export async function fetchTimeSeriesDaily(symbol: string) {
  const url = `${API_BASE}?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch time series data');
  return res.json();
}
