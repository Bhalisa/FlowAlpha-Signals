import CurrencySelector from '../CurrencySelector';
import { useState } from 'react';

export default function CurrencySelectorExample() {
  const [selected, setSelected] = useState('EUR/USD');
  
  const pairs = [
    { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0842, change: 0.0023, changePercent: 0.21 },
    { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.2634, change: -0.0012, changePercent: -0.09 },
    { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 149.82, change: 0.45, changePercent: 0.30 },
  ];
  
  return <CurrencySelector pairs={pairs} selectedPair={selected} onSelectPair={setSelected} />;
}
