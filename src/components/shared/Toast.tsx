import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}
export function Toast({
  message,
  type,
  onClose
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    info: <AlertCircle className="h-5 w-5 text-blue-500" />
  };
  const bgColors = {
    success: "bg-green-50 dark:bg-green-900/30",
    error: "bg-red-50 dark:bg-red-900/30",
    info: "bg-blue-50 dark:bg-blue-900/30"
  };
  return <div className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg ${bgColors[type]}`}>
      <div className="flex items-center space-x-3">
        {icons[type]}
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {message}
        </p>
      </div>
    </div>;
}