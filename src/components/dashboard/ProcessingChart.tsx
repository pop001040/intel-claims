import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

const ProcessingChart = () => {
  const data = [
    { name: 'السبت', processed: 120, approved: 95, rejected: 25 },
    { name: 'الأحد', processed: 142, approved: 108, rejected: 34 },
    { name: 'الاثنين', processed: 165, approved: 135, rejected: 30 },
    { name: 'الثلاثاء', processed: 138, approved: 112, rejected: 26 },
    { name: 'الأربعاء', processed: 180, approved: 155, rejected: 25 },
    { name: 'الخميس', processed: 195, approved: 170, rejected: 25 },
    { name: 'الجمعة', processed: 210, approved: 185, rejected: 25 },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>معدل المعالجة اليومي</CardTitle>
        <CardDescription>
          إحصائيات المطالبات المعالجة خلال الأسبوع الماضي
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorProcessed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.3} />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="processed" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1} 
                fill="url(#colorProcessed)"
                strokeWidth={2}
                name="إجمالي المعالج"
              />
              <Area 
                type="monotone" 
                dataKey="approved" 
                stroke="hsl(var(--success))" 
                fillOpacity={1} 
                fill="url(#colorApproved)"
                strokeWidth={2}
                name="المقبول"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingChart;