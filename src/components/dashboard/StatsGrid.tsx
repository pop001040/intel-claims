import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Shield, 
  DollarSign,
  TrendingUp,
  Users
} from "lucide-react";

const StatsGrid = () => {
  const stats = [
    {
      title: "إجمالي المطالبات",
      value: "2,847",
      change: "+12%",
      changeType: "increase" as const,
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "قيد المراجعة",
      value: "127",
      change: "-8%",
      changeType: "decrease" as const,
      icon: Clock,
      color: "text-warning"
    },
    {
      title: "مقبولة",
      value: "2,240",
      change: "+15%",
      changeType: "increase" as const,
      icon: CheckCircle,
      color: "text-success"
    },
    {
      title: "مرفوضة",
      value: "480",
      change: "-2%",
      changeType: "decrease" as const,
      icon: XCircle,
      color: "text-danger"
    },
    {
      title: "حالات احتيال",
      value: "23",
      change: "+5%",
      changeType: "increase" as const,
      icon: Shield,
      color: "text-danger"
    },
    {
      title: "المبلغ المعالج",
      value: "2.4M ريال",
      change: "+18%",
      changeType: "increase" as const,
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "معدل الدقة",
      value: "97.2%",
      change: "+0.8%",
      changeType: "increase" as const,
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "مقدمي الخدمة",
      value: "342",
      change: "+3%",
      changeType: "increase" as const,
      icon: Users,
      color: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="flex items-center gap-1">
                <Badge 
                  variant={stat.changeType === "increase" ? "default" : "secondary"}
                  className={stat.changeType === "increase" 
                    ? "bg-success text-success-foreground" 
                    : "bg-muted text-muted-foreground"
                  }
                >
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground">من الأسبوع الماضي</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsGrid;