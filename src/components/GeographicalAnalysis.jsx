import React from "react";

const GeographicAnalysis = () => {
  return (
    <section id="geographic-analysis" className="px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Geographic Analysis</h2>
        <p className="text-neutral-600">
          Regional performance metrics and market penetration analysis
        </p>
      </div>

      {/* Market Opportunity Analysis */}
      <div className="bg-white p-6 rounded-lg border border-neutral-200">
        <h3 className="text-lg font-semibold mb-4">
          Market Opportunity Analysis
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Market Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Competition Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Growth Potential
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Risk Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">North America</td>
                <td className="px-6 py-4 whitespace-nowrap">$5.2B</td>
                <td className="px-6 py-4 whitespace-nowrap">High</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  Strong
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-yellow-600">
                  Medium
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Europe</td>
                <td className="px-6 py-4 whitespace-nowrap">$4.8B</td>
                <td className="px-6 py-4 whitespace-nowrap">Medium</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  Very Strong
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  Low
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Asia Pacific</td>
                <td className="px-6 py-4 whitespace-nowrap">$3.5B</td>
                <td className="px-6 py-4 whitespace-nowrap">Low</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  Strong
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-red-600">
                  High
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GeographicAnalysis;
