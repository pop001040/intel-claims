import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RecentClaims = () => {
  const recentClaims = [
    {
      id: "CLM-2024-001",
      patient: "سارة أحمد",
      provider: "مستشفى الملك فيصل",
      amount: "2,850 ريال",
      status: "pending",
      riskScore: 0.12,
      date: "2024-01-15",
      type: "فاتورة صيدلية"
    },
    {
      id: "CLM-2024-002", 
      patient: "محمد علي",
      provider: "عيادة النور",
      amount: "450 ريال",
      status: "approved",
      riskScore: 0.08,
      date: "2024-01-15",
      type: "كشف طبي"
    },
    {
      id: "CLM-2024-003",
      patient: "فاطمة خالد",
      provider: "مختبر الدقة",
      amount: "320 ريال", 
      status: "fraud_alert",
      riskScore: 0.89,
      date: "2024-01-14",
      type: "تحليل مختبر"
    },
    {
      id: "CLM-2024-004",
      patient: "عبدالله محمد",
      provider: "مجمع الطب الحديث",
      amount: "1,200 ريال",
      status: "review",
      riskScore: 0.65,
      date: "2024-01-14", 
      type: "أشعة تشخيصية"
    },
    {
      id: "CLM-2024-005",
      patient: "نورا سالم",
      provider: "صيدلية الشفاء",
      amount: "180 ريال",
      status: "approved",
      riskScore: 0.05,
      date: "2024-01-13",
      type: "وصفة طبية"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">قيد الانتظار</Badge>;
      case "approved":
        return <Badge className="bg-success text-success-foreground">مقبول</Badge>;
      case "fraud_alert":
        return <Badge className="bg-danger text-danger-foreground">تحذير احتيال</Badge>;
      case "review":
        return <Badge variant="outline" className="border-primary text-primary">مراجعة</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getRiskColor = (score: number) => {
    if (score >= 0.8) return "text-danger";
    if (score >= 0.5) return "text-warning";
    return "text-success";
  };

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>المطالبات الأخيرة</span>
          <Button variant="outline" size="sm">عرض الكل</Button>
        </CardTitle>
        <CardDescription>
          آخر المطالبات التي تم معالجتها في النظام
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentClaims.map((claim) => (
            <div key={claim.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {claim.patient.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{claim.id}</span>
                    {getStatusBadge(claim.status)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {claim.patient} • {claim.provider}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {claim.type} • {claim.date}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-medium">{claim.amount}</div>
                  <div className={`text-sm ${getRiskColor(claim.riskScore)}`}>
                    مخاطر: {(claim.riskScore * 100).toFixed(0)}%
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                      <DropdownMenuItem>تحميل المستندات</DropdownMenuItem>
                      <DropdownMenuItem>إضافة ملاحظة</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentClaims;