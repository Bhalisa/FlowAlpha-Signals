import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface IndicatorData {
  name: string;
  value: number | string;
  signal: 'BUY' | 'SELL' | 'NEUTRAL';
  description: string;
}

interface IndicatorCardProps {
  indicator: IndicatorData;
}

export default function IndicatorCard({ indicator }: IndicatorCardProps) {
  const signalColor = 
    indicator.signal === 'BUY' ? 'bg-buy text-white' :
    indicator.signal === 'SELL' ? 'bg-sell text-white' :
    'bg-neutral text-black';
  
  return (
    <Card className="p-4" data-testid={`card-indicator-${indicator.name}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-medium text-sm text-foreground">{indicator.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{indicator.description}</p>
        </div>
        <Badge className={signalColor}>
          {indicator.signal}
        </Badge>
      </div>
      <div className="mt-3">
        <div className="text-2xl font-mono font-semibold text-foreground">
          {typeof indicator.value === 'number' ? indicator.value.toFixed(2) : indicator.value}
        </div>
      </div>
    </Card>
  );
}
