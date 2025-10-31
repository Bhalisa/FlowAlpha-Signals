import SignalHistory from '../SignalHistory';

export default function SignalHistoryExample() {
  const signals = [
    { id: '1', pair: 'EUR/USD', type: 'BUY' as const, entryPrice: 1.0820, exitPrice: 1.0845, pnl: 25, timestamp: new Date(Date.now() - 3600000) },
    { id: '2', pair: 'GBP/USD', type: 'SELL' as const, entryPrice: 1.2650, exitPrice: 1.2630, pnl: 20, timestamp: new Date(Date.now() - 7200000) },
    { id: '3', pair: 'USD/JPY', type: 'BUY' as const, entryPrice: 149.50, exitPrice: 149.35, pnl: -15, timestamp: new Date(Date.now() - 10800000) },
    { id: '4', pair: 'EUR/USD', type: 'SELL' as const, entryPrice: 1.0860, exitPrice: 1.0840, pnl: 20, timestamp: new Date(Date.now() - 14400000) },
  ];
  
  return <SignalHistory signals={signals} />;
}
