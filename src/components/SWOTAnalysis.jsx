import React from "react";

const SwotDashboard = () => {
  return (
    <section id="swot-dashboard" className="px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">SWOT Analysis</h2>
        <p className="text-neutral-600">
          Comprehensive analysis of Strengths, Weaknesses, Opportunities, and
          Threats
        </p>
      </div>

      {/* SWOT Grid */}
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
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-green-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Strong Brand Recognition</p>
                <p className="text-sm text-neutral-600">
                  85% market awareness in primary regions
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-green-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">High Customer Satisfaction</p>
                <p className="text-sm text-neutral-600">
                  92% satisfaction rate
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-green-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Advanced Technology</p>
                <p className="text-sm text-neutral-600">
                  Proprietary AI algorithms
                </p>
              </div>
            </div>
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
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-red-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Limited Market Reach</p>
                <p className="text-sm text-neutral-600">
                  Present in only 3 major markets
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-red-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Higher Cost Structure</p>
                <p className="text-sm text-neutral-600">
                  20% above industry average
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-red-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Resource Constraints</p>
                <p className="text-sm text-neutral-600">
                  Limited development team
                </p>
              </div>
            </div>
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
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-blue-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Market Expansion</p>
                <p className="text-sm text-neutral-600">
                  5 new markets identified
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-blue-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">New Technology Integration</p>
                <p className="text-sm text-neutral-600">ML/AI capabilities</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-blue-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Strategic Partnerships</p>
                <p className="text-sm text-neutral-600">
                  3 potential partners identified
                </p>
              </div>
            </div>
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
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-yellow-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Increasing Competition</p>
                <p className="text-sm text-neutral-600">
                  3 new competitors in past year
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-yellow-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Market Volatility</p>
                <p className="text-sm text-neutral-600">
                  15% market fluctuation
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-4 h-4 mt-1 mr-2 bg-yellow-200 rounded-full flex-shrink-0"></span>
              <div>
                <p className="font-medium">Regulatory Changes</p>
                <p className="text-sm text-neutral-600">
                  New compliance requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwotDashboard;
