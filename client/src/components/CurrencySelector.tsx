import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

export interface CurrencyPair {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface CurrencySelectorProps {
  pairs: CurrencyPair[];
  selectedPair: string;
  onSelectPair: (symbol: string) => void;
}

export default function CurrencySelector({ pairs, selectedPair, onSelectPair }: CurrencySelectorProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {pairs.map((pair) => {
        const isSelected = pair.symbol === selectedPair;
        const isPositive = pair.change >= 0;
        
        return (
          <Button
            key={pair.symbol}
            variant={isSelected ? "default" : "ghost"}
            size="sm"
            onClick={() => onSelectPair(pair.symbol)}
            className="flex-shrink-0"
            data-testid={`button-pair-${pair.symbol}`}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{pair.symbol}</span>
              <div className="flex items-center gap-1 text-xs font-mono">
                {isPositive ? (
                  <TrendingUp className="w-3 h-3 text-profit" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-loss" />
                )}
                <span className={isPositive ? "text-profit" : "text-loss"}>
                  {isPositive ? "+" : ""}{pair.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          </Button>
        );
      })}
    </div>
  );
}
