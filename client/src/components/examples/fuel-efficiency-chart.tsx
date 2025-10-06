import { FuelEfficiencyChart } from "../fuel-efficiency-chart";

export default function FuelEfficiencyChartExample() {
  const mockData = [
    { truckType: "Leve", consumption: 8.5 },
    { truckType: "Médio", consumption: 12.3 },
    { truckType: "Pesado", consumption: 18.7 },
  ];

  return (
    <div className="p-6 bg-background">
      <FuelEfficiencyChart data={mockData} />
    </div>
  );
}
