import SignalCard from '../SignalCard';

export default function SignalCardExample() {
  const signal = {
    id: '1',
    pair: 'EUR/USD',
    type: 'BUY' as const,
    model: 'LSTM',
    confidence: 87,
    entryPrice: 1.0842,
    currentPrice: 1.0856,
    timestamp: new Date(),
    pnl: 14
  };
  
  return <SignalCard signal={signal} />;
}
