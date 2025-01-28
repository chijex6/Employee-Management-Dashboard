import React, { useState } from "react";
import { Plus, Clock, Users2, CheckCircle } from "lucide-react";
import { AddProjectModal } from "./modals/AddProjectModal";
import { useData } from "../contexts/DataContext";
import { Toast } from "./shared/Toast";
export function ProjectManagement() {
  const {
    projects
  } = useData();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const handleAddSuccess = () => {
    setToast({
      message: "Project created successfully",
      type: "success"
    });
  };
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Project Management
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track and manage ongoing projects
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map(project => <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === "Review" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"}`}>
                {project.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center">
                <Users2 className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {project.team}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  Due {new Date(project.deadline).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {project.progress}% Complete
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-full h-2" style={{
              width: `${project.progress}%`
            }} />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.members.map((member, index) => <img key={index} className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={member.avatar} alt={member.name} title={member.name} />)}
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium">
                View Details
              </button>
            </div>
          </div>)}
      </div>
      <AddProjectModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSuccess={handleAddSuccess} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>;
}