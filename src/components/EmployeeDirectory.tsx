import React, { useState } from "react";
import { Search, Filter, Mail, Phone, Plus } from "lucide-react";
export function EmployeeDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const employees = [{
    id: 1,
    name: "Sarah Wilson",
    role: "Senior Frontend Developer",
    team: "Front-end",
    email: "sarah.wilson@techfirm.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 2,
    name: "James Carter",
    role: "UI/UX Designer",
    team: "Front-end",
    email: "james.carter@techfirm.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  // New entries (expanded to 15)
  {
    id: 3,
    name: "Liam Nguyen",
    role: "Junior Frontend Developer",
    team: "Front-end",
    email: "liam.nguyen@techfirm.com",
    phone: "+1 (555) 345-6789",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 4,
    name: "Sophia Martinez",
    role: "React Developer",
    team: "Front-end",
    email: "sophia.martinez@techfirm.com",
    phone: "+1 (555) 456-7890",
    status: "On Leave",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 5,
    name: "Ethan Brown",
    role: "Frontend Architect",
    team: "Front-end",
    email: "ethan.brown@techfirm.com",
    phone: "+1 (555) 567-8901",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 6,
    name: "Ava Johnson",
    role: "Angular Developer",
    team: "Front-end",
    email: "ava.johnson@techfirm.com",
    phone: "+1 (555) 678-9012",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 7,
    name: "Noah Kim",
    role: "Full-Stack Developer (Frontend Focus)",
    team: "Front-end",
    email: "noah.kim@techfirm.com",
    phone: "+1 (555) 789-0123",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 8,
    name: "Isabella Lopez",
    role: "UI Engineer",
    team: "Front-end",
    email: "isabella.lopez@techfirm.com",
    phone: "+1 (555) 890-1234",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 9,
    name: "Mia Clark",
    role: "Frontend QA Engineer",
    team: "Front-end",
    email: "mia.clark@techfirm.com",
    phone: "+1 (555) 901-2345",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 10,
    name: "Oliver Garcia",
    role: "Vue.js Developer",
    team: "Front-end",
    email: "oliver.garcia@techfirm.com",
    phone: "+1 (555) 012-3456",
    status: "Inactive",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 11,
    name: "Emma Wilson",
    role: "Accessibility Specialist",
    team: "Front-end",
    email: "emma.wilson@techfirm.com",
    phone: "+1 (555) 112-2334",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 12,
    name: "Lucas Taylor",
    role: "Frontend Team Lead",
    team: "Front-end",
    email: "lucas.taylor@techfirm.com",
    phone: "+1 (555) 223-3445",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 13,
    name: "Amelia White",
    role: "JavaScript Developer",
    team: "Front-end",
    email: "amelia.white@techfirm.com",
    phone: "+1 (555) 334-4556",
    status: "On Leave",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 14,
    name: "Benjamin Lee",
    role: "Frontend Intern",
    team: "Front-end",
    email: "benjamin.lee@techfirm.com",
    phone: "+1 (555) 445-5667",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    id: 15,
    name: "Charlotte Adams",
    role: "Frontend Performance Engineer",
    team: "Front-end",
    email: "charlotte.adams@techfirm.com",
    phone: "+1 (555) 556-6778",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }];
  const teams = ["All", "Front-end", "Back-end", "Cloud Computing", "IT", "HR", "Data Team", "AI & ML", "Marketing", "Sales", "Finance"];
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = selectedTeam === "All" || employee.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Employee Directory
        </h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Employee
        </button>
      </div>
  
      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search employees..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <select
            className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
      </div>
  
      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-start">
              <img
                className="h-12 w-12 rounded-full"
                src={employee.avatar}
                alt={employee.name}
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {employee.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {employee.role}
                </p>
                <div className="mt-2 flex items-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      employee.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
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
          </div>
        ))}
      </div>
    </div>
  );
}  