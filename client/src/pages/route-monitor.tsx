import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomMap } from "@/components/custom-map";
import { MapPin, Navigation } from "lucide-react";

export default function RouteMonitor() {
  const [origin, setOrigin] = useState("São Paulo");
  const [destination, setDestination] = useState("Rio de Janeiro");
  const [tempOrigin, setTempOrigin] = useState("São Paulo");
  const [tempDestination, setTempDestination] = useState("Rio de Janeiro");

  const handleUpdateRoute = () => {
    setOrigin(tempOrigin);
    setDestination(tempDestination);
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Monitoramento de Rotas</h1>
        <p className="text-muted-foreground">
          Visualize rotas em tempo real com imagens de satélite
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              Configurar Rota
            </CardTitle>
            <CardDescription>
              Digite as cidades de origem e destino
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="origin-input">
                <MapPin className="h-4 w-4 inline mr-2" />
                Origem
              </Label>
              <Input
                id="origin-input"
                data-testid="input-origin"
                value={tempOrigin}
                onChange={(e) => setTempOrigin(e.target.value)}
                placeholder="Ex: São Paulo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination-input">
                <MapPin className="h-4 w-4 inline mr-2" />
                Destino
              </Label>
              <Input
                id="destination-input"
                data-testid="input-destination"
                value={tempDestination}
                onChange={(e) => setTempDestination(e.target.value)}
                placeholder="Ex: Rio de Janeiro"
              />
            </div>
            <Button
              onClick={handleUpdateRoute}
              className="w-full"
              data-testid="button-update-route"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Atualizar Rota
            </Button>

            <div className="pt-4 border-t space-y-3">
              <h3 className="font-semibold text-sm">Recursos do Mapa</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Mapa customizado do Brasil com visualização satélite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Marcador "O" (verde) para origem e "D" (vermelho) para destino</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Distância real calculada entre as cidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Zoom com scroll e navegação arrastando o mapa</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Visualização da Rota</CardTitle>
            <CardDescription>
              {origin} → {destination}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CustomMap origin={origin} destination={destination} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sobre o Monitoramento de Rotas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            O sistema de monitoramento de rotas utiliza um <strong>mapa customizado do Brasil</strong> 
            desenvolvido especialmente para LogVision, sem dependências externas.
          </p>
          <p>
            <strong>Recursos disponíveis:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Visualização em modo mapa ou satélite (renderizado proceduralmente)</li>
            <li>20 principais cidades brasileiras mapeadas com coordenadas reais</li>
            <li>Cálculo de distância real usando fórmula de Haversine</li>
            <li>Controles de zoom (+/-) e reset de visualização</li>
            <li>Navegação por arrastar (drag) no mapa</li>
            <li>Zoom com scroll do mouse</li>
          </ul>
          <p>
            <strong>Cidades disponíveis:</strong> São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, 
            Curitiba, Porto Alegre, Salvador, Fortaleza, Recife, Manaus, Belém, Goiânia, Florianópolis, 
            Vitória, Natal, Campo Grande, Cuiabá, São Luís, Maceió, João Pessoa.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
