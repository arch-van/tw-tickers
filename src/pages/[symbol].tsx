import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchCompanyOverview, fetchTimeSeriesDaily } from '@/utils/alphaVantage';
import type { CompanyOverview, PriceItem } from '@/utils/types';


export default function StockDetails() {
  const router = useRouter();
  const { symbol } = router.query;

  const [overview, setOverview] = useState<CompanyOverview | null>(null);
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol || typeof symbol !== 'string') return;
    setLoading(true);
    setError(null);
    Promise.all([
      fetchCompanyOverview(symbol),
      fetchTimeSeriesDaily(symbol)
    ])
      .then(([overviewData, priceData]) => {
        setOverview(overviewData);
        // Parse time series data
        const series = priceData['Time Series (Daily)'] || {};
        const dates = Object.keys(series).sort((a, b) => (a < b ? 1 : -1));
        const priceItems: PriceItem[] = [];
        for (let i = 0; i < dates.length; i++) {
          const date = dates[i];
          const day = series[date];
          const close = parseFloat(day['4. close']);
          const volume = parseInt(day['5. volume'], 10);
          let percentChange = 'N/A';
          if (i < dates.length - 1) {
            const prevClose = parseFloat(series[dates[i + 1]]['4. close']);
            percentChange = (((close - prevClose) / prevClose) * 100).toFixed(2) + '%';
          }
          priceItems.push({ date, close, volume, percentChange });
        }
        setPrices(priceItems);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load data.');
      })
      .finally(() => setLoading(false));
  }, [symbol]);

  return (
    <main className="p-8"> 
      <button
        onClick={() => router.push('/')}
        className="mb-6 px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300 text-base text-zinc-700 transition cursor-pointer"
        aria-label="Back to homepage"
      >
       {"< "}Back to Home
      </button>
      <h1 className="text-2xl font-bold mb-4">Stock Details - {symbol}</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && overview && (
        <div className="mb-8 border-2 p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">{overview.Name || 'N/A'} ({overview.Symbol || 'N/A'})</h2>
          <p className="mb-2 text-gray-400">{overview.Description || 'N/A'}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div><span className="font-semibold">Asset Type:</span> {overview.AssetType || 'N/A'}</div>
            <div><span className="font-semibold">Exchange:</span> {overview.Exchange || 'N/A'}</div>
            <div><span className="font-semibold">Sector:</span> {overview.Sector || 'N/A'}</div>
            <div><span className="font-semibold">Industry:</span> {overview.Industry || 'N/A'}</div>
            <div><span className="font-semibold">Market Cap:</span> {overview.MarketCapitalization || 'N/A'}</div>
          </div>
        </div>
      )}
      {!loading && !error && prices.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Historical Prices</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1 border text-gray-900">Date</th>
                  <th className="px-2 py-1 border text-gray-900">Close</th>
                  <th className="px-2 py-1 border text-gray-900">Volume</th>
                  <th className="px-2 py-1 border text-gray-900">% Change</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item) => (
                  <tr key={item.date}>
                    <td className="px-2 py-1 border whitespace-nowrap">{item.date}</td>
                    <td className="px-2 py-1 border">{item.close.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="px-2 py-1 border">{item.volume.toLocaleString()}</td>
                    <td className="px-2 py-1 border">{item.percentChange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}