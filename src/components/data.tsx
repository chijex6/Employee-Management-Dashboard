// data.tsx
export interface Employee { 
    id: number;
    name: string;
    role: string;
    team: string;
    email: string;
    phone: string;
    status: "Active" | "On Leave" | "Inactive";
    avatar: string;
 }

export interface Team {
  id: number;
  name: string;
  lead: string;
  memberCount: number;
  activeProjects: number;
  completionRate: number;
  avatar: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  team: string;
  deadline: string;
  progress: number;
  status: "Not Started" | "In Progress" | "Completed" | "On Hold";
  members: Array<{ name: string; avatar: string }>;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  type: "meeting" | "deadline" | "training" | "review";
}

// Initial data for all categories
export const initialEmployees: Employee[] = [
    {
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
  }
];
export const initialTeams: Team[] = [
  {
    id: 1,
    name: "Front-end",
    lead: "Sarah Wilson",
    memberCount: 15,
    activeProjects: 4,
    completionRate: 92,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // Add other teams (Back-end, Cloud, etc.)
];

export const initialProjects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesigning the company website with new brand guidelines",
    team: "Front-end",
    deadline: "2024-03-15",
    progress: 75,
    status: "In Progress",
    members: [
      {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      // Add other members...
    ],
  },
];

export const initialEvents: Event[] = [
    {
        id: "1",
        date: "2025-02-10",
        title: "Team Meeting",
        type: "meeting"
    }, {
        id: "2",
        date: "2025-02-15",
        title: "Project Deadline",
        type: "deadline"
    }, {
        id: "3",
        date: "2025-02-20",
        title: "Review Session",
        type: "review"
    }
];