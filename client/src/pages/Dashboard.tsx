import { useState } from "react";
import CurrencySelector, { type CurrencyPair } from "@/components/CurrencySelector";
import SignalCard, { type Signal } from "@/components/SignalCard";
import IndicatorCard, { type IndicatorData } from "@/components/IndicatorCard";
import PriceChart, { type ChartDataPoint } from "@/components/PriceChart";
import ModelSelector, { type ModelType } from "@/components/ModelSelector";
import LiveIndicator from "@/components/LiveIndicator";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import SignalHistory from "@/components/SignalHistory";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings, Bell } from "lucide-react";

// todo: remove mock functionality - Mock data for prototype
const mockCurrencyPairs: CurrencyPair[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0842, change: 0.0023, changePercent: 0.21 },
  { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.2634, change: -0.0012, changePercent: -0.09 },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 149.82, change: 0.45, changePercent: 0.30 },
];

const mockSignals: Signal[] = [
  {
    id: '1',
    pair: 'EUR/USD',
    type: 'BUY',
    model: 'LSTM',
    confidence: 87,
    entryPrice: 1.0842,
    currentPrice: 1.0856,
    timestamp: new Date(Date.now() - 300000),
    pnl: 14
  },
  {
    id: '2',
    pair: 'GBP/USD',
    type: 'SELL',
    model: 'MACD',
    confidence: 72,
    entryPrice: 1.2640,
    currentPrice: 1.2634,
    timestamp: new Date(Date.now() - 600000),
    pnl: 6
  },
  {
    id: '3',
    pair: 'USD/JPY',
    type: 'BUY',
    model: 'RSI',
    confidence: 65,
    entryPrice: 149.75,
    currentPrice: 149.82,
    timestamp: new Date(Date.now() - 900000),
    pnl: 7
  },
];

const mockIndicators: IndicatorData[] = [
  { name: 'RSI (14)', value: 68.5, signal: 'SELL', description: 'Overbought territory' },
  { name: 'MACD', value: 0.0012, signal: 'BUY', description: 'Bullish crossover' },
  { name: 'MA Cross', value: 'Bullish', signal: 'BUY', description: '50/200 golden cross' },
  { name: 'Bollinger', value: 'Upper', signal: 'SELL', description: 'Near upper band' },
];

const mockChartData: ChartDataPoint[] = [
  { time: '09:00', price: 1.0820 },
  { time: '09:15', price: 1.0825 },
  { time: '09:30', price: 1.0830, signal: 'BUY' },
  { time: '09:45', price: 1.0835 },
  { time: '10:00', price: 1.0840 },
  { time: '10:15', price: 1.0838 },
  { time: '10:30', price: 1.0842 },
  { time: '10:45', price: 1.0845, signal: 'SELL' },
  { time: '11:00', price: 1.0843 },
  { time: '11:15', price: 1.0846 },
  { time: '11:30', price: 1.0844 },
  { time: '11:45', price: 1.0850 },
];

const mockHistoricalSignals = [
  { id: '1', pair: 'EUR/USD', type: 'BUY' as const, entryPrice: 1.0820, exitPrice: 1.0845, pnl: 25, timestamp: new Date(Date.now() - 3600000) },
  { id: '2', pair: 'GBP/USD', type: 'SELL' as const, entryPrice: 1.2650, exitPrice: 1.2630, pnl: 20, timestamp: new Date(Date.now() - 7200000) },
  { id: '3', pair: 'USD/JPY', type: 'BUY' as const, entryPrice: 149.50, exitPrice: 149.35, pnl: -15, timestamp: new Date(Date.now() - 10800000) },
  { id: '4', pair: 'EUR/USD', type: 'SELL' as const, entryPrice: 1.0860, exitPrice: 1.0840, pnl: 20, timestamp: new Date(Date.now() - 14400000) },
  { id: '5', pair: 'GBP/USD', type: 'BUY' as const, entryPrice: 1.2600, exitPrice: 1.2635, pnl: 35, timestamp: new Date(Date.now() - 18000000) },
];

export default function Dashboard() {
  const [selectedPair, setSelectedPair] = useState('EUR/USD');
  const [selectedModel, setSelectedModel] = useState<ModelType>('basic');

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between p-4 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4">
            <img 
              src="/attached_assets/transparent-logo-1024_1760297805978.png" 
              alt="FlowAlpha Signals Logo" 
              className="w-10 h-10"
              data-testid="img-logo"
            />
            <h1 className="text-2xl font-semibold text-foreground">FlowAlpha Signals</h1>
            <LiveIndicator />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" data-testid="button-notifications">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-settings">
              <Settings className="w-5 h-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto p-6">
        {/* Currency Selector */}
        <div className="mb-6">
          <CurrencySelector 
            pairs={mockCurrencyPairs}
            selectedPair={selectedPair}
            onSelectPair={setSelectedPair}
          />
        </div>

        {/* Performance Metrics */}
        <div className="mb-6">
          <PerformanceMetrics />
        </div>

        {/* Model Selector */}
        <div className="mb-6">
          <ModelSelector 
            selectedModel={selectedModel}
            onSelectModel={setSelectedModel}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Live Signals Panel */}
          <div className="xl:col-span-3">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-foreground">Live Signals</h2>
              <p className="text-sm text-muted-foreground">Real-time trading signals</p>
            </div>
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {mockSignals.map((signal) => (
                  <SignalCard key={signal.id} signal={signal} />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Chart Area */}
          <div className="xl:col-span-6 space-y-6">
            <PriceChart data={mockChartData} pair={selectedPair} />
            
            {selectedModel === 'basic' ? (
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-4">Technical Indicators</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mockIndicators.map((indicator) => (
                    <IndicatorCard key={indicator.name} indicator={indicator} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6 border rounded-lg bg-card">
                <h2 className="text-lg font-semibold text-foreground mb-4">Deep Learning Model</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Model Confidence</span>
                      <span className="text-sm font-medium text-foreground">87%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '87%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Prediction</div>
                    <div className="text-2xl font-semibold text-buy">Bullish Trend</div>
                    <div className="text-sm text-muted-foreground mt-1">Next 4 hours forecast</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-xs text-muted-foreground">Model: LSTM Neural Network</div>
                    <div className="text-xs text-muted-foreground">Training Accuracy: 94.2%</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Signal History Panel */}
          <div className="xl:col-span-3">
            <SignalHistory signals={mockHistoricalSignals} />
          </div>
        </div>
      </div>
    </div>
  );
}
