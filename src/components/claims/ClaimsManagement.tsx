import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  Plus,
  Eye,
  MoreHorizontal,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";

const ClaimsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const claims = [
    {
      id: "CLM-2024-001",
      patient: "سارة أحمد محمد",
      provider: "مستشفى الملك فيصل التخصصي",
      type: "فاتورة صيدلية",
      amount: "2,850.00",
      status: "pending",
      riskScore: 0.12,
      submittedDate: "2024-01-15",
      reviewDate: null,
      documents: 3
    },
    {
      id: "CLM-2024-002",
      patient: "محمد علي حسن",
      provider: "عيادة النور الطبية",
      type: "كشف طبي",
      amount: "450.00",
      status: "approved",
      riskScore: 0.08,
      submittedDate: "2024-01-15",
      reviewDate: "2024-01-15",
      documents: 2
    },
    {
      id: "CLM-2024-003",
      patient: "فاطمة خالد إبراهيم",
      provider: "مختبر الدقة للتحاليل",
      type: "تحليل مختبر",
      amount: "320.00",
      status: "fraud_alert",
      riskScore: 0.89,
      submittedDate: "2024-01-14",
      reviewDate: null,
      documents: 4
    },
    {
      id: "CLM-2024-004",
      patient: "عبدالله محمد سالم",
      provider: "مجمع الطب الحديث",
      type: "أشعة تشخيصية",
      amount: "1,200.00",
      status: "review",
      riskScore: 0.65,
      submittedDate: "2024-01-14",
      reviewDate: null,
      documents: 5
    },
    {
      id: "CLM-2024-005",
      patient: "نورا سالم أحمد",
      provider: "صيدلية الشفاء",
      type: "وصفة طبية",
      amount: "180.00",
      status: "rejected",
      riskScore: 0.45,
      submittedDate: "2024-01-13",
      reviewDate: "2024-01-14",
      documents: 1
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-warning text-warning-foreground">
            <Clock className="w-3 h-3 mr-1" />
            قيد الانتظار
          </Badge>
        );
      case "approved":
        return (
          <Badge className="bg-success text-success-foreground">
            <CheckCircle className="w-3 h-3 mr-1" />
            مقبول
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-danger text-danger-foreground">
            <XCircle className="w-3 h-3 mr-1" />
            مرفوض
          </Badge>
        );
      case "fraud_alert":
        return (
          <Badge className="bg-danger text-danger-foreground">
            <AlertTriangle className="w-3 h-3 mr-1" />
            تحذير احتيال
          </Badge>
        );
      case "review":
        return (
          <Badge variant="outline" className="border-primary text-primary">
            <Eye className="w-3 h-3 mr-1" />
            مراجعة
          </Badge>
        );
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getRiskColor = (score: number) => {
    if (score >= 0.8) return "text-danger font-semibold";
    if (score >= 0.5) return "text-warning font-medium";
    return "text-success";
  };

  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || claim.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">إدارة المطالبات</h1>
          <p className="text-muted-foreground">
            مراجعة ومعالجة مطالبات التأمين الصحي
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            تصدير
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            مطالبة جديدة
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>البحث والفلترة</CardTitle>
          <CardDescription>
            استخدم الفلاتر للعثور على المطالبات المحددة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="البحث برقم المطالبة، اسم المريض، أو مقدم الخدمة..."
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
                <SelectItem value="pending">قيد الانتظار</SelectItem>
                <SelectItem value="approved">مقبول</SelectItem>
                <SelectItem value="rejected">مرفوض</SelectItem>
                <SelectItem value="fraud_alert">تحذير احتيال</SelectItem>
                <SelectItem value="review">مراجعة</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              فلاتر متقدمة
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>نتائج البحث ({filteredClaims.length})</span>
            <div className="text-sm text-muted-foreground">
              عرض {filteredClaims.length} من {claims.length} مطالبة
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم المطالبة</TableHead>
                <TableHead className="text-right">المريض</TableHead>
                <TableHead className="text-right">مقدم الخدمة</TableHead>
                <TableHead className="text-right">النوع</TableHead>
                <TableHead className="text-right">المبلغ</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">المخاطر</TableHead>
                <TableHead className="text-right">المستندات</TableHead>
                <TableHead className="text-right">تاريخ التقديم</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClaims.map((claim) => (
                <TableRow key={claim.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{claim.id}</TableCell>
                  <TableCell>{claim.patient}</TableCell>
                  <TableCell className="max-w-48 truncate">{claim.provider}</TableCell>
                  <TableCell>{claim.type}</TableCell>
                  <TableCell className="font-medium">{claim.amount} ريال</TableCell>
                  <TableCell>{getStatusBadge(claim.status)}</TableCell>
                  <TableCell className={getRiskColor(claim.riskScore)}>
                    {(claim.riskScore * 100).toFixed(0)}%
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span>{claim.documents}</span>
                    </div>
                  </TableCell>
                  <TableCell>{claim.submittedDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
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
    </div>
  );
};

export default ClaimsManagement;