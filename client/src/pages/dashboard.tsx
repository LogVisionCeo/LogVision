import { StatCard } from "@/components/stat-card";
import { EmissionsChart } from "@/components/emissions-chart";
import { FuelEfficiencyChart } from "@/components/fuel-efficiency-chart";
import { TripTable } from "@/components/trip-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Truck, Fuel, TrendingDown, Plus, TreePine } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const mockEmissionsData = [
    { month: "Jan", emissions: 4200 },
    { month: "Fev", emissions: 3800 },
    { month: "Mar", emissions: 4500 },
    { month: "Abr", emissions: 3200 },
    { month: "Mai", emissions: 2800 },
    { month: "Jun", emissions: 2400 },
  ];

  const mockFuelData = [
    { truckType: "Leve", consumption: 8.5 },
    { truckType: "Médio", consumption: 12.3 },
    { truckType: "Pesado", consumption: 18.7 },
  ];

  const mockRecentTrips = [
    {
      id: "1",
      origin: "São Paulo, SP",
      destination: "Rio de Janeiro, RJ",
      distance: 430,
      co2Emissions: 287,
      date: "05/10/2025",
      truckType: "heavy",
      fuelType: "diesel",
    },
    {
      id: "2",
      origin: "Belo Horizonte, MG",
      destination: "Vitória, ES",
      distance: 520,
      co2Emissions: 198,
      date: "04/10/2025",
      truckType: "medium",
      fuelType: "biodiesel",
    },
    {
      id: "3",
      origin: "Curitiba, PR",
      destination: "Porto Alegre, RS",
      distance: 711,
      co2Emissions: 124,
      date: "03/10/2025",
      truckType: "medium",
      fuelType: "electric",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard de Emissões</h1>
          <p className="text-muted-foreground mt-1">
            Monitoramento em tempo real da pegada de carbono da sua frota
          </p>
        </div>
        <Link href="/new-trip">
          <Button data-testid="button-new-trip">
            <Plus className="mr-2 h-4 w-4" />
            Nova Viagem
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total CO2"
          value="12,450"
          unit="kg"
          icon={Leaf}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Distância Total"
          value="45,230"
          unit="km"
          icon={Truck}
          trend={{ value: 8, isPositive: false }}
        />
        <StatCard
          title="Combustível"
          value="4,892"
          unit="L"
          icon={Fuel}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Redução de CO2"
          value="2,340"
          unit="kg"
          icon={TrendingDown}
          trend={{ value: 23, isPositive: true }}
        />
      </div>

      <Card className="border-2 border-primary bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <TreePine className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Compensação Ambiental Total
              </p>
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-total-trees">
                566 árvores
              </p>
              <p className="text-sm text-muted-foreground">
                Quantidade necessária para compensar as emissões totais da frota este mês
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Emissões Atuais</p>
                <p className="text-lg font-bold font-mono">12,450 kg CO2</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Absorção Necessária</p>
                <p className="text-sm font-mono text-primary">22 kg/árvore/ano</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <EmissionsChart data={mockEmissionsData} />
        <FuelEfficiencyChart data={mockFuelData} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
          <div>
            <CardTitle>Viagens Recentes</CardTitle>
            <CardDescription>Últimas 10 viagens registradas</CardDescription>
          </div>
          <Link href="/history">
            <Button variant="outline" size="sm" data-testid="button-view-all">
              Ver Todas
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <TripTable 
            trips={mockRecentTrips}
            onView={(id) => console.log("View trip:", id)}
            onEdit={(id) => console.log("Edit trip:", id)}
            onDelete={(id) => console.log("Delete trip:", id)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
