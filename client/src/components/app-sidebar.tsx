import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Plus, Database, BarChart3, Settings, Activity, Trees } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/Design sem nome (2)_1762957674679.png";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Nova Viagem",
    url: "/new-trip",
    icon: Plus,
  },
  {
    title: "Histórico",
    url: "/history",
    icon: Database,
  },
  {
    title: "Relatórios",
    url: "/reports",
    icon: BarChart3,
  },
  {
    title: "Monitoramento",
    url: "/route-monitor",
    icon: Activity,
  },
  {
    title: "Mapeamento de Replantio",
    url: "/replanting-map",
    icon: Trees,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex flex-col gap-3">
          <img 
            src={logoImage} 
            alt="LogVision Logo" 
            className="h-16 w-auto object-contain"
            data-testid="img-logo"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-primary tracking-tight">LogVision</h2>
            <p className="text-xs text-muted-foreground font-medium">
              Gestão Inteligente de Carbono
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
