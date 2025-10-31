import PriceChart from '../PriceChart';

export default function PriceChartExample() {
  const data = [
    { time: '09:00', price: 1.0820 },
    { time: '09:15', price: 1.0825 },
    { time: '09:30', price: 1.0830, signal: 'BUY' as const },
    { time: '09:45', price: 1.0835 },
    { time: '10:00', price: 1.0840 },
    { time: '10:15', price: 1.0838 },
    { time: '10:30', price: 1.0842 },
    { time: '10:45', price: 1.0845, signal: 'SELL' as const },
    { time: '11:00', price: 1.0843 },
  ];
  
  return <PriceChart data={data} pair="EUR/USD" />;
}
