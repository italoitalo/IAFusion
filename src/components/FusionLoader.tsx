import React from 'react';
import { cn } from '@/lib/utils';

interface FusionLoaderProps {
  isVisible: boolean;
  stage: 'searching' | 'mixing' | 'generating';
  className?: string;
}

const stageMessages = {
  searching: "Buscando referências no portfólio...",
  mixing: "Misturando com inteligência artificial...",
  generating: "Deixando a criatividade falar mais alto..."
};

export const FusionLoader: React.FC<FusionLoaderProps> = ({
  isVisible,
  stage,
  className
}) => {
  if (!isVisible) return null;

  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-12 space-y-6",
      className
    )}>
      {/* Animated fusion circles */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-gradient-primary animate-fusion-pulse"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-secondary animate-fusion-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-4 rounded-full bg-background animate-fusion-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Stage message */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-foreground animate-pulse">
          {stageMessages[stage]}
        </p>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};