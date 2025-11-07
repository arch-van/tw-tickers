import Link from 'next/link';
import { getLogoUrl } from '@/utils/tickerLogos';

interface TickerProps {
  symbol: string;
}

export default function Ticker({ symbol }: TickerProps) {
  return (
    <Link
      href={`/${symbol}`}
      className="border rounded-lg shadow hover:shadow-lg transition p-6 bg-white hover:bg-gray-300 text-center flex flex-col items-center gap-2"
    >
      <img
        src={getLogoUrl(symbol)}
        alt={`${symbol} logo`}
        className="w-12 h-12 object-contain mx-auto mb-2 bg-white rounded-full border"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.src.endsWith('/default-logo.png')) {
            target.src = '/default-logo.png';
            target.onerror = null;
          }
        }}
      />
      <span className="text-xl font-semibold text-gray-900">{symbol}</span>
    </Link>
  );
}