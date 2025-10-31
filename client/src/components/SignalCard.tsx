import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export interface Signal {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL' | 'HOLD';
  model: string;
  confidence: number;
  entryPrice: number;
  currentPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  timestamp: Date;
  pnl?: number;
}

interface SignalCardProps {
  signal: Signal;
}

export default function SignalCard({ signal }: SignalCardProps) {
  const isBuy = signal.type === 'BUY';
  const isSell = signal.type === 'SELL';
  const isHold = signal.type === 'HOLD';
  
  const borderColor = isBuy ? 'border-l-buy' : isSell ? 'border-l-sell' : 'border-l-neutral';
  const bgColor = isBuy ? 'bg-buy/5' : isSell ? 'bg-sell/5' : 'bg-neutral/5';
  const textColor = isBuy ? 'text-buy' : isSell ? 'text-sell' : 'text-neutral';
  
  const Icon = isBuy ? ArrowUp : isSell ? ArrowDown : Minus;
  
  return (
    <Card className={`border-l-4 ${borderColor} ${bgColor} p-4 hover-elevate`} data-testid={`card-signal-${signal.id}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${textColor}`} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{signal.pair}</span>
              <Badge variant="outline" className="text-xs">
                {signal.model}
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {signal.timestamp.toLocaleTimeString()}
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`text-lg font-semibold ${textColor}`}>
            {signal.type}
          </div>
          <div className="text-xs text-muted-foreground">
            {signal.confidence}% conf.
          </div>
        </div>
      </div>
      
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <div className="text-xs text-muted-foreground">Entry</div>
          <div className="font-mono font-medium">{signal.entryPrice.toFixed(4)}</div>
        </div>
        {signal.currentPrice && (
          <div>
            <div className="text-xs text-muted-foreground">Current</div>
            <div className="font-mono font-medium">{signal.currentPrice.toFixed(4)}</div>
          </div>
        )}
      </div>
      
      {signal.pnl !== undefined && (
        <div className="mt-2 pt-2 border-t">
          <div className={`text-sm font-medium ${signal.pnl >= 0 ? 'text-profit' : 'text-loss'}`}>
            P/L: {signal.pnl >= 0 ? '+' : ''}{signal.pnl.toFixed(2)} pips
          </div>
        </div>
      )}
      
      <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
        <div 
          className={`h-full ${isBuy ? 'bg-buy' : isSell ? 'bg-sell' : 'bg-neutral'}`}
          style={{ width: `${signal.confidence}%` }}
        />
      </div>
    </Card>
  );
}
