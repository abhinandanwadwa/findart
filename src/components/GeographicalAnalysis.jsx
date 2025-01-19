import React from "react";

const GeographicAnalysis = ({ data }) => {
  return (
    <section className="w-full">
      <div className="px-6 py-8 bg-white rounded-lg border border-neutral-200">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Geographic Analysis</h2>
          <p className="text-neutral-600">
            Regional performance metrics and market penetration analysis
          </p>
        </div>

        <div className="bg-white rounded-lg">
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
                {data?.marketOpportunityAnalysis?.map((region, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {region.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {region.marketSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {region.competitionLevel}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        region.growthPotential.toLowerCase().includes("strong")
                          ? "text-green-600"
                          : "text-neutral-600"
                      }`}
                    >
                      {region.growthPotential}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        region.riskLevel === "Low"
                          ? "text-green-600"
                          : region.riskLevel === "Medium"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {region.riskLevel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicAnalysis;
