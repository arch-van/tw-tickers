import { useRouter } from 'next/router';

export default function StockDetails() {
  const router = useRouter();
  const { symbol } = router.query;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Stock Details</h1>
      <p>Symbol: <span className="font-mono">{symbol}</span></p>
      <p className="mt-4 text-gray-500">Company overview and price data will appear here.</p>
    </main>
  );
}