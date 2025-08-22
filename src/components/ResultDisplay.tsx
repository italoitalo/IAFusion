import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Save, Share2, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultDisplayProps {
  title: string;
  description: string;
  originalImages: string[];
  generatedImage?: string;
  onNewMix: () => void;
  onCopy: () => void;
  onSave: () => void;
  onShare: () => void;
  className?: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  title,
  description,
  originalImages,
  generatedImage,
  onNewMix,
  onCopy,
  onSave,
  onShare,
  className
}) => {
  return (
    <Card className={cn("w-full max-w-4xl mx-auto", className)}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold bg-gradient-fusion bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* AI Generated Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/90 leading-relaxed text-lg">
            {description}
          </p>
        </div>
        
        {/* Original Images */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Referências Originais
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {originalImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Referência ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-card transition-smooth group-hover:shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-fusion opacity-0 group-hover:opacity-20 transition-smooth rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Generated Image */}
        {generatedImage && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Resultado da Fusão IA
            </h3>
            <div className="relative group">
              <img
                src={generatedImage}
                alt="Resultado da fusão"
                className="w-full h-64 object-cover rounded-lg shadow-fusion transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth rounded-lg"></div>
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <Button
            onClick={onNewMix}
            variant="fusion"
            size="lg"
            className="flex-1 min-w-fit"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            Gerar Nova Mistura
          </Button>
          
          <Button
            onClick={onCopy}
            variant="outline-glow"
            size="lg"
          >
            <Copy className="w-5 h-5 mr-2" />
            Copiar
          </Button>
          
          <Button
            onClick={onSave}
            variant="outline-glow"
            size="lg"
          >
            <Save className="w-5 h-5 mr-2" />
            Salvar
          </Button>
          
          <Button
            onClick={onShare}
            variant="outline-glow"
            size="lg"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Compartilhar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};