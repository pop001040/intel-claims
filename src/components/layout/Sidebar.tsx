import { 
  Home, 
  FileText, 
  Shield, 
  Users, 
  BarChart3, 
  Settings,
  Building,
  FileCheck,
  AlertTriangle,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "لوحة التحكم", icon: Home },
    { id: "claims", label: "إدارة المطالبات", icon: FileText, badge: "24" },
    { id: "fraud", label: "كشف الاحتيال", icon: Shield, badge: "5" },
    { id: "documents", label: "مراجعة المستندات", icon: Eye, badge: "12" },
    { id: "providers", label: "مقدمي الخدمة", icon: Building },
    { id: "reports", label: "التقارير", icon: BarChart3 },
    { id: "audit", label: "سجل التدقيق", icon: FileCheck },
    { id: "alerts", label: "التنبيهات", icon: AlertTriangle, badge: "3" },
    { id: "users", label: "إدارة المستخدمين", icon: Users },
    { id: "settings", label: "الإعدادات العامة", icon: Settings },
  ];

  return (
    <aside className="w-64 border-l border-border bg-card h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">مؤسسة الرعاية</h2>
            <p className="text-sm text-muted-foreground">Multi-Tenant</p>
          </div>
        </div>
        
        <div className="bg-muted rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">المطالبات اليوم</span>
            <Badge variant="outline" className="text-primary border-primary">+15%</Badge>
          </div>
          <div className="text-2xl font-bold text-foreground">247</div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-between h-11 text-right",
                isActive && "bg-secondary text-secondary-foreground"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <Badge 
                  className={cn(
                    "h-5 px-2",
                    isActive ? "bg-primary text-primary-foreground" : "bg-danger text-danger-foreground"
                  )}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">حالة الأمان</span>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            آخر فحص: منذ 5 دقائق
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span className="text-xs text-success font-medium">آمن</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;