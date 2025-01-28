import React, { useState } from "react";
import { Users2, TrendingUp, CheckCircle, Clock, MoreVertical, UserPlus, FolderPlus } from "lucide-react";
import { ChangeTeamLeadModal } from "./modals/ChangeTeamLeadModal";
import { AssignProjectModal } from "./modals/AssignProjectModal";
import { Toast } from "./shared/Toast";
import { useData } from "../contexts/DataContext";
export function TeamManagement() {
  const {
    teams
  } = useData();
  const [showTeamActions, setShowTeamActions] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<{
    id: number;
    name: string;
    lead: string;
    memberCount: number;
    activeProjects: number;
    completionRate: number;
    avatar: string;
  } | null>(null);
  const [showChangeLeadModal, setShowChangeLeadModal] = useState(false);
  const [showAssignProjectModal, setShowAssignProjectModal] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast({
      message,
      type
    });
  };
  const handleSuccess = (message: string) => {
    showToast(message, "success");
    setShowTeamActions(false);
  };
  const TeamActionsMenu = ({
    team
  }: {
    team: {
      name: string;
      lead: string;
      memberCount: number;
      activeProjects: number;
      completionRate: number;
      avatar: string;
    };
  }) => <div className="relative">
      <button onClick={() => {
      setSelectedTeam(team);
      console.log("Selected team:", team);
      setShowTeamActions(!showTeamActions);
    }} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
        <MoreVertical className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </button>
      {showTeamActions && selectedTeam === team && <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => {
          setShowChangeLeadModal(true);
          setShowTeamActions(false);
        }}>
              <UserPlus className="mr-3 h-5 w-5" />
              Change Team Lead
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => {
          setShowAssignProjectModal(true);
          setShowTeamActions(false);
        }}>
              <FolderPlus className="mr-3 h-5 w-5" />
              Assign New Project
            </button>
          </div>
        </div>}
    </div>;
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Team Management
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Overview of all teams and their performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {teams.map(team => <div key={team.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Users2 className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                <h2 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">
                  {team.name}
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                <img className="h-8 w-8 rounded-full" src={team.avatar} alt={team.lead} />
                <TeamActionsMenu team={team} />
              </div>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Team Lead
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {team.lead}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                <div className="flex items-center">
                  <Users2 className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    Members
                  </p>
                </div>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {team.memberCount}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    Active Projects
                  </p>
                </div>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {team.activeProjects}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    Completion Rate
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {team.completionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{
              width: `${team.completionRate}%`
            }} />
              </div>
            </div>

            <button className="mt-4 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              View Team Details
            </button>
          </div>)}
      </div>
      {selectedTeam && <>
          <ChangeTeamLeadModal isOpen={showChangeLeadModal} onClose={() => setShowChangeLeadModal(false)} team={selectedTeam} onSuccess={() => handleSuccess("Team lead updated successfully")} />
          <AssignProjectModal isOpen={showAssignProjectModal} onClose={() => setShowAssignProjectModal(false)} team={selectedTeam} onSuccess={() => handleSuccess("Project assigned successfully")} />
        </>}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>;
}