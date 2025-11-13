import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trees, Droplets, Target, Leaf, Map, BarChart3, TrendingUp, Sprout, Waves } from "lucide-react";
import areaImage from "@assets/Captura de tela 2025-11-12 094029_1762951706488.png";
import camboataImg from "@assets/image_1762998654450.png";
import capixinguiImg from "@assets/image_1762998726489.png";
import guaimirimImg from "@assets/image_1762999000456.png";
import embaubaImg from "@assets/image_1762999136227.png";
import cinzeiroImg from "@assets/image_1762999345807.png";
import mangueVermelhoImg from "@assets/image_1762999452444.png";
import mangueBrancoImg from "@assets/image_1762999480196.png";
import manguePretoImg from "@assets/image_1762999532780.png";

interface Species {
  name: string;
  scientificName: string;
  description: string;
  image: string;
}

export default function ReplantingMap() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
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

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5" />
              Espécies da Mata Atlântica
            </CardTitle>
            <CardDescription>
              Espécies nativas selecionadas para o reflorestamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Trees className="h-4 w-4 text-primary" />
                <span className="font-semibold text-sm">Absorção Média por Árvore</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold font-mono text-primary">163,14 kg</span>
                <span className="text-sm text-muted-foreground mb-1">de CO₂ em 20 anos</span>
              </div>
            </div>

            <div className="space-y-3">
              <div 
                className="p-3 border rounded-lg hover-elevate cursor-pointer transition-all"
                onClick={() => setSelectedSpecies({
                  name: "Camboatá",
                  scientificName: "Cupania vernalis",
                  description: "Resistente e eficiente na absorção de CO₂",
                  image: camboataImg
                })}
                data-testid="species-camboata"
              >
                <h4 className="font-semibold text-sm mb-1">Camboatá <span className="text-muted-foreground font-normal italic">(Cupania vernalis)</span></h4>
                <p className="text-sm text-muted-foreground">
                  Resistente e eficiente na absorção de CO₂
                </p>
              </div>

              <div 
                className="p-3 border rounded-lg hover-elevate cursor-pointer transition-all"
                onClick={() => setSelectedSpecies({
                  name: "Capixingui",
                  scientificName: "Croton floribundus",
                  description: "Tolerante ao estresse e ao estresse urbano",
                  image: capixinguiImg
                })}
                data-testid="species-capixingui"
              >
                <h4 className="font-semibold text-sm mb-1">Capixingui <span className="text-muted-foreground font-normal italic">(Croton floribundus)</span></h4>
                <p className="text-sm text-muted-foreground">
                  Tolerante ao estresse e ao estresse urbano
                </p>
              </div>

              <div 
                className="p-3 border rounded-lg hover-elevate cursor-pointer transition-all"
                onClick={() => setSelectedSpecies({
                  name: "Guaimirim Cravo",
                  scientificName: "Eugenia cerasiflora",
                  description: "Contribui significativamente para a absorção de carbono",
                  image: guaimirimImg
                })}
                data-testid="species-guaimirim"
              >
                <h4 className="font-semibold text-sm mb-1">Guaimirim Cravo <span className="text-muted-foreground font-normal italic">(Eugenia cerasiflora)</span></h4>
                <p className="text-sm text-muted-foreground">
                  Contribui significativamente para a absorção de carbono
                </p>
              </div>

              <div 
                className="p-3 border rounded-lg hover-elevate cursor-pointer transition-all"
                onClick={() => setSelectedSpecies({
                  name: "Embaúba",
                  scientificName: "Cecropia sp.",
                  description: "Espécie pioneira de crescimento rápido e alta capacidade de regeneração",
                  image: embaubaImg
                })}
                data-testid="species-embauba"
              >
                <h4 className="font-semibold text-sm mb-1">Embaúba <span className="text-muted-foreground font-normal italic">(Cecropia sp.)</span></h4>
                <p className="text-sm text-muted-foreground">
                  Espécie pioneira de crescimento rápido e alta capacidade de regeneração
                </p>
              </div>

              <div 
                className="p-3 border rounded-lg hover-elevate cursor-pointer transition-all"
                onClick={() => setSelectedSpecies({
                  name: "Cinzeiro",
                  scientificName: "Erisma uncinatum Warm",
                  description: "Árvore de grande porte com madeira de qualidade e importante função ecológica",
                  image: cinzeiroImg
                })}
                data-testid="species-cinzeiro"
              >
                <h4 className="font-semibold text-sm mb-1">Cinzeiro <span className="text-muted-foreground font-normal italic">(Erisma uncinatum Warm)</span></h4>
                <p className="text-sm text-muted-foreground">
                  Árvore de grande porte com madeira de qualidade e importante função ecológica
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5" />
              Ecossistemas de Manguezais
            </CardTitle>
            <CardDescription>
              Potencial excepcional de armazenamento de carbono
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Capacidade Superior
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Os manguezais são ecossistemas que absorvem mais carbono do que as florestas convencionais.
              </p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold font-mono text-primary">4 a 6×</span>
                <span className="text-sm text-muted-foreground mb-1">mais carbono que florestas</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Estoque de Carbono</h4>
                    <p className="text-sm text-muted-foreground">
                      Cada hectare de manguezal contém uma quantidade de carbono <strong>duas vezes maior</strong> que a mesma área de floresta
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart3 className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Estrutura de Carbono</h4>
                    <p className="text-sm text-muted-foreground">
                      Cerca de <strong>85% do carbono</strong> armazenado nos manguezais está localizado nos solos, onde permanece por séculos
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Trees className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Comparação com Florestas</h4>
                    <p className="text-sm text-muted-foreground">
                      Armazenam de 4 a 6 vezes mais carbono que florestas tropicais, boreais e temperadas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Sprout className="h-4 w-4 text-primary" />
                Espécies de Manguezais
              </h4>
              <div className="space-y-3">
                <div 
                  className="p-3 border rounded-lg bg-muted/30 hover-elevate cursor-pointer transition-all"
                  onClick={() => setSelectedSpecies({
                    name: "Mangue-vermelho",
                    scientificName: "Rhizophora mangle",
                    description: "Também conhecido como mangue-sapateiro",
                    image: mangueVermelhoImg
                  })}
                  data-testid="species-mangue-vermelho"
                >
                  <h4 className="font-semibold text-sm mb-1">
                    Mangue-vermelho <span className="text-muted-foreground font-normal italic">(Rhizophora mangle)</span>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Também conhecido como mangue-sapateiro
                  </p>
                </div>

                <div 
                  className="p-3 border rounded-lg bg-muted/30 hover-elevate cursor-pointer transition-all"
                  onClick={() => setSelectedSpecies({
                    name: "Mangue-preto",
                    scientificName: "Avicennia schaueriana",
                    description: "Também conhecido como siriúba ou seriba",
                    image: manguePretoImg
                  })}
                  data-testid="species-mangue-preto"
                >
                  <h4 className="font-semibold text-sm mb-1">
                    Mangue-preto <span className="text-muted-foreground font-normal italic">(Avicennia schaueriana)</span>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Também conhecido como siriúba ou seriba
                  </p>
                </div>

                <div 
                  className="p-3 border rounded-lg bg-muted/30 hover-elevate cursor-pointer transition-all"
                  onClick={() => setSelectedSpecies({
                    name: "Mangue-branco",
                    scientificName: "Laguncularia racemosa",
                    description: "Também conhecido como tinteira",
                    image: mangueBrancoImg
                  })}
                  data-testid="species-mangue-branco"
                >
                  <h4 className="font-semibold text-sm mb-1">
                    Mangue-branco <span className="text-muted-foreground font-normal italic">(Laguncularia racemosa)</span>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Também conhecido como tinteira
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedSpecies} onOpenChange={(open) => !open && setSelectedSpecies(null)}>
        <DialogContent className="max-w-3xl" data-testid="dialog-species">
          {selectedSpecies && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedSpecies.name}
                </DialogTitle>
                <p className="text-muted-foreground italic">{selectedSpecies.scientificName}</p>
              </DialogHeader>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border">
                  <img 
                    src={selectedSpecies.image} 
                    alt={`${selectedSpecies.name} (${selectedSpecies.scientificName})`}
                    className="w-full h-auto max-h-96 object-cover"
                    data-testid="img-species"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedSpecies.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
