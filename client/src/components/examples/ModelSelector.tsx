import ModelSelector from '../ModelSelector';
import { useState } from 'react';

export default function ModelSelectorExample() {
  const [selected, setSelected] = useState<'basic' | 'deeplearning'>('basic');
  
  return <ModelSelector selectedModel={selected} onSelectModel={setSelected} />;
}
