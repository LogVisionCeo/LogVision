import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, FileText, TrendingDown, TrendingUp, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  const [period, setPeriod] = useState("month");
  const [compareWith, setCompareWith] = useState("previous");

  const comparisonData = [
    { name: "Período Atual", emissions: 12450, fuel: 4892 },
    { name: "Período Anterior", emissions: 14650, fuel: 5623 },
  ];

  const emissionsByType = [
    { name: "Caminhão Pesado", value: 6200, percentage: 50 },
    { name: "Caminhão Médio", value: 3725, percentage: 30 },
    { name: "Caminhão Leve", value: 2485, percentage: 20 },
  ];

  const COLORS = [
    "#8B5CF6",
    "#06B6D4",
    "#F59E0B",
  ];

  const savingsData = {
    co2Reduced: 2200,
    fuelSaved: 731,
    costSavings: 4386,
    treesEquivalent: 100,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Relatórios de Sustentabilidade</h1>
          <p className="text-muted-foreground mt-1">
            Análise comparativa e insights sobre a pegada de carbono
          </p>
        </div>
        <Button data-testid="button-download-report">
          <Download className="mr-2 h-4 w-4" />
          Baixar Relatório PDF
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Período de Análise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="period">Período</Label>
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger id="period" data-testid="select-period">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Esta Semana</SelectItem>
                  <SelectItem value="month">Este Mês</SelectItem>
                  <SelectItem value="quarter">Este Trimestre</SelectItem>
                  <SelectItem value="year">Este Ano</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="compare">Comparar com</Label>
              <Select value={compareWith} onValueChange={setCompareWith}>
                <SelectTrigger id="compare" data-testid="select-compare">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="previous">Período Anterior</SelectItem>
                  <SelectItem value="year-ago">Mesmo Período Ano Passado</SelectItem>
                  <SelectItem value="baseline">Linha de Base</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resumo Executivo</CardTitle>
            <CardDescription>Principais métricas de sustentabilidade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-500">
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Redução de CO2</p>
                <p className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-500">
                  {savingsData.co2Reduced} kg
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-500">
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">Combustível Economizado</p>
                <p className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-500">
                  {savingsData.fuelSaved} L
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-blue-600 dark:text-blue-500" />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-500">
              <div>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Economia Financeira</p>
                <p className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-500">
                  R$ {savingsData.costSavings.toLocaleString('pt-BR')}
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-amber-600 dark:text-amber-500" />
            </div>
            <div className="p-4 rounded-lg border-2 border-purple-500 bg-purple-50 dark:bg-purple-950/20">
              <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-1">Equivalente Ambiental</p>
              <p className="text-lg font-bold text-purple-600 dark:text-purple-500">
                {savingsData.treesEquivalent} árvores plantadas
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                Baseado na absorção média de CO2 por árvore/ano
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emissões por Tipo de Veículo</CardTitle>
            <CardDescription>Distribuição percentual de CO2</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={emissionsByType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} (${percentage}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {emissionsByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {emissionsByType.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-sm" 
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-mono font-semibold">
                    {item.value} kg
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análise Comparativa</CardTitle>
          <CardDescription>
            Comparação entre {period === "month" ? "este mês" : "este período"} e o período anterior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
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
              <Bar dataKey="emissions" fill="#EC4899" radius={[8, 8, 0, 0]} name="CO2 (kg)" />
              <Bar dataKey="fuel" fill="#10B981" radius={[8, 8, 0, 0]} name="Combustível (L)" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-500">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-pink-700 dark:text-pink-400">Variação de Emissões</p>
                <Badge className="bg-pink-600 text-white dark:bg-pink-500">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -15%
                </Badge>
              </div>
              <p className="text-xs text-pink-600 dark:text-pink-400 font-medium">
                Redução significativa comparado ao período anterior
              </p>
            </div>
            <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-500">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">Variação de Combustível</p>
                <Badge className="bg-teal-600 text-white dark:bg-teal-500">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -13%
                </Badge>
              </div>
              <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                Economia significativa no consumo total
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recomendações Estratégicas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg border-l-4 border-l-indigo-500 bg-indigo-50 dark:bg-indigo-950/20">
            <p className="font-bold mb-1 text-indigo-700 dark:text-indigo-400">Otimização de Rotas</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Implementar sistema de roteirização inteligente pode reduzir até 18% das emissões
            </p>
          </div>
          <div className="p-4 rounded-lg border-l-4 border-l-cyan-500 bg-cyan-50 dark:bg-cyan-950/20">
            <p className="font-bold mb-1 text-cyan-700 dark:text-cyan-400">Renovação de Frota</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-400">
              Substituir 30% da frota por veículos elétricos ou híbridos reduziria 45% das emissões
            </p>
          </div>
          <div className="p-4 rounded-lg border-l-4 border-l-rose-500 bg-rose-50 dark:bg-rose-950/20">
            <p className="font-bold mb-1 text-rose-700 dark:text-rose-400">Treinamento de Condutores</p>
            <p className="text-sm text-rose-600 dark:text-rose-400">
              Programa de eco-driving pode melhorar a eficiência de combustível em até 12%
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
