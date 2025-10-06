import { useState } from "react";
import { TripForm } from "@/components/trip-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Leaf, Fuel, TrendingUp } from "lucide-react";

export default function NewTrip() {
  const [result, setResult] = useState<{
    fuelConsumed: number;
    co2Emissions: number;
    recommendations: string[];
  } | null>(null);

  const handleSubmit = (values: any) => {
    console.log("Calculating emissions for:", values);
    
    const fuelConsumptionRates: Record<string, number> = {
      light: 0.08,
      medium: 0.12,
      heavy: 0.18,
    };
    
    const emissionFactors: Record<string, number> = {
      diesel: 2.68,
      biodiesel: 1.8,
      electric: 0.2,
    };
    
    const baseConsumption = fuelConsumptionRates[values.truckType] || 0.12;
    const weightFactor = 1 + (parseFloat(values.cargoWeight) / 10000);
    const fuelConsumed = parseFloat(values.distance) * baseConsumption * weightFactor;
    const co2Emissions = fuelConsumed * (emissionFactors[values.fuelType] || 2.68);
    
    const recommendations = [];
    if (values.fuelType === "diesel") {
      recommendations.push("Considere usar biodiesel para reduzir as emissões em 33%");
    }
    if (parseFloat(values.cargoWeight) > 8000) {
      recommendations.push("Otimize a carga para reduzir o consumo de combustível");
    }
    if (parseFloat(values.distance) > 500) {
      recommendations.push("Planeje paradas estratégicas para melhorar a eficiência");
    }
    
    setResult({
      fuelConsumed: Math.round(fuelConsumed * 10) / 10,
      co2Emissions: Math.round(co2Emissions * 10) / 10,
      recommendations,
    });
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Registrar Nova Viagem</h1>
        <p className="text-muted-foreground mt-1">
          Calcule as emissões de CO2 e o consumo de combustível da sua viagem
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dados da Viagem</CardTitle>
          <CardDescription>
            Preencha as informações abaixo para calcular as emissões
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Resultado do Cálculo</CardTitle>
            <CardDescription>
              Estimativa de emissões e consumo para esta viagem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                <Fuel className="h-5 w-5 text-chart-3 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Combustível Consumido</p>
                  <p className="text-2xl font-bold font-mono" data-testid="text-fuel-consumed">
                    {result.fuelConsumed} L
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                <Leaf className="h-5 w-5 text-chart-1 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Emissões de CO2</p>
                  <p className="text-2xl font-bold font-mono" data-testid="text-co2-emissions">
                    {result.co2Emissions} kg
                  </p>
                </div>
              </div>
            </div>

            {result.recommendations.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Recomendações para Redução
                </h3>
                <div className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <Alert key={index}>
                      <AlertDescription>{rec}</AlertDescription>
                    </Alert>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
