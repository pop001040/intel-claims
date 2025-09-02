import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Network, 
  Eye, 
  FileText,
  Clock,
  Users,
  Building,
  DollarSign
} from "lucide-react";

const FraudDetection = () => {
  const fraudCases = [
    {
      id: "FD-2024-001",
      type: "شبكة احتيال",
      description: "نمط مشبوه: نفس الطبيب والصيدلية في 25 مطالبة",
      riskScore: 0.94,
      involvedClaims: 25,
      estimatedLoss: "125,000",
      status: "active",
      detectedAt: "2024-01-15 14:30",
      lastActivity: "منذ 30 دقيقة"
    },
    {
      id: "FD-2024-002",
      type: "تكرار مشبوه",
      description: "مريض قدم 8 مطالبات بنفس التشخيص في أسبوع",
      riskScore: 0.87,
      involvedClaims: 8,
      estimatedLoss: "15,600",
      status: "investigating",
      detectedAt: "2024-01-15 09:15",
      lastActivity: "منذ ساعتين"
    },
    {
      id: "FD-2024-003",
      type: "مبالغ غير طبيعية",
      description: "فواتير أعلى بـ 400% من المتوسط للإجراءات",
      riskScore: 0.82,
      involvedClaims: 12,
      estimatedLoss: "68,900",
      status: "resolved",
      detectedAt: "2024-01-14 16:45",
      lastActivity: "منذ يوم"
    }
  ];

  const mlModels = [
    {
      name: "Isolation Forest",
      type: "Anomaly Detection",
      accuracy: 94.2,
      lastTrained: "2024-01-10",
      status: "active"
    },
    {
      name: "Neural Network",
      type: "Pattern Recognition",
      accuracy: 96.8,
      lastTrained: "2024-01-12",
      status: "active"
    },
    {
      name: "Graph Analysis",
      type: "Network Detection",
      accuracy: 91.5,
      lastTrained: "2024-01-08",
      status: "training"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-danger text-danger-foreground">نشط</Badge>;
      case "investigating":
        return <Badge className="bg-warning text-warning-foreground">قيد التحقيق</Badge>;
      case "resolved":
        return <Badge className="bg-success text-success-foreground">محلول</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">كشف الاحتيال</h1>
          <p className="text-muted-foreground">
            نظام ذكي لكشف ومنع محاولات الاحتيال في المطالبات
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <TrendingUp className="w-4 h-4 mr-2" />
            تقرير الاحتيال
          </Button>
          <Button>
            <Shield className="w-4 h-4 mr-2" />
            إعدادات النماذج
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">حالات الاحتيال النشطة</CardTitle>
            <AlertTriangle className="h-5 w-5 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">23</div>
            <p className="text-xs text-muted-foreground">+5 من أمس</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الخسائر المقدرة</CardTitle>
            <DollarSign className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M ريال</div>
            <p className="text-xs text-muted-foreground">هذا الشهر</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">دقة الكشف</CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">94.2%</div>
            <p className="text-xs text-muted-foreground">+1.2% هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">شبكات مكتشفة</CardTitle>
            <Network className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">شبكات نشطة</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cases" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cases">حالات الاحتيال</TabsTrigger>
          <TabsTrigger value="models">النماذج الذكية</TabsTrigger>
          <TabsTrigger value="analysis">التحليل المتقدم</TabsTrigger>
        </TabsList>

        <TabsContent value="cases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>حالات الاحتيال النشطة</CardTitle>
              <CardDescription>
                آخر حالات الاحتيال المكتشفة بواسطة النماذج الذكية
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fraudCases.map((fraudCase) => (
                  <div key={fraudCase.id} className="border border-border rounded-lg p-4 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{fraudCase.id}</h3>
                          {getStatusBadge(fraudCase.status)}
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-danger" />
                          <span className="font-medium text-sm">{fraudCase.type}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{fraudCase.description}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>اكتُشف: {fraudCase.detectedAt}</div>
                        <div>آخر نشاط: {fraudCase.lastActivity}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>مستوى المخاطر</span>
                          <span className="font-medium text-danger">
                            {(fraudCase.riskScore * 100).toFixed(1)}%
                          </span>
                        </div>
                        <Progress value={fraudCase.riskScore * 100} className="h-2" />
                      </div>

                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{fraudCase.involvedClaims} مطالبة</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-danger">
                          {fraudCase.estimatedLoss} ريال
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          تفاصيل
                        </Button>
                        <Button variant="outline" size="sm">
                          <Network className="w-3 h-3 mr-1" />
                          رسم الشبكة
                        </Button>
                      </div>
                      <Button size="sm" className="bg-danger hover:bg-danger/90">
                        اتخاذ إجراء
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>نماذج الكشف الذكية</CardTitle>
              <CardDescription>
                حالة وأداء النماذج المستخدمة في كشف الاحتيال
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mlModels.map((model, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{model.name}</h3>
                        <Badge variant="outline">{model.type}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        آخر تدريب: {model.lastTrained}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">الدقة</div>
                        <div className="text-lg font-semibold text-success">
                          {model.accuracy}%
                        </div>
                      </div>
                      
                      <Badge 
                        className={
                          model.status === "active" 
                            ? "bg-success text-success-foreground" 
                            : "bg-warning text-warning-foreground"
                        }
                      >
                        {model.status === "active" ? "نشط" : "تدريب"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>تحليل الاتجاهات</CardTitle>
              <CardDescription>
                تحليل متقدم لأنماط الاحتيال والاتجاهات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Network className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>سيتم إضافة مخططات التحليل المتقدم هنا</p>
                <p className="text-sm">تشمل: تحليل الشبكات، الأنماط الزمنية، والتوزيعات الجغرافية</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FraudDetection;