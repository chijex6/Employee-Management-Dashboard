import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { useData } from "../../contexts/DataContext";
interface AddEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
export function AddEmployeeModal({
  isOpen,
  onClose,
  onSuccess
}: AddEmployeeModalProps) {
  const {
    addEmployee,
    teams,
    updateTeam
  } = useData();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    team: "",
    email: "",
    phone: "",
    status: "Active" as const,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new employee
    const newEmployee = {
      id: Date.now(),
      ...formData
    };
    addEmployee(newEmployee);
    // Update team member count
    const team = teams.find(t => t.name === formData.team);
    if (team) {
      updateTeam(team.id, {
        memberCount: team.memberCount + 1
      });
    }
    onSuccess();
    onClose();
    setFormData({
      name: "",
      role: "",
      team: "",
      email: "",
      phone: "",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    });
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Add New Employee">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input type="text" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.name} onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Role
          </label>
          <input type="text" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.role} onChange={e => setFormData({
          ...formData,
          role: e.target.value
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
            Email
          </label>
          <input type="email" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.email} onChange={e => setFormData({
          ...formData,
          email: e.target.value
        })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone
          </label>
          <input type="tel" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" value={formData.phone} onChange={e => setFormData({
          ...formData,
          phone: e.target.value
        })} />
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Add Employee
          </button>
        </div>
      </form>
    </Modal>;
}