import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface EmissionsChartProps {
  data: Array<{
    month: string;
    emissions: number;
  }>;
}

export function EmissionsChart({ data }: EmissionsChartProps) {
  return (
    <Card className="col-span-1 md:col-span-2" data-testid="card-emissions-chart">
      <CardHeader>
        <CardTitle>Tendência de Emissões</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area 
              type="monotone" 
              dataKey="emissions" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              fill="url(#colorEmissions)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
