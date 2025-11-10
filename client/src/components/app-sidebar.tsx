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
import { LayoutDashboard, Route, History, FileText, Settings, Map } from "lucide-react";
import { Link, useLocation } from "wouter";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Nova Viagem",
    url: "/new-trip",
    icon: Route,
  },
  {
    title: "Histórico",
    url: "/history",
    icon: History,
  },
  {
    title: "Relatórios",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Monitoramento",
    url: "/route-monitor",
    icon: Map,
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
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">LogVision</h2>
          </div>
          <div className="px-2 py-2 rounded-md bg-primary/10 border border-primary/20">
            <p className="text-xs md:text-sm font-semibold text-primary leading-tight">
              Compensação Ambiental através de Árvores
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
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
