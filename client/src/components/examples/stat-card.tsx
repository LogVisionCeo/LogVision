import { StatCard } from "../stat-card";
import { Leaf } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-6 bg-background">
      <StatCard
        title="Total CO2"
        value="12,450"
        unit="kg"
        icon={Leaf}
        trend={{ value: 15, isPositive: true }}
      />
    </div>
  );
}
