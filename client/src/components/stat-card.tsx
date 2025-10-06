import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, unit, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("hover-elevate", className)} data-testid={`card-stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold font-mono" data-testid={`text-stat-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {value}
          </p>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
        {trend && (
          <p className={cn(
            "text-xs mt-1",
            trend.isPositive ? "text-chart-2" : "text-destructive"
          )}>
            {trend.isPositive ? "↓" : "↑"} {Math.abs(trend.value)}% vs. mês anterior
          </p>
        )}
      </CardContent>
    </Card>
  );
}
