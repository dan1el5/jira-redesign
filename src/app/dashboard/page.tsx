"use client";
import { AppSidebar } from "@/components/app-sidebar";
import WidgetGrid from "@/components/ui/WidgetGrid";

function DashboardPage() {
  return (
    <div className="dashboard-layout">
        <AppSidebar />
        <div className="dashboard-title"><h1>Project Dashboard</h1></div>   
        <WidgetGrid />
    </div>
  );
}

export default DashboardPage;