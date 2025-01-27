import React from "react";
import { Users2, TrendingUp, CheckCircle, Clock } from "lucide-react";
export function TeamManagement() {
  const teams = [{
    name: "Front-end",
    lead: "Sarah Wilson",
    memberCount: 15,
    activeProjects: 4,
    completionRate: 92,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Back-end",
    lead: "Michael Chen",
    memberCount: 12,
    activeProjects: 3,
    completionRate: 88,
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Data Team",
    lead: "Emily Rodriguez",
    memberCount: 7,
    activeProjects: 2,
    completionRate: 95,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }];
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Team Management
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Overview of all teams and their performance metrics
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {teams.map(team => <div key={team.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Users2 className="h-8 w-8 text-gray-400" />
                <h2 className="ml-3 text-lg font-medium text-gray-900">
                  {team.name}
                </h2>
              </div>
              <div className="flex items-center">
                <img className="h-8 w-8 rounded-full" src={team.avatar} alt={team.lead} />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">Team Lead</p>
              <p className="text-sm font-medium text-gray-900">{team.lead}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-md p-3">
                <div className="flex items-center">
                  <Users2 className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">Members</p>
                </div>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {team.memberCount}
                </p>
              </div>
              <div className="bg-gray-50 rounded-md p-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">Active Projects</p>
                </div>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {team.activeProjects}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">
                    Completion Rate
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {team.completionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{
              width: `${team.completionRate}%`
            }} />
              </div>
            </div>
            <button className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              View Team Details
            </button>
          </div>)}
      </div>
    </div>;
}