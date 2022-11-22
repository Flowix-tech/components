/**
 *  Formats number to target short string representation
 */
const formatNumber = (num: number) => {
  const table = [
    { limit: 1e3, symbol: '' },
    { limit: 1e6, symbol: 'k' },
    { limit: 1e9, symbol: 'M' },
    { limit: 1e12, symbol: 'G' }
  ];
  const interval = table.find(item => num < item.limit);
  if (interval) {
    let value = (num * 1000) / interval.limit;
    value = Math.round(value * 10) / 10;
    return `${value}${interval.symbol}`;
  }
  return '0';
};

export default formatNumber;
