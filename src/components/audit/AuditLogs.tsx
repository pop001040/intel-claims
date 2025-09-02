import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Download, 
  FileCheck, 
  User, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit,
  Eye,
  Trash2,
  Settings,
  Database,
  Clock
} from "lucide-react";

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("today");

  const auditLogs = [
    {
      id: "AUDIT-001",
      timestamp: "2024-01-15 14:30:15",
      user: {
        name: "أحمد محمد العلي",
        role: "مدير النظام",
        id: "USR-001"
      },
      action: "تعديل المطالبة",
      target: "CLM-2024-001", 
      details: "تغيير حالة المطالبة من 'قيد المراجعة' إلى 'مقبول'",
      category: "claims",
      severity: "medium",
      ipAddress: "192.168.1.100",
      sessionId: "SES-789123",
      outcome: "success"
    },
    {
      id: "AUDIT-002",
      timestamp: "2024-01-15 14:15:42",
      user: {
        name: "فاطمة أحمد الزهراني",
        role: "محلل احتيال",
        id: "USR-002"
      },
      action: "كشف احتيال",
      target: "CLM-2024-003",
      details: "تم اكتشاف نمط مشبوه في المطالبة وتصنيفها كاحتيال محتمل",
      category: "fraud",
      severity: "high",
      ipAddress: "192.168.1.105",
      sessionId: "SES-789124",
      outcome: "success"
    },
    {
      id: "AUDIT-003",
      timestamp: "2024-01-15 13:45:28",
      user: {
        name: "محمد عبدالله الشمري",
        role: "مراجع مستندات",
        id: "USR-003"
      },
      action: "مراجعة مستند",
      target: "DOC-2024-001",
      details: "مراجعة وموافقة على استخراج البيانات من فاتورة صيدلية",
      category: "documents",
      severity: "low",
      ipAddress: "192.168.1.110",
      sessionId: "SES-789125",
      outcome: "success"
    },
    {
      id: "AUDIT-004",
      timestamp: "2024-01-15 13:20:11",
      user: {
        name: "سارة خالد المطيري",
        role: "مدير مالي",
        id: "USR-004"
      },
      action: "إضافة مقدم خدمة",
      target: "PROV-006",
      details: "إضافة مقدم خدمة جديد: مستشفى العربي الطبي",
      category: "providers",
      severity: "medium",
      ipAddress: "192.168.1.115",
      sessionId: "SES-789126",
      outcome: "success"
    },
    {
      id: "AUDIT-005",
      timestamp: "2024-01-15 12:55:33",
      user: {
        name: "خالد سعد الدوسري",
        role: "محلل بيانات",
        id: "USR-005"
      },
      action: "تصدير تقرير",
      target: "RPT-MONTHLY-001",
      details: "تصدير التقرير الشهري للمطالبات - ديسمبر 2023",
      category: "reports",
      severity: "low",
      ipAddress: "192.168.1.120",
      sessionId: "SES-789127",
      outcome: "success"
    },
    {
      id: "AUDIT-006",
      timestamp: "2024-01-15 12:30:45",
      user: {
        name: "نورا عبدالرحمن القحطاني",
        role: "مشرف أمان",
        id: "USR-006"
      },
      action: "محاولة دخول فاشلة",
      target: "USR-UNKNOWN",
      details: "محاولة دخول فاشلة - كلمة مرور خاطئة 3 مرات متتالية",
      category: "security",
      severity: "high",
      ipAddress: "203.45.67.89",
      sessionId: null,
      outcome: "failed"
    },
    {
      id: "AUDIT-007",
      timestamp: "2024-01-15 11:45:12",
      user: {
        name: "عبدالعزيز محمد آل سعود",
        role: "مدير النظام",
        id: "USR-001"
      },
      action: "تحديث إعدادات",
      target: "SYS-CONFIG",
      details: "تحديث إعدادات أمان النظام - تفعيل المصادقة الثنائية",
      category: "system",
      severity: "high",  
      ipAddress: "192.168.1.100",
      sessionId: "SES-789128",
      outcome: "success"
    }
  ];

  const getActionIcon = (category: string) => {
    switch (category) {
      case "claims": return <FileCheck className="w-4 h-4" />;
      case "fraud": return <Shield className="w-4 h-4" />;
      case "documents": return <Eye className="w-4 h-4" />;
      case "providers": return <User className="w-4 h-4" />;
      case "reports": return <Download className="w-4 h-4" />;
      case "security": return <AlertTriangle className="w-4 h-4" />;
      case "system": return <Settings className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

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

  const getOutcomeBadge = (outcome: string) => {
    switch (outcome) {
      case "success":
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="w-3 h-3 mr-1" />نجح</Badge>;
      case "failed":
        return <Badge className="bg-danger text-danger-foreground"><XCircle className="w-3 h-3 mr-1" />فشل</Badge>;
      case "warning":
        return <Badge className="bg-warning text-warning-foreground"><AlertTriangle className="w-3 h-3 mr-1" />تحذير</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "claims": return "text-primary";
      case "fraud": return "text-danger";
      case "documents": return "text-success";
      case "providers": return "text-warning";
      case "reports": return "text-accent";
      case "security": return "text-danger";
      case "system": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === "all" || log.category === actionFilter;
    const matchesUser = userFilter === "all" || log.user.id === userFilter;
    return matchesSearch && matchesAction && matchesUser;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">سجل التدقيق</h1>
          <p className="text-muted-foreground">
            سجل شامل لجميع العمليات والتغييرات في النظام
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            فلاتر متقدمة
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            تصدير السجل
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">عمليات اليوم</CardTitle>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+18% من أمس</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">تحذيرات أمنية</CardTitle>
            <AlertTriangle className="h-5 w-5 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">3</div>
            <p className="text-xs text-muted-foreground">محاولات دخول فاشلة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المستخدمين النشطين</CardTitle>
            <User className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">متصلين حالياً</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">معدل النجاح</CardTitle>
            <CheckCircle className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">98.7%</div>
            <p className="text-xs text-muted-foreground">للعمليات</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>البحث والفلترة</CardTitle>
          <CardDescription>
            استخدم الفلاتر للعثور على العمليات المحددة في السجل
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="البحث في السجلات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 text-right"
                  dir="rtl"
                />
              </div>
            </div>
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="نوع العملية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع العمليات</SelectItem>
                <SelectItem value="claims">المطالبات</SelectItem>
                <SelectItem value="fraud">كشف الاحتيال</SelectItem>
                <SelectItem value="documents">المستندات</SelectItem>
                <SelectItem value="providers">مقدمي الخدمة</SelectItem>
                <SelectItem value="reports">التقارير</SelectItem>
                <SelectItem value="security">الأمان</SelectItem>
                <SelectItem value="system">النظام</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="الفترة الزمنية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">اليوم</SelectItem>
                <SelectItem value="yesterday">أمس</SelectItem>
                <SelectItem value="week">هذا الأسبوع</SelectItem>
                <SelectItem value="month">هذا الشهر</SelectItem>
                <SelectItem value="custom">فترة مخصصة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>سجل العمليات ({filteredLogs.length})</span>
            <div className="text-sm text-muted-foreground">
              عرض {filteredLogs.length} من {auditLogs.length} عملية
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الوقت</TableHead>
                <TableHead className="text-right">المستخدم</TableHead>
                <TableHead className="text-right">العملية</TableHead>
                <TableHead className="text-right">الهدف</TableHead>
                <TableHead className="text-right">التفاصيل</TableHead>
                <TableHead className="text-right">الأولوية</TableHead>
                <TableHead className="text-right">النتيجة</TableHead>
                <TableHead className="text-right">IP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-xs">
                    {log.timestamp}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {log.user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">{log.user.name}</div>
                        <div className="text-xs text-muted-foreground">{log.user.role}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={getCategoryColor(log.category)}>
                        {getActionIcon(log.category)}
                      </div>
                      <span className="font-medium">{log.action}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {log.target}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate text-sm" title={log.details}>
                      {log.details}
                    </div>
                  </TableCell>
                  <TableCell>
                    {getSeverityBadge(log.severity)}
                  </TableCell>
                  <TableCell>
                    {getOutcomeBadge(log.outcome)}
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {log.ipAddress}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditLogs;