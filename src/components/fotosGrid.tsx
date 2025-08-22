import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InspirationExample {
  id: string;
  title: string;
  combination: string;
  preview: string;
}

interface FotosGridProps {
  examples: InspirationExample[];
  onTryExample: (example: InspirationExample) => void;
  className?: string;
}

export const FotosGrid: React.FC<FotosGridProps> = ({
  examples,
  onTryExample,
  className
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Olha o que temos

        </h2>
        <p className="text-muted-foreground">
          Veja exemplos de combinações incríveis e inspire-se!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((example) => (
          <Card
            key={example.id}
            className="group cursor-pointer hover:scale-105 transition-bounce"
            onClick={() => onTryExample(example)}
          >
            <CardContent className="p-4 space-y-3">
              <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={example.preview}
                  alt={example.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {example.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {example.combination}
                </p>
              </div>
              
              <Button
                variant="outline-glow"
                size="sm"
                className="w-full opacity-0 group-hover:opacity-100 transition-smooth"
                onClick={(e) => {
                  e.stopPropagation();
                  onTryExample(example);
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Experimentar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};