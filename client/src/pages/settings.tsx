import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Database, 
  Leaf, 
  Save,
  Truck,
  Fuel
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Settings() {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [emissionAlerts, setEmissionAlerts] = useState(true);
  const [companyName, setCompanyName] = useState("Transportadora LogVision");
  const [emissionTarget, setEmissionTarget] = useState("10000");

  const handleSaveSettings = () => {
    console.log("Saving settings...");
    toast({
      title: "Configurações Salvas",
      description: "Suas preferências foram atualizadas com sucesso.",
    });
  };

  const emissionFactors = [
    { fuel: "Diesel", factor: "2.68", unit: "kg CO2/L" },
    { fuel: "Biodiesel", factor: "1.80", unit: "kg CO2/L" },
    { fuel: "Elétrico", factor: "0.20", unit: "kg CO2/kWh" },
  ];

  const truckConsumption = [
    { type: "Leve (até 3.5t)", consumption: "0.08", unit: "L/km" },
    { type: "Médio (3.5t - 12t)", consumption: "0.12", unit: "L/km" },
    { type: "Pesado (acima de 12t)", consumption: "0.18", unit: "L/km" },
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie as preferências e parâmetros do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Informações da Empresa
          </CardTitle>
          <CardDescription>
            Dados básicos da organização
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company-name">Nome da Empresa</Label>
              <Input
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                data-testid="input-company-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emission-target">Meta de Emissão Mensal (kg CO2)</Label>
              <Input
                id="emission-target"
                type="number"
                value={emissionTarget}
                onChange={(e) => setEmissionTarget(e.target.value)}
                data-testid="input-emission-target"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notificações
          </CardTitle>
          <CardDescription>
            Configure como deseja receber alertas e relatórios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Notificações por E-mail</Label>
              <p className="text-sm text-muted-foreground">
                Receber atualizações importantes por e-mail
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              data-testid="switch-email-notifications"
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="weekly-reports">Relatórios Semanais</Label>
              <p className="text-sm text-muted-foreground">
                Resumo semanal de emissões e consumo
              </p>
            </div>
            <Switch
              id="weekly-reports"
              checked={weeklyReports}
              onCheckedChange={setWeeklyReports}
              data-testid="switch-weekly-reports"
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="emission-alerts">Alertas de Emissão Alta</Label>
              <p className="text-sm text-muted-foreground">
                Notificar quando emissões excederem a meta
              </p>
            </div>
            <Switch
              id="emission-alerts"
              checked={emissionAlerts}
              onCheckedChange={setEmissionAlerts}
              data-testid="switch-emission-alerts"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            Fatores de Emissão
          </CardTitle>
          <CardDescription>
            Valores usados para calcular as emissões de CO2
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo de Combustível</TableHead>
                  <TableHead className="text-right">Fator de Emissão</TableHead>
                  <TableHead className="text-right">Unidade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emissionFactors.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.fuel}</TableCell>
                    <TableCell className="text-right font-mono">{item.factor}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{item.unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Fatores baseados em padrões internacionais (IPCC) e podem ser ajustados conforme necessário
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Consumo por Tipo de Veículo
          </CardTitle>
          <CardDescription>
            Taxa média de consumo de combustível
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo de Caminhão</TableHead>
                  <TableHead className="text-right">Consumo Médio</TableHead>
                  <TableHead className="text-right">Unidade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {truckConsumption.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.type}</TableCell>
                    <TableCell className="text-right font-mono">{item.consumption}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{item.unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Valores podem variar de acordo com condições da estrada, carga e manutenção do veículo
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Dados e Privacidade
          </CardTitle>
          <CardDescription>
            Gerenciamento de dados armazenados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm mb-3">
              Os dados de viagens são armazenados localmente e podem ser exportados a qualquer momento.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" data-testid="button-export-data">
                Exportar Dados
              </Button>
              <Button variant="outline" size="sm" data-testid="button-clear-data">
                Limpar Histórico
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSaveSettings} data-testid="button-save-settings">
          <Save className="mr-2 h-4 w-4" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
}
