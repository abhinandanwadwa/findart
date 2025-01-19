export default function CompetitorSection({ data }) {
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
        {/* <!-- Content Strategy Analysis --> */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* <!-- CTA Analysis --> */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-4">Top Converting CTAs</h3>
            <div className="space-y-3">
              {data?.topConvertingCTAs &&
                data?.topConvertingCTAs?.map((cta) => {
                  return (
                    <div key={cta.cta} className="p-2 bg-blue-50 rounded">
                      <div className="font-medium">"{cta.cta}"</div>
                      <div className="text-sm text-neutral-600">
                        Conversion Rate: {cta.conversionRate}%
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* <!-- Content Hooks --> */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-4">
              Effective Content Hooks
            </h3>
            <div className="space-y-3">
              {data?.effectiveContentHooks &&
                data?.effectiveContentHooks?.map((hook, index) => {
                  return (
                    <div key={index} className="p-2 bg-purple-50 rounded">
                      <div className="font-medium">{hook.hook}</div>
                      <div className="text-sm text-neutral-600">
                        Engagement Rate: {hook.conversionRate}%
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* <!-- Competitor Strengths & Weaknesses --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">
            Competitor Strengths & Weaknesses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data?.compStrengthsAndWeaknesses &&
              data?.compStrengthsAndWeaknesses?.map((saw, index) => {
                return (
                  <div key={index}>
                    <h4 className="font-medium mb-3">{saw.name}</h4>
                    <div className="space-y-2">
                      {saw.strengths.map((strength, strengthIndex) => {
                        return (
                          <div
                            key={strengthIndex}
                            className="flex items-center space-x-2"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>{strength}</span> {/* Use dynamic strength */}
                          </div>
                        );
                      })}

                      {saw.weaknesses.map((weakness, weaknessIndex) => {
                        return (
                          <div
                            key={weaknessIndex}
                            className="flex items-center space-x-2"
                          >
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span>{weakness}</span> {/* Use dynamic weakness */}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
