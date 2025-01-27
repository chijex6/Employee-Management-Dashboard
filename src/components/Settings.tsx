import React from "react";
import { Bell, Moon, User, Shield, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
export function Settings() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const sections = [{
    title: "Appearance",
    icon: Moon,
    settings: [{
      name: "Dark Mode",
      description: "Use dark theme across the application",
      enabled: theme === "dark",
      onChange: toggleTheme
    }]
  }, {
    title: "Notifications",
    icon: Bell,
    settings: [{
      name: "Email Notifications",
      description: "Receive email notifications for important updates",
      enabled: true
    }, {
      name: "Push Notifications",
      description: "Get push notifications on your desktop",
      enabled: false
    }]
  }, {
    title: "Account",
    icon: User,
    settings: [{
      name: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      enabled: true
    }]
  }];
  return <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage your account preferences
        </p>
      </div>
      <div className="space-y-6">
        {sections.map(section => <div key={section.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <section.icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <h2 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {section.settings.map(setting => <div key={setting.name} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {setting.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {setting.description}
                    </p>
                  </div>
                  <button onClick={setting.onChange} className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${setting.enabled ? "bg-red-600" : "bg-gray-200 dark:bg-gray-700"}`}>
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${setting.enabled ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
}