import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<{
    date: string;
    title: string;
    type: "meeting" | "deadline" | "training" | "review";
  }>({
    date: "",
    title: "",
    type: "meeting"
  });
  const {
    events,
    addEvent
  } = useData();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const days = Array.from({
    length: daysInMonth
  }, (_, i) => i + 1);
  const padding = Array.from({
    length: firstDayOfMonth
  }, (_, i) => i);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  const handleAddEvent = () => {
    const eventDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), parseInt(newEvent.date));
    if (newEvent.title && newEvent.date && newEvent.type) {
      addEvent({
        id: `${Date.now()}`,
        date: eventDate.toISOString(),
        title: newEvent.title,
        type: newEvent.type
      });
      setNewEvent({
        date: "",
        title: "",
        type: "meeting"
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill in all fields!");
    }
  };
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Calendar</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Manage events and schedules</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
          <Plus className="h-5 w-5 mr-2" />
          Add Event
        </button>
      </div>

      {/* Modal for Adding Event */}
      {isModalOpen && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Add Event</h2>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">Date</label>
              <input type="number" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" placeholder="Enter day (e.g., 15)" value={newEvent.date} onChange={e => setNewEvent({
            ...newEvent,
            date: e.target.value
          })} />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">Title</label>
              <input type="text" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" placeholder="Enter event title" value={newEvent.title} onChange={e => setNewEvent({
            ...newEvent,
            title: e.target.value
          })} />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 dark:text-gray-400 mb-1">Type</label>
              <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" value={newEvent.type} onChange={e => setNewEvent({
            ...newEvent,
            type: e.target.value as "meeting" | "deadline" | "training" | "review"
          })}>
                <option value="meeting">Meeting</option>
                <option value="deadline">Deadline</option>
                <option value="training">Training</option>
                <option value="review">Review</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md mr-2" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleAddEvent}>
                Add Event
              </button>
            </div>
          </div>
        </div>}

      <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <h2 className="mx-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day} className="py-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                {day}
              </div>)}
          </div>
          <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
            {padding.map((_, index) => <div key={`padding-${index}`} className="bg-gray-100 dark:bg-gray-800" />)}
            {days.map(day => <div key={day} className="h-24 p-2 bg-gray-50 dark:bg-gray-900 border-t border-l border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{day}</span>
                {events.map((event, index) => {
              const eventDate = new Date(event.date);
              if (eventDate.getDate() === day && eventDate.getMonth() === currentMonth.getMonth() && eventDate.getFullYear() === currentMonth.getFullYear()) {
                return <div key={index} className={`mt-1 px-2 py-1 text-xs rounded ${event.type === "meeting" ? "bg-blue-500 text-white" : event.type === "deadline" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
                        {event.title}
                      </div>;
              }
              return null;
            })}
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}