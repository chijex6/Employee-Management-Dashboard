// contexts/DataContext.tsx
import React, { createContext, useContext, useState } from 'react';
import {
  Employee,
  Team,
  Project,
  Event,
  initialEmployees,
  initialTeams,
  initialProjects,
  initialEvents,
} from '../components/data';

interface DataContextType {
  // Data
  employees: Employee[];
  teams: Team[];
  projects: Project[];
  events: Event[];
  
  // CRUD Operations
  addEmployee: (employee: Employee) => void;
  updateEmployee: (id: number, updatedData: Partial<Employee>) => void;
  addTeam: (team: Team) => void;
  updateTeam: (id: number, updatedData: Partial<Team>) => void;
  addProject: (project: Project) => void;
  updateProject: (id: number, updatedData: Partial<Project>) => void;
  addEvent: (event: Event) => void;
}

const DataContext = createContext<DataContextType>({
  employees: [],
  teams: [],
  projects: [],
  events: [],
  addEmployee: () => {},
  updateEmployee: () => {},
  addTeam: () => {},
  updateTeam: () => {},
  addProject: () => {},
  updateProject: () => {},
  addEvent: () => {},
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [events, setEvents] = useState<Event[]>(initialEvents);

  // Employee operations
  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const updateEmployee = (id: number, updatedData: Partial<Employee>) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, ...updatedData } : emp))
    );
  };

  // Team operations
  const addTeam = (team: Team) => {
    setTeams((prev) => [...prev, team]);
  };

  const updateTeam = (id: number, updatedData: Partial<Team>) => {
    setTeams((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t))
    );
  };

  // Project operations
  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  const updateProject = (id: number, updatedData: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
    );
  };

  // Event operations
  const addEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
  };

  return (
    <DataContext.Provider
      value={{
        employees,
        teams,
        projects,
        events,
        addEmployee,
        updateEmployee,
        addTeam,
        updateTeam,
        addProject,
        updateProject,
        addEvent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);