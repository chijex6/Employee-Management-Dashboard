import React, { useState } from "react";
import { Search, Filter, Mail, Phone, Plus } from "lucide-react";
import { useData } from "../contexts/DataContext";
import { AddEmployeeModal } from "./modals/AddEmployeeModal";
export function EmployeeDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const {
    employees
  } = useData();
  const teams = ["All", "Front-end", "Back-end", "Cloud Computing", "IT", "HR", "Data Team", "AI & ML", "Marketing", "Sales", "Finance"];
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = selectedTeam === "All" || employee.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });
  const handleAddSuccess = () => {
    setToast({
      message: "Employee added successfully",
      type: "success"
    });
  };
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Employee Directory
        </h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-5 w-5 mr-2" />
          Add Employee
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <input type="text" placeholder="Search employees..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <select className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" value={selectedTeam} onChange={e => setSelectedTeam(e.target.value)}>
            {teams.map(team => <option key={team} value={team}>
                {team}
              </option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map(employee => <div key={employee.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start">
              <img className="h-12 w-12 rounded-full" src={employee.avatar} alt={employee.name} />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {employee.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {employee.role}
                </p>
                <div className="mt-2 flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${employee.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}`}>
                    {employee.status}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {employee.team}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Mail className="h-4 w-4 mr-2" />
              {employee.email}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Phone className="h-4 w-4 mr-2" />
              {employee.phone}
            </div>
          </div>)}
      </div>
      <AddEmployeeModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSuccess={handleAddSuccess} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>;
}