import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, Droplets, Target, Leaf, Map, BarChart3, TrendingUp } from "lucide-react";
import areaImage from "@assets/Captura de tela 2025-11-12 094029_1762951706488.png";

export default function ReplantingMap() {
  const droneCapacity = 20000;
  const successRate = 0.6;
  const areaSize = 10.44;
  
  const effectiveTrees = Math.round(droneCapacity * successRate);
  const treeDensity = Math.round(effectiveTrees / areaSize);
  const annualCO2Offset = effectiveTrees * 22;
  const annualCO2OffsetTons = (annualCO2Offset / 1000).toFixed(2);

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="bg-gradient-to-br from-primary via-primary/95 to-accent/80 rounded-xl p-8 md:p-12 shadow-lg border border-primary/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <Trees className="h-4 w-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Reflorestamento Inteligente</span>
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Mapeamento de Replantio
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              Monitoramento estratégico de replantio com tecnologia drone e análise de área em tempo real
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-white/70 text-xs font-medium mb-1">Área Total</div>
              <div className="text-white text-2xl font-bold font-mono">{areaSize} km²</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Capacidade do Drone
            </CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-primary" data-testid="text-drone-capacity">
              {droneCapacity.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              cápsulas por operação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Sucesso
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-primary" data-testid="text-success-rate">
              {(successRate * 100).toLocaleString('pt-BR')}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              efetividade de germinação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Árvores Efetivas
            </CardTitle>
            <Trees className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-primary" data-testid="text-effective-trees">
              {effectiveTrees.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              árvores plantadas com sucesso
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Densidade de Plantio
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-primary" data-testid="text-tree-density">
              {treeDensity.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              árvores por km²
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              Visualização da Área de Replantio
            </CardTitle>
            <CardDescription>
              Área demarcada de 10,44 km² disponível para reflorestamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border">
              <img 
                src={areaImage} 
                alt="Área de replantio demarcada com 10,44 km²" 
                className="w-full h-auto"
                data-testid="img-replanting-area"
              />
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Sobre a Área</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A área demarcada representa {areaSize} km² de terreno adequado para replantio. 
                    Os marcadores em amarelo delimitam o perímetro completo da zona de reflorestamento.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Impacto Ambiental Anual
            </CardTitle>
            <CardDescription>
              Compensação de carbono estimada por ano
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-end gap-2 mb-2">
                <div className="text-4xl font-bold font-mono text-primary" data-testid="text-co2-offset-tons">
                  {annualCO2OffsetTons}
                </div>
                <div className="text-lg font-semibold text-muted-foreground mb-1">toneladas</div>
              </div>
              <p className="text-sm text-muted-foreground">
                CO₂ compensado anualmente
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Trees className="h-4 w-4 text-primary" />
                Cálculo de Compensação
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Árvores efetivas:</span>
                  <span className="font-mono font-semibold">{effectiveTrees.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">CO₂ por árvore/ano:</span>
                  <span className="font-mono font-semibold">22 kg</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total anual:</span>
                    <span className="font-mono font-bold text-primary">{annualCO2Offset.toLocaleString('pt-BR')} kg</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border">
              <h4 className="font-semibold text-sm mb-2">Especificações Técnicas</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Drone com capacidade de 20.000 cápsulas por voo</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Taxa de germinação efetiva de 60%</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Densidade otimizada de {treeDensity.toLocaleString('pt-BR')} árvores/km²</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Compensação baseada em 22kg CO₂/árvore/ano</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Metodologia de Replantio</CardTitle>
          <CardDescription>
            Processo técnico de reflorestamento com tecnologia drone
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-sm">Mapeamento Aéreo</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Análise detalhada da área com identificação de zonas ideais para plantio e verificação de condições do solo.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-sm">Lançamento de Cápsulas</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Distribuição precisa de 20.000 cápsulas biodegradáveis com sementes nativas e nutrientes essenciais.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-sm">Monitoramento Contínuo</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Acompanhamento periódico da taxa de germinação e desenvolvimento das mudas através de imagens de satélite.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
