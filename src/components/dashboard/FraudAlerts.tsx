import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Eye, Flag, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const FraudAlerts = () => {
  const fraudAlerts = [
    {
      id: "FA-2024-001",
      type: "تكرار مشبوه",
      description: "نفس المريض قدم 5 مطالبات في يوم واحد",
      riskScore: 0.94,
      claimId: "CLM-2024-003",
      provider: "مختبر الدقة",
      severity: "high",
      timestamp: "منذ 10 دقائق"
    },
    {
      id: "FA-2024-002", 
      type: "مبلغ غير طبيعي",
      description: "المبلغ أعلى بـ 300% من المتوسط للإجراء",
      riskScore: 0.87,
      claimId: "CLM-2024-008",
      provider: "عيادة الأمل",
      severity: "high",
      timestamp: "منذ 25 دقيقة"
    },
    {
      id: "FA-2024-003",
      type: "شبكة مشبوهة",
      description: "نفس الطبيب والمريض في 15 مطالبة",
      riskScore: 0.76,
      claimId: "CLM-2024-012", 
      provider: "مجمع الرعاية",
      severity: "medium",
      timestamp: "منذ ساعة"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-danger text-danger-foreground">عالي</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">متوسط</Badge>;
      case "low":
        return <Badge className="bg-muted text-muted-foreground">منخفض</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-danger" />
          <span>تنبيهات الاحتيال</span>
        </CardTitle>
        <CardDescription>
          آخر التنبيهات المكتشفة بواسطة نماذج الذكاء الاصطناعي
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fraudAlerts.map((alert) => (
            <div key={alert.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-danger" />
                  <span className="font-medium text-sm">{alert.type}</span>
                  {getSeverityBadge(alert.severity)}
                </div>
                <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-xs">
                  <span>معدل المخاطر</span>
                  <span className="font-medium">{(alert.riskScore * 100).toFixed(1)}%</span>
                </div>
                <Progress value={alert.riskScore * 100} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  <div>المطالبة: {alert.claimId}</div>
                  <div>المقدم: {alert.provider}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3 mr-1" />
                    مراجعة
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    تحليل
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FraudAlerts;