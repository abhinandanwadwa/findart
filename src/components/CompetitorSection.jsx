export default function CompetitorSection() {
  return (
    <section id="competitors" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Competitor Analysis</h2>
        <p className="text-neutral-600">
          Comprehensive analysis of competitor strategies and performance
          metrics
        </p>
      </div>

      {/* Market Share Comparison */}
      <div className="grid md:grid-cols-1 gap-6 mb-8">
        {/* Add competitor analysis components... */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Market Share Analysis</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Competitor A</span>
              <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <span>45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Competitor B</span>
              <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <span>30%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Competitor C</span>
              <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <span>25%</span>
            </div>
          </div>
        </div>
        {/* <!-- Content Strategy Analysis --> */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* <!-- CTA Analysis --> */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-4">Top Converting CTAs</h3>
            <div className="space-y-3">
              <div className="p-2 bg-blue-50 rounded">
                <div className="font-medium">"Get Started Now"</div>
                <div className="text-sm text-neutral-600">
                  Conversion Rate: 12.5%
                </div>
              </div>
              <div className="p-2 bg-green-50 rounded">
                <div className="font-medium">"Try Free for 30 Days"</div>
                <div className="text-sm text-neutral-600">
                  Conversion Rate: 10.2%
                </div>
              </div>
              <div className="p-2 bg-yellow-50 rounded">
                <div className="font-medium">"Limited Time Offer"</div>
                <div className="text-sm text-neutral-600">
                  Conversion Rate: 8.7%
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Content Hooks --> */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-4">
              Effective Content Hooks
            </h3>
            <div className="space-y-3">
              <div className="p-2 bg-purple-50 rounded">
                <div className="font-medium">Problem-Solution Format</div>
                <div className="text-sm text-neutral-600">
                  Engagement Rate: 85%
                </div>
              </div>
              <div className="p-2 bg-pink-50 rounded">
                <div className="font-medium">Social Proof</div>
                <div className="text-sm text-neutral-600">
                  Engagement Rate: 78%
                </div>
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <div className="font-medium">FOMO Triggers</div>
                <div className="text-sm text-neutral-600">
                  Engagement Rate: 72%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Competitor Strengths & Weaknesses --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">
            Competitor Strengths & Weaknesses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Competitor A</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Strong brand recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Higher pricing</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Competitor B</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Innovative features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Limited market reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
