import React from "react";
import { Users, Bell, Briefcase, Calendar, MessageSquare } from "lucide-react";
export function EmployeeDashboard() {
  const myStats = [{
    name: "My Team",
    value: "Front-end",
    icon: Users
  }, {
    name: "Active Projects",
    value: "3",
    icon: Briefcase
  }, {
    name: "Upcoming Meetings",
    value: "2",
    icon: Calendar
  }, {
    name: "Messages",
    value: "5",
    icon: MessageSquare
  }];
  const myProjects = [{
    name: "Website Redesign",
    deadline: "2024-03-15",
    progress: 75,
    status: "In Progress"
  }, {
    name: "User Authentication",
    deadline: "2024-04-01",
    progress: 45,
    status: "In Progress"
  }];
  const myTeamMembers = [{
    name: "Sarah Wilson",
    role: "Team Lead",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "James Carter",
    role: "UI/UX Designer",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }];
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          My Dashboard
        </h1>
      </div>
      {/* Personal Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {myStats.map(stat => <div key={stat.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>)}
      </div>
      {/* My Projects */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          My Projects
        </h2>
        <div className="space-y-4">
          {myProjects.map(project => <div key={project.name} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Due {new Date(project.deadline).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-red-600 rounded-full h-2" style={{
                  width: `${project.progress}%`
                }} />
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  {project.status}
                </span>
              </div>
            </div>)}
        </div>
      </div>
      {/* My Team */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          My Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myTeamMembers.map(member => <div key={member.name} className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {member.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
              </div>
              <button className="ml-auto p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>)}
        </div>
      </div>
    </div>;
}