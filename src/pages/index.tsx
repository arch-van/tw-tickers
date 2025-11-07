import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Placeholder tickers for navigation
  const tickers = [
    "AAPL",
    "GOOGL",
    "MSFT",
    "AMZN",
    "TSLA",
    "NVDA",
    "META",
    "NFLX",
    "INTC",
    "AMD",
    "IBM",
    "ORCL",
    "ADBE",
    "CSCO",
    "QCOM",
  ];

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl font-bold mb-4">Stock List</h1>
        <ul className="grid grid-cols-8 gap-4">
          {tickers.map((ticker) => (
            <li key={ticker} className="border rounded p-4 hover:bg-gray-100">
              <Link href={`/${ticker}`}>{ticker}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
