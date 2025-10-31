import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Card } from "@/components/ui/card";

export interface ChartDataPoint {
  time: string;
  price: number;
  signal?: 'BUY' | 'SELL';
}

interface PriceChartProps {
  data: ChartDataPoint[];
  pair: string;
}

export default function PriceChart({ data, pair }: PriceChartProps) {
  return (
    <Card className="p-4" data-testid="card-price-chart">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{pair} Price Chart</h3>
        <p className="text-sm text-muted-foreground">Real-time price with signal markers</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            style={{ fontSize: '12px', fontFamily: 'var(--font-mono)' }}
            domain={['dataMin - 0.001', 'dataMax + 0.001']}
            tickFormatter={(value) => value.toFixed(4)}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              color: 'hsl(var(--foreground))'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={false}
          />
          {data.map((point, index) => {
            if (point.signal === 'BUY') {
              return <ReferenceLine key={index} x={point.time} stroke="hsl(var(--buy-signal))" strokeDasharray="3 3" />;
            } else if (point.signal === 'SELL') {
              return <ReferenceLine key={index} x={point.time} stroke="hsl(var(--sell-signal))" strokeDasharray="3 3" />;
            }
            return null;
          })}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
