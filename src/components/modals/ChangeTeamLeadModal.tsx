import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { Search } from "lucide-react";
import { useData } from "../../contexts/DataContext";
interface ChangeTeamLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: {
    id: number;
    name: string;
    lead: string;
  };
  onSuccess: () => void;
}
export function ChangeTeamLeadModal({
  isOpen,
  onClose,
  team,
  onSuccess
}: ChangeTeamLeadModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    employees,
    updateTeam
  } = useData();
  // Filter employees who are not the current team lead
  const availableEmployees = employees.filter(emp => emp.name !== team.lead && emp.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleChangeTeamLead = (employeeId: number) => {
    const newLead = employees.find(emp => emp.id === employeeId);
    if (newLead) {
      updateTeam(team.id, {
        lead: newLead.name
      });
      onSuccess();
      onClose();
    }
  };
  return <Modal isOpen={isOpen} onClose={onClose} title={`Change Team Lead - ${team.name}`}>
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search employees..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {availableEmployees.map(employee => <button key={employee.id} className="w-full px-4 py-3 flex items-center text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => handleChangeTeamLead(employee.id)}>
              <img src={employee.avatar} alt={employee.name} className="h-8 w-8 rounded-full mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {employee.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {employee.role}
                </p>
              </div>
            </button>)}
        </div>
        {availableEmployees.length === 0 && <p className="text-center text-gray-500 dark:text-gray-400 py-4">
            No matching employees found
          </p>}
      </div>
    </Modal>;
}