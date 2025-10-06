import { useState } from "react";
import { TripTable } from "@/components/trip-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Filter, Search } from "lucide-react";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const mockTrips = [
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
    {
      id: "4",
      origin: "Brasília, DF",
      destination: "Goiânia, GO",
      distance: 209,
      co2Emissions: 145,
      date: "02/10/2025",
      truckType: "light",
      fuelType: "diesel",
    },
    {
      id: "5",
      origin: "Salvador, BA",
      destination: "Recife, PE",
      distance: 839,
      co2Emissions: 412,
      date: "01/10/2025",
      truckType: "heavy",
      fuelType: "diesel",
    },
  ];

  const filteredTrips = mockTrips.filter(trip => {
    const matchesSearch = trip.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || trip.truckType === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Histórico de Viagens</h1>
          <p className="text-muted-foreground mt-1">
            Visualize e gerencie todas as viagens registradas
          </p>
        </div>
        <Button variant="outline" data-testid="button-export">
          <Download className="mr-2 h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="search">Buscar</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Origem ou destino..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  data-testid="input-search-trips"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="filter-type">Tipo de Caminhão</Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter-type" data-testid="select-filter-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="light">Leve</SelectItem>
                  <SelectItem value="medium">Médio</SelectItem>
                  <SelectItem value="heavy">Pesado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Todas as Viagens</CardTitle>
            <p className="text-sm text-muted-foreground">
              {filteredTrips.length} viagem{filteredTrips.length !== 1 ? 's' : ''} encontrada{filteredTrips.length !== 1 ? 's' : ''}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <TripTable 
            trips={filteredTrips}
            onView={(id) => console.log("View trip:", id)}
            onEdit={(id) => console.log("Edit trip:", id)}
            onDelete={(id) => console.log("Delete trip:", id)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
