import React, { useState } from "react";
import { Modal } from "../shared/Modal";
import { Search } from "lucide-react";
interface ChangeTeamLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: {
    name: string;
    lead: string;
  };
  onChangeTeamLead: (employeeId: string) => void;
}
export function ChangeTeamLeadModal({
  isOpen,
  onClose,
  team,
  onChangeTeamLead
}: ChangeTeamLeadModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  // Mock employee data - in real app, this would come from API
  const employees = [{
    id: "1",
    name: "John Doe",
    role: "Senior Developer"
  }, {
    id: "2",
    name: "Jane Smith",
    role: "Technical Lead"
  }
  // Add more employees...
  ];
  const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return <Modal isOpen={isOpen} onClose={onClose} title={`Change Team Lead - ${team.name}`}>
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search employees..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredEmployees.map(employee => <button key={employee.id} className="w-full px-4 py-3 flex items-center text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md" onClick={() => {
          onChangeTeamLead(employee.id);
          onClose();
        }}>
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
      </div>
    </Modal>;
}