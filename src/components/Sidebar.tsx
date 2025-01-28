import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Users2, FolderKanban, CalendarDays, Settings, BarChart, X } from "lucide-react";
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}
export function Sidebar({
  open,
  onClose
}: SidebarProps) {
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
    name: "Statistics",
    icon: BarChart,
    href: "/statistics"
  }, {
    name: "Calendar",
    icon: CalendarDays,
    href: "/calendar"
  }, {
    name: "Settings",
    icon: Settings,
    href: "/settings"
  }];
  return <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 
        dark:border-gray-700 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          TechFirm
        </h1>
        <button onClick={onClose} className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
          <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <nav className="space-y-1 p-4">
        {navigation.map(item => <NavLink key={item.name} to={item.href} onClick={() => onClose()} // Close sidebar when clicking a link on mobile
      className={({
        isActive
      }) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-50" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"}`}>
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>)}
      </nav>
    </div>;
}