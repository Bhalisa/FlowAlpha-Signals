import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HistoricalSignal {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  entryPrice: number;
  exitPrice: number;
  pnl: number;
  timestamp: Date;
}

interface SignalHistoryProps {
  signals: HistoricalSignal[];
}

export default function SignalHistory({ signals }: SignalHistoryProps) {
  return (
    <Card className="p-4" data-testid="card-signal-history">
      <h3 className="text-lg font-semibold text-foreground mb-4">Signal History</h3>
      
      <ScrollArea className="h-[400px]">
        <div className="space-y-2">
          {signals.map((signal) => {
            const isProfitable = signal.pnl >= 0;
            
            return (
              <div 
                key={signal.id}
                className="flex items-center justify-between p-3 rounded-lg border hover-elevate"
                data-testid={`row-signal-${signal.id}`}
              >
                <div className="flex items-center gap-3">
                  {signal.type === 'BUY' ? (
                    <ArrowUp className="w-4 h-4 text-buy" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-sell" />
                  )}
                  <div>
                    <div className="font-medium text-sm text-foreground">{signal.pair}</div>
                    <div className="text-xs text-muted-foreground">
                      {signal.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-mono text-sm text-foreground">
                    {signal.entryPrice.toFixed(4)} → {signal.exitPrice.toFixed(4)}
                  </div>
                  <div className={`text-sm font-medium ${isProfitable ? 'text-profit' : 'text-loss'}`}>
                    {isProfitable ? '+' : ''}{signal.pnl.toFixed(1)} pips
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
}
