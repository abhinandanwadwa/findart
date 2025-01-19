import React from "react";
import { BarChart3, LineChart, PieChart, Search } from "lucide-react";

const ResearchLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      <div className="relative">
        <div className="absolute inset-0 animate-ping bg-blue-100 rounded-full opacity-25" />
        <Search className="w-12 h-12 text-blue-600 animate-pulse relative z-10" />
      </div>

      <div className="flex items-center space-x-4">
        <BarChart3 className="w-8 h-8 text-blue-600 animate-bounce" />
        <LineChart className="w-8 h-8 text-green-600 animate-bounce delay-100" />
        <PieChart className="w-8 h-8 text-purple-600 animate-bounce delay-200" />
      </div>

      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-100" />
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200" />
      </div>

      <p className="text-lg font-medium text-neutral-600">Analyzing data...</p>
    </div>
  );
};

export default ResearchLoader;
