import Ticker from './Ticker';

interface TickerListProps {
  tickers: string[];
}

export default function TickerList({ tickers }: TickerListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {tickers.map((ticker) => (
        <Ticker key={ticker} symbol={ticker} />
      ))}
    </div>
  );
}