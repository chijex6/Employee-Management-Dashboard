import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const events = [{
    date: "2024-03-10",
    title: "Team Meeting",
    type: "meeting"
  }, {
    date: "2024-03-15",
    title: "Project Deadline",
    type: "deadline"
  }, {
    date: "2024-03-20",
    title: "Review Session",
    type: "review"
  }];
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
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage events and schedules
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Event
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="mx-4 text-lg font-semibold text-gray-900">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-7 gap-px">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day} className="py-2 text-center text-sm font-medium text-gray-500">
                {day}
              </div>)}
          </div>
          <div className="grid grid-cols-7 gap-px">
            {padding.map((_, index) => <div key={`padding-${index}`} className="h-24 bg-gray-50" />)}
            {days.map(day => <div key={day} className="h-24 p-2 border-t border-l hover:bg-gray-50">
                <span className="text-sm font-medium text-gray-900">{day}</span>
                {events.map((event, index) => {
              const eventDate = new Date(event.date);
              if (eventDate.getDate() === day && eventDate.getMonth() === currentMonth.getMonth() && eventDate.getFullYear() === currentMonth.getFullYear()) {
                return <div key={index} className={`mt-1 px-2 py-1 text-xs rounded ${event.type === "meeting" ? "bg-blue-100 text-blue-800" : event.type === "deadline" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
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