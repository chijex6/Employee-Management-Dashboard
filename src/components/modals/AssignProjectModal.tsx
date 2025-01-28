import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { useData } from "../../contexts/DataContext";
interface AssignProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: {
    id: number;
    name: string;
  };
  onSuccess: () => void;
}
export function AssignProjectModal({
  isOpen,
  onClose,
  team,
  onSuccess
}: AssignProjectModalProps) {
  const {
    addProject
  } = useData();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    deadline: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      team: team.name,
      deadline: formData.deadline,
      progress: 0,
      status: "Not Started" as const,
      members: [] // Initially empty, can be updated later
    };
    addProject(newProject);
    onSuccess();
    onClose();
    setFormData({
      name: "",
      description: "",
      deadline: ""
    });
  };
  return <Modal isOpen={isOpen} onClose={onClose} title={`Assign Project to ${team.name}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Project Name
          </label>
          <input type="text" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" value={formData.name} onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" rows={3} value={formData.description} onChange={e => setFormData({
          ...formData,
          description: e.target.value
        })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Deadline
          </label>
          <input type="date" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" value={formData.deadline} onChange={e => setFormData({
          ...formData,
          deadline: e.target.value
        })} />
        </div>
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md">
            Assign Project
          </button>
        </div>
      </form>
    </Modal>;
}