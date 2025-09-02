import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  FileText,
  DollarSign,
  Users,
  Activity,
  PieChart,
  LineChart
} from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart as RechartsPieChart, Cell, LineChart as RechartsLineChart, Line, AreaChart, Area } from 'recharts';

const Reports = () => {
  const monthlyData = [
    { name: 'يناير', claims: 1200, approved: 980, rejected: 220, amount: 4500000 },
    { name: 'فبراير', claims: 1350, approved: 1100, rejected: 250, amount: 5200000 },
    { name: 'مارس', claims: 1580, approved: 1290, rejected: 290, amount: 6100000 },
    { name: 'أبريل', claims: 1420, approved: 1180, rejected: 240, amount: 5800000 },
    { name: 'مايو', claims: 1650, approved: 1380, rejected: 270, amount: 6800000 },
    { name: 'يونيو', claims: 1780, approved: 1520, rejected: 260, amount: 7200000 },
  ];

  const categoryData = [
    { name: 'أدوية', value: 35, color: 'hsl(var(--primary))' },
    { name: 'استشارات', value: 25, color: 'hsl(var(--success))' },
    { name: 'تحاليل', value: 20, color: 'hsl(var(--warning))' },
    { name: 'أشعة', value: 12, color: 'hsl(var(--accent))' },
    { name: 'جراحة', value: 8, color: 'hsl(var(--muted))' },
  ];

  const providerData = [
    { name: 'مستشفى الملك فيصل', claims: 450, amount: 2800000, rating: 4.8 },
    { name: 'مجمع الرعاية', claims: 380, amount: 2200000, rating: 4.6 },
    { name: 'عيادة النور', claims: 320, amount: 1800000, rating: 4.5 },
    { name: 'مختبر الدقة', claims: 280, amount: 1400000, rating: 4.1 },
    { name: 'صيدلية الشفاء', claims: 240, amount: 980000, rating: 3.9 },
  ];

  const reports = [
    {
      id: 'RPT-001',
      title: 'تقرير المطالبات الشهري',
      description: 'إحصائيات شاملة للمطالبات وأداء النظام',
      type: 'monthly',
      lastGenerated: '2024-01-15 09:30',
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      id: 'RPT-002', 
      title: 'تقرير كشف الاحتيال',
      description: 'تحليل حالات الاحتيال المكتشفة والمعالجة',
      type: 'fraud',
      lastGenerated: '2024-01-15 08:15',
      format: 'Excel',
      size: '1.8 MB'
    },
    {
      id: 'RPT-003',
      title: 'تقرير أداء مقدمي الخدمة',
      description: 'تقييم أداء وجودة خدمات المقدمين',
      type: 'providers',
      lastGenerated: '2024-01-14 16:45',
      format: 'PDF',
      size: '3.1 MB'
    },
    {
      id: 'RPT-004',
      title: 'التقرير المالي التفصيلي',
      description: 'تحليل مالي للمدفوعات والمصروفات',
      type: 'financial',
      lastGenerated: '2024-01-14 14:20',
      format: 'Excel',
      size: '4.2 MB'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'monthly': return 'bg-primary text-primary-foreground';
      case 'fraud': return 'bg-danger text-danger-foreground';
      case 'providers': return 'bg-success text-success-foreground';
      case 'financial': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">التقارير والإحصائيات</h1>
          <p className="text-muted-foreground">
            تقارير شاملة عن أداء المنظومة والاتجاهات التحليلية
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            تخصيص التاريخ
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            تصدير التقارير
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المطالبات</CardTitle>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,980</div>
            <p className="text-xs text-muted-foreground">+15% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المدفوعات</CardTitle>
            <DollarSign className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37.6M ريال</div>
            <p className="text-xs text-muted-foreground">+22% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">مقدمي الخدمة النشطين</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">289</div>
            <p className="text-xs text-muted-foreground">+8 هذا الشهر</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">معدل الموافقة</CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">87.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analytics">الإحصائيات التحليلية</TabsTrigger>
          <TabsTrigger value="financial">التقارير المالية</TabsTrigger>
          <TabsTrigger value="operational">التقارير التشغيلية</TabsTrigger>
          <TabsTrigger value="custom">التقارير المخصصة</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Trends */}
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>اتجاهات المطالبات الشهرية</CardTitle>
                <CardDescription>
                  إحصائيات المطالبات والمبالغ المعالجة خلال الأشهر الماضية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <defs>
                        <linearGradient id="colorClaims" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.3} />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="claims" 
                        stroke="hsl(var(--primary))" 
                        fillOpacity={1} 
                        fill="url(#colorClaims)"
                        strokeWidth={2}
                        name="عدد المطالبات"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>توزيع المطالبات بالفئة</CardTitle>
                <CardDescription>
                  نسبة المطالبات حسب نوع الخدمة الطبية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Tooltip />
                      <RechartsPieChart data={categoryData} cx="50%" cy="50%" innerRadius={40} outerRadius={80}>
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </RechartsPieChart>
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Providers */}
            <Card>
              <CardHeader>
                <CardTitle>أهم مقدمي الخدمة</CardTitle>
                <CardDescription>
                  المقدمين الأكثر نشاطاً من حيث عدد المطالبات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {providerData.map((provider, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{provider.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {provider.claims} مطالبة • تقييم {provider.rating}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">
                          {(provider.amount / 1000000).toFixed(1)}M ريال
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>التقارير المالية</CardTitle>
              <CardDescription>
                تحليل مفصل للمدفوعات والمصروفات المالية
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <DollarSign className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>سيتم إضافة التقارير المالية التفصيلية هنا</p>
                <p className="text-sm">تشمل: تحليل النفقات، الإيرادات، والتوقعات المستقبلية</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operational" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>التقارير التشغيلية</CardTitle>
              <CardDescription>
                تقارير الأداء التشغيلي وكفاءة العمليات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>سيتم إضافة التقارير التشغيلية هنا</p>
                <p className="text-sm">تشمل: أوقات المعالجة، معدلات الدقة، وتحليل الأداء</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>التقارير المتاحة</CardTitle>
              <CardDescription>
                آخر التقارير المُنشأة وإمكانية تحميلها
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getTypeColor(report.type)}>
                            {report.type === 'monthly' && 'شهري'}
                            {report.type === 'fraud' && 'احتيال'}
                            {report.type === 'providers' && 'مقدمين'}
                            {report.type === 'financial' && 'مالي'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            آخر إنشاء: {report.lastGenerated}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{report.format}</div>
                      <div className="text-xs text-muted-foreground">{report.size}</div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Download className="w-3 h-3 mr-1" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;