import React from "react";
import { Users, Bell, Briefcase, Calendar } from "lucide-react";
export function DashboardOverview() {
  const stats = [{
    name: "Total Employees",
    value: "156",
    icon: Users
  }, {
    name: "Active Projects",
    value: "12",
    icon: Briefcase
  }, {
    name: "Upcoming Events",
    value: "8",
    icon: Calendar
  }, {
    name: "Notifications",
    value: "24",
    icon: Bell
  }];
  const teams = [{
    name: "Front-end",
    count: 15
  }, {
    name: "Back-end",
    count: 12
  }, {
    name: "Cloud Computing",
    count: 8
  }, {
    name: "IT",
    count: 10
  }, {
    name: "HR",
    count: 5
  }, {
    name: "Data Team",
    count: 7
  }, {
    name: "AI & ML",
    count: 6
  }, {
    name: "Marketing",
    count: 8
  }, {
    name: "Sales",
    count: 12
  }, {
    name: "Finance",
    count: 6
  }];
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">
          Dashboard Overview
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map(stat => <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-200" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">{stat.name}</p>
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>)}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Team Distribution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map(team => <div key={team.name} className="flex items-center justify-between p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 rounded-md">
              <span className="text-sm font-medium text-gray-300">
                {team.name}
              </span>
              <span className="text-sm font-semibold text-white">
                {team.count}
              </span>
            </div>)}
        </div>
      </div>
    </div>;
}