import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  AlertTriangle, 
  Bell, 
  Shield, 
  Clock, 
  CheckCircle, 
  XCircle,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Mail,
  MessageSquare,
  Smartphone
} from "lucide-react";

const AlertsCenter = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    {
      id: "ALT-001",
      title: "كشف نشاط احتيالي مشبوه",
      description: "تم اكتشاف نمط غير طبيعي في المطالبات من مقدم الخدمة 'مختبر الدقة'",
      category: "fraud",
      severity: "high",
      status: "active",
      createdAt: "2024-01-15 14:30",
      triggeredBy: "نموذج ML للكشف عن الاحتيال",
      affectedClaims: 15,
      estimatedImpact: "250,000 ريال",
      assignedTo: "فريق مكافحة الاحتيال"
    },
    {
      id: "ALT-002", 
      title: "تجاوز حد المطالبات الشهري",
      description: "مقدم الخدمة 'عيادة النور' تجاوز الحد المسموح من المطالبات لهذا الشهر",
      category: "limit",
      severity: "medium",
      status: "acknowledged",
      createdAt: "2024-01-15 13:45",
      triggeredBy: "نظام مراقبة الحدود",
      affectedClaims: 8,
      estimatedImpact: "45,000 ريال",
      assignedTo: "فريق إدارة العقود"
    },
    {
      id: "ALT-003",
      title: "فشل في معالجة OCR",
      description: "عدد كبير من المستندات فشل في المعالجة بتقنية OCR",
      category: "system",
      severity: "medium",
      status: "resolved",
      createdAt: "2024-01-15 11:20",
      triggeredBy: "نظام مراقبة الأداء",
      affectedClaims: 23,
      estimatedImpact: "تأخير في المعالجة",
      assignedTo: "فريق التطوير التقني"
    },
    {
      id: "ALT-004",
      title: "محاولة دخول غير مصرح بها",
      description: "محاولة دخول متكررة من عنوان IP مشبوه",
      category: "security",
      severity: "high",
      status: "active",
      createdAt: "2024-01-15 10:15",
      triggeredBy: "نظام الأمان",
      affectedClaims: 0,
      estimatedImpact: "خطر أمني محتمل",
      assignedTo: "فريق أمان المعلومات"
    }
  ];

  const alertRules = [
    {
      id: "RULE-001",
      name: "كشف الاحتيال - النمط المتكرر",
      description: "إنذار عند تكرار نفس المطالبة أكثر من 3 مرات",
      enabled: true,
      threshold: "3 تكرارات",
      action: "إيقاف تلقائي + إشعار فوري"
    },
    {
      id: "RULE-002", 
      name: "تجاوز الحد المالي",
      description: "إنذار عند تجاوز مقدم الخدمة للحد المالي المحدد",
      enabled: true,
      threshold: "100,000 ريال/شهر",
      action: "تنبيه + مراجعة يدوية"
    },
    {
      id: "RULE-003",
      name: "جودة OCR منخفضة",
      description: "إنذار عند انخفاض دقة استخراج البيانات",
      enabled: false,
      threshold: "أقل من 85%",
      action: "مراجعة يدوية مطلوبة"
    },
    {
      id: "RULE-004",
      name: "نشاط مشبوه - وقت غير عادي",
      description: "إنذار عند وجود نشاط خارج ساعات العمل الطبيعية",
      enabled: true,
      threshold: "خارج 8 صباحاً - 5 مساءً",
      action: "تسجيل + مراجعة أمنية"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-danger text-danger-foreground">عالي</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">متوسط</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">منخفض</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-danger text-danger-foreground"><AlertTriangle className="w-3 h-3 mr-1" />نشط</Badge>;
      case "acknowledged":
        return <Badge className="bg-warning text-warning-foreground"><Eye className="w-3 h-3 mr-1" />مُستلم</Badge>;
      case "resolved":
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="w-3 h-3 mr-1" />محلول</Badge>;
      case "dismissed":
        return <Badge variant="secondary"><XCircle className="w-3 h-3 mr-1" />مُلغى</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fraud": return <Shield className="w-4 h-4 text-danger" />;
      case "limit": return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "system": return <Settings className="w-4 h-4 text-primary" />;
      case "security": return <Shield className="w-4 h-4 text-danger" />;
      default: return <Bell className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">مركز التنبيهات والإشعارات</h1>
          <p className="text-muted-foreground">
            إدارة التنبيهات والإشعارات الفورية للأحداث المهمة
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            إعدادات التنبيهات
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            قاعدة جديدة
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">تنبيهات نشطة</CardTitle>
            <AlertTriangle className="h-5 w-5 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">3</div>
            <p className="text-xs text-muted-foreground">تحتاج إجراء فوري</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">محلولة اليوم</CardTitle>
            <CheckCircle className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">12</div>
            <p className="text-xs text-muted-foreground">+3 من أمس</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">متوسط وقت الاستجابة</CardTitle>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 دقيقة</div>
            <p className="text-xs text-muted-foreground">-5 دقائق من أمس</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">قواعد نشطة</CardTitle>
            <Settings className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">من 12 قاعدة</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">التنبيهات النشطة</TabsTrigger>
          <TabsTrigger value="history">سجل التنبيهات</TabsTrigger>
          <TabsTrigger value="rules">قواعد التنبيه</TabsTrigger>
          <TabsTrigger value="settings">إعدادات الإشعارات</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Alerts List */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>التنبيهات الحالية</CardTitle>
                <CardDescription>
                  قائمة بجميع التنبيهات التي تحتاج إلى إجراء
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div 
                      key={alert.id}
                      className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => setSelectedAlert(alert)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(alert.category)}
                          <h3 className="font-semibold text-sm">{alert.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          {getSeverityBadge(alert.severity)}
                          {getStatusBadge(alert.status)}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {alert.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-muted-foreground">المطالبات المتأثرة:</span>
                          <span className="font-medium mr-1">{alert.affectedClaims}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">التأثير المقدر:</span>
                          <span className="font-medium mr-1">{alert.estimatedImpact}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">مُحال إلى:</span>
                          <span className="font-medium mr-1">{alert.assignedTo}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">الوقت:</span>
                          <span className="font-medium mr-1">{alert.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alert Details */}
            <Card>
              <CardHeader>
                <CardTitle>تفاصيل التنبيه</CardTitle>
                <CardDescription>
                  عرض تفاصيل التنبيه المحدد
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedAlert ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">{selectedAlert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {selectedAlert.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>الأولوية:</span>
                        {getSeverityBadge(selectedAlert.severity)}
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>الحالة:</span>
                        {getStatusBadge(selectedAlert.status)}
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>مُحال إلى:</span>
                        <span>{selectedAlert.assignedTo}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>تم الإنشاء:</span>
                        <span>{selectedAlert.createdAt}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">ملاحظات الإجراء</label>
                      <Textarea 
                        placeholder="أدخل ملاحظاتك حول الإجراء المتخذ..."
                        className="resize-none"
                        rows={4}
                        dir="rtl"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-success hover:bg-success/90">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        حل التنبيه
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3 mr-1" />
                        تأكيد الاستلام
                      </Button>
                      <Button variant="outline" size="sm">
                        <XCircle className="w-3 h-3 mr-1" />
                        رفض
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Bell className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>اختر تنبيه من القائمة لعرض التفاصيل</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>قواعد التنبيه</CardTitle>
              <CardDescription>
                إدارة القواعد التي تحدد متى يتم إرسال التنبيهات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Switch checked={rule.enabled} />
                        <h3 className="font-semibold">{rule.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {rule.description}
                      </p>
                      <div className="text-xs space-y-1">
                        <div><span className="text-muted-foreground">العتبة:</span> {rule.threshold}</div>
                        <div><span className="text-muted-foreground">الإجراء:</span> {rule.action}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الإشعارات</CardTitle>
              <CardDescription>
                تخصيص طرق وأوقات إرسال الإشعارات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">طرق الإشعار</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>البريد الإلكتروني</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>رسائل SMS</span>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span>إشعارات التطبيق</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">إعدادات التوقيت</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">من الساعة</label>
                      <Select defaultValue="08">
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08">8:00 صباحاً</SelectItem>
                          <SelectItem value="09">9:00 صباحاً</SelectItem>
                          <SelectItem value="10">10:00 صباحاً</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">إلى الساعة</label>
                      <Select defaultValue="17">
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="17">5:00 مساءً</SelectItem>
                          <SelectItem value="18">6:00 مساءً</SelectItem>
                          <SelectItem value="19">7:00 مساءً</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>سجل التنبيهات</CardTitle>
              <CardDescription>
                جميع التنبيهات السابقة والإجراءات المتخذة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>سيتم إضافة سجل التنبيهات التاريخي هنا</p>
                <p className="text-sm">يشمل الأرشيف الكامل للتنبيهات والإجراءات</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlertsCenter;