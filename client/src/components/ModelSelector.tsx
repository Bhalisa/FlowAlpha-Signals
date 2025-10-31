import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Brain } from "lucide-react";

export type ModelType = 'basic' | 'deeplearning';

interface ModelSelectorProps {
  selectedModel: ModelType;
  onSelectModel: (model: ModelType) => void;
}

export default function ModelSelector({ selectedModel, onSelectModel }: ModelSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card 
        className={`p-4 cursor-pointer hover-elevate ${selectedModel === 'basic' ? 'border-primary border-2' : ''}`}
        onClick={() => onSelectModel('basic')}
        data-testid="card-model-basic"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Basic Indicators</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Traditional technical analysis using MA, RSI, MACD, and Bollinger Bands
            </p>
            {selectedModel === 'basic' && (
              <Button size="sm" variant="default" className="mt-3" data-testid="button-active-basic">
                Active
              </Button>
            )}
          </div>
        </div>
      </Card>
      
      <Card 
        className={`p-4 cursor-pointer hover-elevate ${selectedModel === 'deeplearning' ? 'border-primary border-2' : ''}`}
        onClick={() => onSelectModel('deeplearning')}
        data-testid="card-model-deeplearning"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Deep Learning</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Neural network models for pattern recognition and price prediction
            </p>
            {selectedModel === 'deeplearning' && (
              <Button size="sm" variant="default" className="mt-3" data-testid="button-active-deeplearning">
                Active
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
