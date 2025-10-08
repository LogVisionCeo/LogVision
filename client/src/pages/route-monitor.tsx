import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RouteMap } from "@/components/route-map";
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
                  <span>Visualização de satélite gratuita via OpenStreetMap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Marcadores de origem (verde) e destino (vermelho)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Rota direta entre as cidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Zoom e navegação interativa</span>
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
            <RouteMap origin={origin} destination={destination} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sobre o Monitoramento de Rotas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            O sistema de monitoramento de rotas utiliza <strong>OpenStreetMap</strong> (OSM) 
            e imagens de satélite da <strong>Esri</strong>, totalmente gratuitas e sem necessidade 
            de chave API.
          </p>
          <p>
            <strong>Recursos disponíveis:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Visualização em mapa de ruas ou satélite</li>
            <li>Marcadores coloridos para origem e destino</li>
            <li>Rota visualizada entre as cidades</li>
            <li>Geocodificação automática das cidades brasileiras</li>
            <li>Zoom e navegação interativa no mapa</li>
          </ul>
          <p>
            Para visualizar em satélite, clique no botão <strong>"Satélite"</strong> no canto 
            superior direito do mapa.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
