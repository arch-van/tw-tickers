// Maps ticker symbols to their company domains for logo fetching
export const tickerToDomain: Record<string, string> = {
  AAPL: 'apple.com',
  GOOGL: 'google.com',
  MSFT: 'microsoft.com',
  AMZN: 'amazon.com',
  TSLA: 'tesla.com',
  NVDA: 'nvidia.com',
  META: 'meta.com',
  NFLX: 'netflix.com',
  INTC: 'intel.com',
  AMD: 'amd.com',
  IBM: 'ibm.com',
  ORCL: 'oracle.com',
  ADBE: 'adobe.com',
  CSCO: 'cisco.com',
  QCOM: 'qualcomm.com',
};

export function getLogoUrl(ticker: string): string {
  const domain = tickerToDomain[ticker.toUpperCase()];
  return domain
    ? `https://logo.clearbit.com/${domain}`
    : '/default-logo.png'; // fallback logo in public/
}
