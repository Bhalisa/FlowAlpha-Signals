import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";

interface MetricProps {
  label: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
}

function MetricCard({ label, value, change, icon }: MetricProps) {
  const isPositive = change !== undefined && change >= 0;
  
  return (
    <Card className="p-4" data-testid={`card-metric-${label.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        {change !== undefined && (
          <div className={`text-sm font-medium ${isPositive ? 'text-profit' : 'text-loss'}`}>
            {isPositive ? '+' : ''}{change.toFixed(1)}%
          </div>
        )}
      </div>
      <div className="mt-3">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-2xl font-mono font-semibold text-foreground mt-1">{value}</div>
      </div>
    </Card>
  );
}

export default function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard 
        label="Total Signals" 
        value="247" 
        change={12.5}
        icon={<Activity className="w-4 h-4 text-primary" />}
      />
      <MetricCard 
        label="Win Rate" 
        value="68.4%" 
        change={3.2}
        icon={<Target className="w-4 h-4 text-primary" />}
      />
      <MetricCard 
        label="Avg Profit" 
        value="+24.3" 
        change={5.7}
        icon={<TrendingUp className="w-4 h-4 text-profit" />}
      />
      <MetricCard 
        label="Total P/L" 
        value="+3,487" 
        change={8.9}
        icon={<TrendingUp className="w-4 h-4 text-profit" />}
      />
    </div>
  );
}
