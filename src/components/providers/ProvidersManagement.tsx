import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Plus, 
  Building, 
  MapPin, 
  Phone, 
  Star,
  Activity,
  DollarSign,
  FileText,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react";

const ProvidersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const providers = [
    {
      id: "PROV-001",
      name: "مستشفى الملك فيصل التخصصي",
      type: "مستشفى",
      specialties: ["قلب", "أورام", "جراحة"],
      location: "الرياض",
      phone: "+966-11-442-7777",
      email: "info@kfshrc.edu.sa",
      status: "active",
      rating: 4.8,
      totalClaims: 1247,
      approvedClaims: 1198,
      totalAmount: "5,240,000",
      contractStart: "2023-01-01",
      contractEnd: "2024-12-31",
      riskScore: 0.12
    },
    {
      id: "PROV-002", 
      name: "عيادة النور الطبية",
      type: "عيادة",
      specialties: ["عام", "أطفال"],
      location: "جدة",
      phone: "+966-12-345-6789",
      email: "contact@alnoor.sa",
      status: "active",
      rating: 4.5,
      totalClaims: 342,
      approvedClaims: 318,
      totalAmount: "890,000",
      contractStart: "2023-06-01",
      contractEnd: "2024-05-31",
      riskScore: 0.08
    },
    {
      id: "PROV-003",
      name: "صيدلية الشفاء",
      type: "صيدلية", 
      specialties: ["أدوية عامة", "مستحضرات"],
      location: "الدمام",
      phone: "+966-13-234-5678",
      email: "pharmacy@alshifa.sa",
      status: "suspended",
      rating: 3.2,
      totalClaims: 156,
      approvedClaims: 89,
      totalAmount: "245,000",
      contractStart: "2023-03-01",
      contractEnd: "2024-02-29",
      riskScore: 0.67
    },
    {
      id: "PROV-004",
      name: "مختبر الدقة للتحاليل",
      type: "مختبر",
      specialties: ["تحاليل دم", "أشعة", "باثولوجي"],
      location: "الرياض",
      phone: "+966-11-567-8900",
      email: "lab@accuracy.sa",
      status: "pending",
      rating: 4.1,
      totalClaims: 892,
      approvedClaims: 834,
      totalAmount: "1,560,000",
      contractStart: "2024-01-01",
      contractEnd: "2024-12-31",
      riskScore: 0.23
    },
    {
      id: "PROV-005",
      name: "مجمع الرعاية الصحية",
      type: "مجمع طبي",
      specialties: ["متعدد التخصصات"],
      location: "مكة المكرمة",
      phone: "+966-12-789-0123",
      email: "info@healthcare.sa",
      status: "active",
      rating: 4.6,
      totalClaims: 2103,
      approvedClaims: 1987,
      totalAmount: "8,970,000",
      contractStart: "2022-01-01",
      contractEnd: "2025-12-31",
      riskScore: 0.15
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">نشط</Badge>;
      case "suspended":
        return <Badge className="bg-danger text-danger-foreground">معلق</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">قيد المراجعة</Badge>;
      case "inactive":
        return <Badge variant="secondary">غير نشط</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getRiskColor = (score: number) => {
    if (score >= 0.6) return "text-danger";
    if (score >= 0.3) return "text-warning";
    return "text-success";
  };

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === "all" || provider.status === statusFilter;
    const matchesType = typeFilter === "all" || provider.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">إدارة مقدمي الخدمة</h1>
          <p className="text-muted-foreground">
            دليل شامل لمقدمي الخدمات الطبية المعتمدين
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            فلاتر متقدمة
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            مقدم خدمة جديد
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المقدمين</CardTitle>
            <Building className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+12 هذا الشهر</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المقدمين النشطين</CardTitle>
            <Activity className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">289</div>
            <p className="text-xs text-muted-foreground">84.5% من الإجمالي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">متوسط التقييم</CardTitle>
            <Star className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <p className="text-xs text-muted-foreground">من 5 نجوم</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المدفوعات</CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8M ريال</div>
            <p className="text-xs text-muted-foreground">هذا العام</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="directory" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="directory">دليل المقدمين</TabsTrigger>
          <TabsTrigger value="contracts">العقود والاتفاقيات</TabsTrigger>
          <TabsTrigger value="performance">تقييم الأداء</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>البحث والفلترة</CardTitle>
              <CardDescription>
                استخدم الفلاتر للعثور على مقدمي الخدمة المناسبين
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="البحث باسم المقدم، الموقع، أو التخصص..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10 text-right"
                      dir="rtl"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="فلترة بالحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="active">نشط</SelectItem>
                    <SelectItem value="suspended">معلق</SelectItem>
                    <SelectItem value="pending">قيد المراجعة</SelectItem>
                    <SelectItem value="inactive">غير نشط</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="فلترة بالنوع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأنواع</SelectItem>
                    <SelectItem value="مستشفى">مستشفى</SelectItem>
                    <SelectItem value="عيادة">عيادة</SelectItem>
                    <SelectItem value="صيدلية">صيدلية</SelectItem>
                    <SelectItem value="مختبر">مختبر</SelectItem>
                    <SelectItem value="مجمع طبي">مجمع طبي</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>نتائج البحث ({filteredProviders.length})</span>
                <div className="text-sm text-muted-foreground">
                  عرض {filteredProviders.length} من {providers.length} مقدم خدمة
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">مقدم الخدمة</TableHead>
                    <TableHead className="text-right">النوع</TableHead>
                    <TableHead className="text-right">الموقع</TableHead>
                    <TableHead className="text-right">التقييم</TableHead>
                    <TableHead className="text-right">المطالبات</TableHead>
                    <TableHead className="text-right">المبلغ الإجمالي</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">المخاطر</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProviders.map((provider) => (
                    <TableRow key={provider.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {provider.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{provider.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {provider.specialties.slice(0, 2).join('، ')}
                              {provider.specialties.length > 2 && '...'}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{provider.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{provider.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-warning" />
                          <span>{provider.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{provider.totalClaims} إجمالي</div>
                          <div className="text-success">{provider.approvedClaims} مقبول</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {provider.totalAmount} ريال
                      </TableCell>
                      <TableCell>{getStatusBadge(provider.status)}</TableCell>
                      <TableCell className={getRiskColor(provider.riskScore)}>
                        {(provider.riskScore * 100).toFixed(0)}%
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>العقود والاتفاقيات</CardTitle>
              <CardDescription>
                إدارة عقود مقدمي الخدمة والاتفاقيات التجارية
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>سيتم إضافة إدارة العقود هنا</p>
                <p className="text-sm">تشمل: مراجعة العقود، تجديد الاتفاقيات، وإدارة الأسعار</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>تقييم الأداء</CardTitle>
              <CardDescription>
                مراقبة وتقييم أداء مقدمي الخدمة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>سيتم إضافة لوحة تقييم الأداء هنا</p>
                <p className="text-sm">تشمل: KPIs، معدلات الرضا، وجودة الخدمة</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProvidersManagement;