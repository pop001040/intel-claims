import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import ClaimsManagement from "@/components/claims/ClaimsManagement";
import FraudDetection from "@/components/fraud/FraudDetection";
import DocumentReview from "@/components/documents/DocumentReview";
import ProvidersManagement from "@/components/providers/ProvidersManagement";
import Reports from "@/components/reports/Reports";
import AuditLogs from "@/components/audit/AuditLogs";
import AlertsCenter from "@/components/alerts/AlertsCenter";

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
        return <DocumentReview />;
      case "providers":
        return <ProvidersManagement />;
      case "reports":
        return <Reports />;
      case "audit":
        return <AuditLogs />;
      case "alerts":
        return <AlertsCenter />;
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