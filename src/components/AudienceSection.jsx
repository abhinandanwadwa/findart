export default function AudienceSection() {
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
            <div className="flex justify-between items-center">
              <span>18-24</span>
              <div className="w-2/3 bg-neutral-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
              <span className="text-sm">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>25-34</span>
              <div className="w-2/3 bg-neutral-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <span className="text-sm">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>35-44</span>
              <div className="w-2/3 bg-neutral-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <span className="text-sm">20%</span>
            </div>
          </div>
        </div>

        {/* <!-- Gender Distribution --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
          <div className="flex items-center justify-center h-48">
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Male</span>
                <span className="font-semibold">58%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                <span>Female</span>
                <span className="font-semibold">42%</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Location Distribution --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Top Locations</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
              <span>United States</span>
              <span className="font-semibold">35%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
              <span>United Kingdom</span>
              <span className="font-semibold">25%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
              <span>Canada</span>
              <span className="font-semibold">20%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-neutral-50 rounded">
              <span>Australia</span>
              <span className="font-semibold">15%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
