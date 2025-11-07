import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2, TreePine } from "lucide-react";

interface Trip {
  id: string;
  origin: string;
  destination: string;
  distance: number;
  co2Emissions: number;
  date: string;
  truckType: string;
  fuelType: string;
}

interface TripTableProps {
  trips: Trip[];
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const truckTypeLabels: Record<string, string> = {
  light: "Leve",
  medium: "Médio",
  heavy: "Pesado",
};

const fuelTypeLabels: Record<string, string> = {
  diesel: "Diesel",
  biodiesel: "Biodiesel",
  electric: "Elétrico",
};

export function TripTable({ trips, onView, onEdit, onDelete }: TripTableProps) {
  return (
    <div className="rounded-md border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Origem</TableHead>
            <TableHead>Destino</TableHead>
            <TableHead className="text-right">Distância</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Combustível</TableHead>
            <TableHead className="text-right">CO2</TableHead>
            <TableHead className="text-right bg-primary/5">
              <div className="flex items-center justify-end gap-1">
                <TreePine className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold">Árvores</span>
              </div>
            </TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trips.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center text-muted-foreground py-8">
                Nenhuma viagem registrada
              </TableCell>
            </TableRow>
          ) : (
            trips.map((trip) => {
              const treesNeeded = Math.ceil(trip.co2Emissions / 22);
              return (
                <TableRow key={trip.id} className="hover-elevate" data-testid={`row-trip-${trip.id}`}>
                  <TableCell className="font-medium">{trip.date}</TableCell>
                  <TableCell>{trip.origin}</TableCell>
                  <TableCell>{trip.destination}</TableCell>
                  <TableCell className="text-right font-mono">{trip.distance} km</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{truckTypeLabels[trip.truckType]}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{fuelTypeLabels[trip.fuelType]}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono font-semibold">{trip.co2Emissions} kg</TableCell>
                  <TableCell className="text-right bg-primary/5">
                    <div className="flex items-center justify-end gap-1">
                      <TreePine className="h-3 w-3 text-primary" />
                      <span className="font-bold font-mono text-primary text-base">{treesNeeded}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => onView?.(trip.id)}
                        data-testid={`button-view-${trip.id}`}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => onEdit?.(trip.id)}
                        data-testid={`button-edit-${trip.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => onDelete?.(trip.id)}
                        data-testid={`button-delete-${trip.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
