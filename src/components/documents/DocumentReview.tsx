import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, 
  Eye, 
  Download, 
  Upload, 
  Scan, 
  CheckCircle, 
  XCircle, 
  Clock,
  AlertTriangle,
  Zap,
  Search,
  Filter
} from "lucide-react";

const DocumentReview = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documents = [
    {
      id: "DOC-2024-001",
      claimId: "CLM-2024-001", 
      fileName: "فاتورة_صيدلية_الشفاء.pdf",
      type: "فاتورة صيدلية",
      status: "pending",
      ocrStatus: "completed",
      ocrAccuracy: 94.2,
      uploadedAt: "2024-01-15 14:30",
      reviewedAt: null,
      extractedData: {
        patientName: "سارة أحمد محمد",
        providerName: "صيدلية الشفاء",
        totalAmount: "850.00",
        date: "2024-01-15",
        items: [
          { name: "باراسيتامول 500mg", quantity: "2", unitPrice: "25.00", total: "50.00" },
          { name: "أموكسيسيلين 250mg", quantity: "1", unitPrice: "45.00", total: "45.00" },
          { name: "فيتامين د 1000IU", quantity: "1", unitPrice: "85.00", total: "85.00" }
        ]
      }
    },
    {
      id: "DOC-2024-002",
      claimId: "CLM-2024-002",
      fileName: "تقرير_أشعة_سينية.pdf", 
      type: "تقرير أشعة",
      status: "approved",
      ocrStatus: "completed",
      ocrAccuracy: 91.8,
      uploadedAt: "2024-01-15 09:15",
      reviewedAt: "2024-01-15 10:30",
      extractedData: {
        patientName: "محمد علي حسن",
        providerName: "مركز الأشعة المتقدم",
        totalAmount: "320.00",
        date: "2024-01-15",
        diagnosis: "التهاب في المفاصل"
      }
    },
    {
      id: "DOC-2024-003",
      claimId: "CLM-2024-003",
      fileName: "فاتورة_مشبوهة.jpg",
      type: "فاتورة مختبر", 
      status: "rejected",
      ocrStatus: "failed",
      ocrAccuracy: 45.2,
      uploadedAt: "2024-01-14 16:45",
      reviewedAt: "2024-01-14 17:20",
      extractedData: null,
      issues: ["جودة الصورة منخفضة", "نص غير واضح", "تنسيق غير معتاد"]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-warning text-warning-foreground"><Clock className="w-3 h-3 mr-1" />قيد المراجعة</Badge>;
      case "approved":
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="w-3 h-3 mr-1" />مقبول</Badge>;
      case "rejected":
        return <Badge className="bg-danger text-danger-foreground"><XCircle className="w-3 h-3 mr-1" />مرفوض</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  const getOCRStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground"><Scan className="w-3 h-3 mr-1" />مكتمل</Badge>;
      case "processing":
        return <Badge className="bg-warning text-warning-foreground"><Zap className="w-3 h-3 mr-1" />معالجة</Badge>;
      case "failed":
        return <Badge className="bg-danger text-danger-foreground"><AlertTriangle className="w-3 h-3 mr-1" />فشل</Badge>;
      default:
        return <Badge variant="secondary">غير محدد</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">مراجعة المستندات</h1>
          <p className="text-muted-foreground">
            مراجعة المستندات المستخرجة بتقنية OCR والذكاء الاصطناعي
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            فلترة
          </Button>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            رفع مستند
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">مستندات جديدة</CardTitle>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">تحتاج مراجعة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">دقة OCR</CardTitle>
            <Scan className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">92.5%</div>
            <p className="text-xs text-muted-foreground">متوسط هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">معالجة تلقائية</CardTitle>
            <Zap className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">نسبة الأتمتة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">وقت المعالجة</CardTitle>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3 دقيقة</div>
            <p className="text-xs text-muted-foreground">متوسط الوقت</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>قائمة المستندات</CardTitle>
            <CardDescription>
              المستندات التي تحتاج مراجعة أو معالجة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div 
                  key={doc.id}
                  className="p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setSelectedDocument(doc)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="font-medium text-sm truncate">{doc.fileName}</div>
                      <div className="text-xs text-muted-foreground">{doc.type}</div>
                    </div>
                    <FileText className="w-4 h-4 text-muted-foreground ml-2" />
                  </div>
                  
                  <div className="space-y-1">
                    {getStatusBadge(doc.status)}
                    {getOCRStatusBadge(doc.ocrStatus)}
                  </div>
                  
                  <div className="mt-2 text-xs text-muted-foreground">
                    <div>دقة OCR: {doc.ocrAccuracy}%</div>
                    <div>رُفع: {doc.uploadedAt}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>تفاصيل المستند</CardTitle>
            <CardDescription>
              عرض ومراجعة البيانات المستخرجة من المستند
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDocument ? (
              <Tabs defaultValue="extracted" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="extracted">البيانات المستخرجة</TabsTrigger>
                  <TabsTrigger value="preview">معاينة المستند</TabsTrigger>
                  <TabsTrigger value="validation">التحقق</TabsTrigger>
                </TabsList>

                <TabsContent value="extracted" className="space-y-4">
                  {selectedDocument.extractedData ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">اسم المريض</label>
                          <Input 
                            value={selectedDocument.extractedData.patientName} 
                            className="mt-1" 
                            dir="rtl"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">مقدم الخدمة</label>
                          <Input 
                            value={selectedDocument.extractedData.providerName} 
                            className="mt-1" 
                            dir="rtl"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">المبلغ الإجمالي</label>
                          <Input 
                            value={`${selectedDocument.extractedData.totalAmount} ريال`} 
                            className="mt-1" 
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">التاريخ</label>
                          <Input 
                            value={selectedDocument.extractedData.date} 
                            className="mt-1" 
                          />
                        </div>
                      </div>

                      {selectedDocument.extractedData.items && (
                        <div>
                          <label className="text-sm font-medium mb-3 block">بنود الفاتورة</label>
                          <div className="border rounded-lg overflow-hidden">
                            <div className="bg-muted p-3 grid grid-cols-4 gap-2 text-sm font-medium">
                              <div>الصنف</div>
                              <div>الكمية</div>
                              <div>السعر</div>
                              <div>الإجمالي</div>
                            </div>
                            {selectedDocument.extractedData.items.map((item, index) => (
                              <div key={index} className="p-3 grid grid-cols-4 gap-2 text-sm border-t">
                                <div>{item.name}</div>
                                <div>{item.quantity}</div>
                                <div>{item.unitPrice} ريال</div>
                                <div>{item.total} ريال</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <AlertTriangle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>فشل في استخراج البيانات</p>
                      {selectedDocument.issues && (
                        <div className="mt-4 space-y-1">
                          {selectedDocument.issues.map((issue, index) => (
                            <div key={index} className="text-sm text-danger">• {issue}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="preview" className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">معاينة المستند</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedDocument.fileName}
                    </p>
                    <Button variant="outline" className="mt-4">
                      <Download className="w-4 h-4 mr-2" />
                      تحميل المستند
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="validation" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">دقة OCR</label>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>النسبة</span>
                          <span className="font-medium">{selectedDocument.ocrAccuracy}%</span>
                        </div>
                        <Progress value={selectedDocument.ocrAccuracy} className="h-2" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">ملاحظات المراجعة</label>
                      <Textarea 
                        placeholder="أدخل ملاحظاتك على المستند..."
                        className="mt-1 resize-none"
                        rows={4}
                        dir="rtl"
                      />
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="bg-success hover:bg-success/90">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        قبول
                      </Button>
                      <Button variant="destructive">
                        <XCircle className="w-4 h-4 mr-2" />
                        رفض
                      </Button>
                      <Button variant="outline">
                        <Clock className="w-4 h-4 mr-2" />
                        طلب مراجعة إضافية
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>اختر مستند من القائمة لعرض التفاصيل</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentReview;