import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Users2, FolderKanban, CalendarDays, Settings, Bell } from "lucide-react";
export function Sidebar() {
  const navigation = [{
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/"
  }, {
    name: "Employees",
    icon: Users,
    href: "/employees"
  }, {
    name: "Teams",
    icon: Users2,
    href: "/teams"
  }, {
    name: "Projects",
    icon: FolderKanban,
    href: "/projects"
  }, {
    name: "Calendar",
    icon: CalendarDays,
    href: "/calendar"
  }, {
    name: "Settings",
    icon: Settings,
    href: "/settings"
  }];
  return <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center mb-8 px-2">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          TechFirm
        </h1>
      </div>
      <nav className="space-y-1">
        {navigation.map(item => <NavLink key={item.name} to={item.href} className={({
        isActive
      }) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-50" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"}`}>
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>)}
      </nav>
    </div>;
}