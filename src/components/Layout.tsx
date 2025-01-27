import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardOverview } from "./DashboardOverview";
import { EmployeeDirectory } from "./EmployeeDirectory";
import { TeamManagement } from "./TeamManagement";
import { ProjectManagement } from "./ProjectManagement";
import { Calendar } from "./Calendar";
import { Settings } from "./Settings";
export function Layout() {
  return <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/employees" element={<EmployeeDirectory />} />
          <Route path="/teams" element={<TeamManagement />} />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>;
}