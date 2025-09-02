import StatsGrid from "./StatsGrid";
import RecentClaims from "./RecentClaims";
import FraudAlerts from "./FraudAlerts";
import ProcessingChart from "./ProcessingChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">لوحة التحكم الرئيسية</h1>
          <p className="text-muted-foreground">نظرة شاملة على أداء منظومة TPA-AI</p>
        </div>
        <div className="text-right text-sm text-muted-foreground">
          آخر تحديث: منذ دقيقتين
        </div>
      </div>
      
      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <ProcessingChart />
        <FraudAlerts />
      </div>
      
      <RecentClaims />
    </div>
  );
};

export default Dashboard;