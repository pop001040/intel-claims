import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import ClaimsManagement from "@/components/claims/ClaimsManagement";
import FraudDetection from "@/components/fraud/FraudDetection";

const MainApp = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "claims":
        return <ClaimsManagement />;
      case "fraud":
        return <FraudDetection />;
      case "documents":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">مراجعة المستندات</h2>
              <p>سيتم تطوير هذا القسم لمراجعة المستندات بتقنية OCR</p>
            </div>
          </div>
        );
      case "providers":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">إدارة مقدمي الخدمة</h2>
              <p>دليل شامل لمقدمي الخدمات الطبية المعتمدين</p>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">التقارير والإحصائيات</h2>
              <p>تقارير شاملة عن أداء المنظومة والاتجاهات</p>
            </div>
          </div>
        );
      case "audit":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">سجل التدقيق</h2>
              <p>سجل شامل لجميع العمليات والتغييرات في النظام</p>
            </div>
          </div>
        );
      case "alerts":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">التنبيهات والإشعارات</h2>
              <p>مركز إدارة التنبيهات والإشعارات الفورية</p>
            </div>
          </div>
        );
      case "users":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">إدارة المستخدمين</h2>
              <p>إدارة حسابات المستخدمين والصلاحيات (Keycloak Integration)</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">الإعدادات العامة</h2>
              <p>إعدادات النظام والتكوينات الأساسية</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MainApp;