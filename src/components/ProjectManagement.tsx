import React from "react";
import { Plus, Clock, Users2, CheckCircle } from "lucide-react";
export function ProjectManagement() {
  const projects = [{
    id: 1,
    name: "Website Redesign",
    description: "Redesigning the company website with new brand guidelines",
    team: "Front-end",
    deadline: "2024-03-15",
    progress: 75,
    status: "In Progress",
    members: [{
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }, {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }]
  }, {
    id: 2,
    name: "API Integration",
    description: "Implementing new payment gateway API integration",
    team: "Back-end",
    deadline: "2024-04-01",
    progress: 45,
    status: "In Progress",
    members: [{
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }]
  }, {
    id: 3,
    name: "Data Migration",
    description: "Migrating customer data to new cloud infrastructure",
    team: "Data Team",
    deadline: "2024-03-30",
    progress: 90,
    status: "Review",
    members: [{
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }]
  }];
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Project Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage ongoing projects
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {projects.map(project => <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {project.description}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === "Review" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                {project.status}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center">
                <Users2 className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">
                  {project.team}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">
                  Due {new Date(project.deadline).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">
                  {project.progress}% Complete
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{
              width: `${project.progress}%`
            }} />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.members.map((member, index) => <img key={index} className="h-8 w-8 rounded-full ring-2 ring-white" src={member.avatar} alt={member.name} title={member.name} />)}
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Details
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}