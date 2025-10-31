import IndicatorCard from '../IndicatorCard';

export default function IndicatorCardExample() {
  const indicator = {
    name: 'RSI (14)',
    value: 68.5,
    signal: 'SELL' as const,
    description: 'Relative Strength Index'
  };
  
  return <IndicatorCard indicator={indicator} />;
}
