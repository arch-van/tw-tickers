import Link from 'next/link';

interface TickerProps {
  symbol: string;
}

export default function Ticker({ symbol }: TickerProps) {
  return (
    <Link
      href={`/${symbol}`}
      className="block border rounded-lg shadow hover:shadow-lg transition p-6 bg-white hover:bg-gray-300 text-center"
    >
      <span className="text-xl font-semibold text-gray-900">{symbol}</span>
    </Link>
  );
}