import { TripTable } from "../trip-table";

export default function TripTableExample() {
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
  ];

  return (
    <div className="p-6 bg-background">
      <TripTable 
        trips={mockTrips}
        onView={(id) => console.log("View:", id)}
        onEdit={(id) => console.log("Edit:", id)}
        onDelete={(id) => console.log("Delete:", id)}
      />
    </div>
  );
}
