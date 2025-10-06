import { EmissionsChart } from "../emissions-chart";

export default function EmissionsChartExample() {
  const mockData = [
    { month: "Jan", emissions: 4200 },
    { month: "Fev", emissions: 3800 },
    { month: "Mar", emissions: 4500 },
    { month: "Abr", emissions: 3200 },
    { month: "Mai", emissions: 2800 },
    { month: "Jun", emissions: 2400 },
  ];

  return (
    <div className="p-6 bg-background">
      <EmissionsChart data={mockData} />
    </div>
  );
}
