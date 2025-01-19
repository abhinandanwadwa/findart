export default function AudienceSection({ data }) {
  return (
    <section id="audience" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Audience Insights</h2>
        <p className="text-neutral-600">
          Detailed analysis of audience demographics, preferences, and behavior
          patterns
        </p>
      </div>

      {/* Demographic Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Add audience insight components... */}
        {/* <!-- Age Distribution --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
          <div className="space-y-3">
            {data?.ageDistribution &&
              Object.keys(data?.ageDistribution)?.map((ageKey) => {
                return (
                  <div
                    key={ageKey}
                    className="flex justify-between items-center"
                  >
                    <span>{ageKey}</span>
                    <div className="w-2/3 bg-neutral-100 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${data?.ageDistribution[ageKey]}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">
                      {data?.ageDistribution[ageKey]}%
                    </span>
                  </div>
                );
              })}
          </div>
        </div>

        {/* <!-- Gender Distribution --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
          <div className="flex items-center justify-center h-48">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Male</span>
                <span className="font-semibold">
                  {data?.genderDistribution?.male}%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                <span>Female</span>
                <span className="font-semibold">
                  {data?.genderDistribution?.female}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Location Distribution --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Top Locations</h3>
          <div className="space-y-3">
            {Object?.values(data?.topLocations)?.map((location, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-neutral-50 rounded"
              >
                <span>{location.location}</span>
                <span className="font-semibold">{location.count}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
