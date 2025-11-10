import { StatCard } from "@/components/stat-card";
import { EmissionsChart } from "@/components/emissions-chart";
import { FuelEfficiencyChart } from "@/components/fuel-efficiency-chart";
import { TripTable } from "@/components/trip-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Truck, Fuel, TrendingDown, Plus, TreePine } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/Design sem nome (1)_1762520243261.png";

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
      <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl p-10 shadow-2xl -mx-8 -mt-8 mb-8">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <img 
              src={logoUrl} 
              alt="LogVision Logo" 
              className="h-64 w-auto object-contain drop-shadow-2xl"
            />
            <div>
              <p className="text-white/85 text-3xl font-bold mt-3">
                Compensação Ambiental através de Árvores
              </p>
              <p className="text-white/75 text-xl font-medium mt-2">
                Rastreamento de carbono e cálculo de árvores necessárias
              </p>
            </div>
          </div>
          <Link href="/new-trip">
            <Button variant="secondary" size="lg" className="bg-card text-primary hover:bg-card/90 text-lg px-6 py-6" data-testid="button-new-trip">
              <Plus className="mr-2 h-6 w-6" />
              Nova Viagem
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-2">Dashboard de Emissões</h2>
        <p className="text-muted-foreground text-xl font-medium">
          Monitoramento em tempo real da pegada de carbono da sua frota
        </p>
      </div>

      <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 shadow-lg">
        <CardContent className="py-8 px-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <TreePine className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center shadow-lg -ml-6">
                  <TreePine className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/60 flex items-center justify-center shadow-lg -ml-6">
                  <TreePine className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 ml-4">
                <p className="text-lg font-bold text-primary uppercase tracking-wide mb-3">
                  Compensação Ambiental - Nossa Missão Principal
                </p>
                <p className="text-7xl font-black text-primary mb-3" data-testid="text-total-trees">
                  566
                </p>
                <p className="text-3xl font-bold text-primary/80 mb-4">
                  árvores necessárias
                </p>
                <p className="text-xl text-foreground font-semibold">
                  Para neutralizar completamente as emissões da frota este mês
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t-2 border-primary/20">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-destructive/20 via-destructive/10 to-destructive/5 border-2 border-destructive/40 shadow-xl hover-elevate">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Leaf className="h-6 w-6 text-destructive" />
                  <p className="text-sm font-bold text-destructive uppercase tracking-wide">
                    Emissões Totais
                  </p>
                </div>
                <p className="text-5xl font-black font-mono text-destructive mb-2">12,450 kg</p>
                <p className="text-sm text-destructive/80 font-semibold mt-2">CO2 este mês</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/25 via-primary/15 to-primary/10 border-2 border-primary/50 shadow-xl hover-elevate">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TreePine className="h-6 w-6 text-primary" />
                  <p className="text-sm font-bold text-primary uppercase tracking-wide">
                    Capacidade por Árvore
                  </p>
                </div>
                <p className="text-5xl font-black font-mono text-primary mb-2">22 kg/ano</p>
                <p className="text-sm text-primary/80 font-semibold mt-2">Absorção de CO2</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/20 via-primary/12 to-primary/8 border-2 border-primary/40 shadow-xl hover-elevate">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TrendingDown className="h-6 w-6 text-primary" />
                  <p className="text-sm font-bold text-primary uppercase tracking-wide">
                    Impacto Positivo
                  </p>
                </div>
                <p className="text-5xl font-black font-mono text-primary mb-2">100%</p>
                <p className="text-sm text-primary/80 font-semibold mt-2">Neutralização</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
