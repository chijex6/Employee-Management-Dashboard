import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { useData } from "../../contexts/DataContext";
interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
export function AddProjectModal({
  isOpen,
  onClose,
  onSuccess
}: AddProjectModalProps) {
  const {
    addProject,
    teams,
    addEvent,
    updateTeam
  } = useData();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    team: "",
    deadline: "",
    members: [] as Array<{
      name: string;
      avatar: string;
    }>
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new project
    const newProject = {
      id: Date.now(),
      ...formData,
      progress: 0,
      status: "Not Started" as const
    };
    addProject(newProject);
    // Add deadline to calendar
    addEvent({
      id: `proj-${Date.now()}`,
      date: formData.deadline,
      title: `${formData.name} Deadline`,
      type: "deadline"
    });
    // Update team's active projects count
    const team = teams.find(t => t.name === formData.team);
    if (team) {
      updateTeam(team.id, {
        activeProjects: team.activeProjects + 1
      });
    }
    onSuccess();
    onClose();
    setFormData({
      name: "",
      description: "",
      team: "",
      deadline: "",
      members: []
    });
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Add New Project">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Project Name
          </label>
          <input type="text" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.name} onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" rows={3} value={formData.description} onChange={e => setFormData({
          ...formData,
          description: e.target.value
        })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Team
          </label>
          <select required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.team} onChange={e => setFormData({
          ...formData,
          team: e.target.value
        })}>
            <option value="">Select a team</option>
            {teams.map(team => <option key={team.id} value={team.name}>
                {team.name}
              </option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Deadline
          </label>
          <input type="date" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.deadline} onChange={e => setFormData({
          ...formData,
          deadline: e.target.value
        })} />
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Create Project
          </button>
        </div>
      </form>
    </Modal>;
}