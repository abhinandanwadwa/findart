import React from "react";

const SwotDashboard = ({ data }) => {
  return (
    <section id="swot-dashboard" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">SWOT Analysis</h2>
        <p className="text-neutral-600">
          Comprehensive analysis of Strengths, Weaknesses, Opportunities, and
          Threats
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Strengths */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              S
            </div>
            <h3 className="text-lg font-semibold text-green-800">Strengths</h3>
          </div>
          <div className="space-y-3">
            {data?.swotAnalysis?.strengths?.map((strength, index) => (
              <div key={index} className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-2 bg-green-200 rounded-full flex-shrink-0"></span>
                <div>
                  <p className="font-medium">{strength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              W
            </div>
            <h3 className="text-lg font-semibold text-red-800">Weaknesses</h3>
          </div>
          <div className="space-y-3">
            {data?.swotAnalysis?.weaknesses?.map((weakness, index) => (
              <div key={index} className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-2 bg-red-200 rounded-full flex-shrink-0"></span>
                <div>
                  <p className="font-medium">{weakness}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              O
            </div>
            <h3 className="text-lg font-semibold text-blue-800">
              Opportunities
            </h3>
          </div>
          <div className="space-y-3">
            {data?.swotAnalysis?.opportunities?.map((opportunity, index) => (
              <div key={index} className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-2 bg-blue-200 rounded-full flex-shrink-0"></span>
                <div>
                  <p className="font-medium">{opportunity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threats */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              T
            </div>
            <h3 className="text-lg font-semibold text-yellow-800">Threats</h3>
          </div>
          <div className="space-y-3">
            {data?.swotAnalysis?.threats?.map((threat, index) => (
              <div key={index} className="flex items-start">
                <span className="w-4 h-4 mt-1 mr-2 bg-yellow-200 rounded-full flex-shrink-0"></span>
                <div>
                  <p className="font-medium">{threat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwotDashboard;
