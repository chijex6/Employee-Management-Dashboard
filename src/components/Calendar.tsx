import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const events = [
    { date: "2025-02-10", title: "Team Meeting", type: "meeting" },
    { date: "2025-02-15", title: "Project Deadline", type: "deadline" },
    { date: "2025-02-20", title: "Review Session", type: "review" },
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Calendar
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage events and schedules
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Event
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <h2 className="mx-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="py-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
            {padding.map((_, index) => (
              <div
                key={`padding-${index}`}
                className="bg-gray-100 dark:bg-gray-800"
              />
            ))}
            {days.map((day) => (
              <div
                key={day}
                className="h-24 p-2 bg-gray-50 dark:bg-gray-900 border-t border-l border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {day}
                </span>
                {events.map((event, index) => {
                  const eventDate = new Date(event.date);
                  if (
                    eventDate.getDate() === day &&
                    eventDate.getMonth() === currentMonth.getMonth() &&
                    eventDate.getFullYear() === currentMonth.getFullYear()
                  ) {
                    return (
                      <div
                        key={index}
                        className={`mt-1 px-2 py-1 text-xs rounded ${
                          event.type === "meeting"
                            ? "bg-blue-500 text-white"
                            : event.type === "deadline"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {event.title}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
