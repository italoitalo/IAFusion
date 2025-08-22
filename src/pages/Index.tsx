import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SearchField } from '@/components/SearchField';
import { FusionLoader } from '@/components/FusionLoader';
import { ResultDisplay } from '@/components/ResultDisplay';
import { InspirationGrid } from '@/components/InspirationGrid';
import { FotosGrid } from '@/components/fotosGrid';
import { Blend, Sparkles, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

import ibsen from '@/assets/Ibsen.png'
import fusao from '@/assets/fusao.png'
import hotel from '@/assets/hotel.png'
import heroImage from '@/assets/hero-fusion.jpg';
import leopoldo from '@/assets/leopoldo_old.png';
import leopoldo2 from '@/assets/leopoldo.png'

const Index = () => {
  const [environment1, setEnvironment1] = useState('');
  const [environment2, setEnvironment2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState<'searching' | 'mixing' | 'generating'>('searching');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    title: '',
    description: '',
    originalImages: [] as string[],
    generatedImage: ''
  });

  // Mock data for autocomplete suggestions
const suggestions = [
    'Residencial Urbano - Residencial Leopoldo – SP',
    'Residencial Urbano -  Residencial Ibsen – SP',
    'HOTELEIRA Campo - Hotel Botanique – CJ',
  ];


  // Mock inspiration examples
  const inspirationExamples = [
    {
      id: '1',
      title: 'A casa dos sonhos',
      combination: 'Residencial Leopoldo + Residencial Ibsen',
      preview: leopoldo
    },
    {
      id: '2',
      title: 'Minimalismo Sofisticado',
      combination: 'Residencial Leopoldo +  Hotel Botanique',
      preview: heroImage
    },
    {
      id: '3',
      title: 'Trabalho & Relaxamento',
      combination: 'Residencial Ibsen + Hotel Botanique',
      preview: fusao
    },
    
  ];

// fotosGrid
  const ifotosExamples = [
    {
      id: '1',
      title: 'Residencial Urbano - Residencial Leopoldo – SP',
      combination: 'Residencial Leopoldo',
      preview: leopoldo2
    },
    {
      id: '2',
      title: 'Residencial Urbano - Residencial Ibsen - SP  ',
      combination: 'Residencial Ibsen',
      preview: ibsen
    },
    {
      id: '3',
      title: 'HOTELEIRA Campo - Hotel Botanique – CJ',
      combination: 'Hotel Botanique',
      preview: hotel
    }
  ];

  const handleMixEnvironments = async () => {
    if (!environment1 || !environment2) {
      toast.error('Por favor, selecione dois ambientes para misturar!');
      return;
    }

    if (environment1 === environment2) {
      toast.error('Selecione ambientes diferentes para criar uma mistura única!');
      return;
    }

    setIsLoading(true);
    setShowResult(false);

    // Simulate AI processing with different stages
    setLoadingStage('searching');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoadingStage('mixing');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingStage('generating');
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock AI result
    const mockResult = {
      title: `Fusão ${environment1} + ${environment2}`,
      description: `Esta mistura extraordinária combina a elegância sofisticada do ${environment1} com a funcionalidade inovadora do ${environment2}. O resultado é um ambiente que transcende os limites convencionais, criando uma experiência espacial única onde cada elemento dialoga harmoniosamente. A paleta de cores se equilibra entre tons neutros e acentos vibrantes, enquanto a iluminação natural se integra perfeitamente com soluções tecnológicas modernas. Esta fusão representa uma nova linguagem arquitetônica que celebra tanto o conforto quanto a estética contemporânea.`,
      originalImages: [heroImage, heroImage],
      generatedImage: heroImage
    };

    setResult(mockResult);
    setIsLoading(false);
    setShowResult(true);
    toast.success('Mistura criada com sucesso!');
  };

  const handleNewMix = () => {
    setEnvironment1('');
    setEnvironment2('');
    setShowResult(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result.description);
    toast.success('Descrição copiada para a área de transferência!');
  };

  const handleSave = () => {
    toast.success('Resultado salvo com sucesso!');
  };

  const handleShare = () => {
    toast.success('Link de compartilhamento copiado!');
  };

  const handleTryExample = (example: any) => {
    const [env1, env2] = example.combination.split(' + ');
    setEnvironment1(env1);
    setEnvironment2(env2);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Powered by AI</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-fusion bg-clip-text text-transparent">
                Misturador de Ambientes
              </span>
              <br />
              <span className="text-foreground">com Inteligência Artificial</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Misture estilos, ambientes ou projetos e crie cenas únicas com IA. 
              Transforme referências do nosso portfólio em inspirações completamente novas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <Blend className="w-4 h-4" />
                <span>Ex: Combine "Ibsen Litoral Sala" com "Brevedere Banheiro"</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Mixing Interface */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              Selecione as Referências para Misturar
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Digite ou selecione referências do nosso portfólio
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Primeiro Ambiente
                </label>
                <SearchField
                  placeholder="Ex: Ibsen Litoral Sala"
                  value={environment1}
                  onChange={setEnvironment1}
                  suggestions={suggestions}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Segundo Ambiente
                </label>
                <SearchField
                  placeholder="Ex: Brevedere Banheiro"
                  value={environment2}
                  onChange={setEnvironment2}
                  suggestions={suggestions}
                />
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleMixEnvironments}
                variant="hero"
                size="lg"
                disabled={isLoading}
                className="px-12 py-4"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <Blend className="w-6 h-6 mr-3" />
                    Misturar com IA
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
              <Button> <a href="https://mvpstudioapp.com.br/" target="_blank"> clica aqui </a></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="container mx-auto px-4 py-16">
          <FusionLoader isVisible={isLoading} stage={loadingStage} />
        </section>
      )}

      {/* Result Display */}
      {showResult && (
        <section className="container mx-auto px-4 py-16">
          <ResultDisplay
            title={result.title}
            description={result.description}
            originalImages={result.originalImages}
            generatedImage={result.generatedImage}
            onNewMix={handleNewMix}
            onCopy={handleCopy}
            onSave={handleSave}
            onShare={handleShare}
          />
        </section>
      )}

    {/* Inspiration Section */}
      {!showResult && !isLoading && (
        <section className="container mx-auto px-4 py-16">
          <FotosGrid
            examples={ifotosExamples}
            onTryExample={handleTryExample}
          />
        </section>
      )}
      
      {/* Inspiration Section */}
      {!showResult && !isLoading && (
        <section className="container mx-auto px-4 py-16">
          <InspirationGrid
            examples={inspirationExamples}
            onTryExample={handleTryExample}
          />
        </section>
      )}
    </div>
  );
};

export default Index;
