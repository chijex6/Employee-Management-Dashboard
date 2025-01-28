import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardOverview } from "./DashboardOverview";
import { EmployeeDirectory } from "./EmployeeDirectory";
import { TeamManagement } from "./TeamManagement";
import { ProjectManagement } from "./ProjectManagement";
import { Calendar } from "./Calendar";
import { Settings } from "./Settings";
import { Statistics } from "./Statistics";
import { Menu } from "lucide-react";
export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
      {sidebarOpen && <div className="fixed inset-0 bg-gray-800/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <button className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" onClick={() => setSidebarOpen(true)}>
        <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      </button>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 overflow-auto pt-16 lg:pt-0">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/employees" element={<EmployeeDirectory />} />
          <Route path="/teams" element={<TeamManagement />} />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </main>
    </div>;
}