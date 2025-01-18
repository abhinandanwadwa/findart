export default function ResearchSection() {
  return (
    <section id="research" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Research Overview</h2>
        <p className="text-neutral-600">
          Automated analysis and insights from multiple data sources
        </p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Research Topic
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your research topic"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Brand Guidelines
            </label>
            <textarea
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Enter brand guidelines"
            />
          </div>
        </div>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Start Analysis
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-2">Data Sources Analyzed</h3>
          <div className="text-3xl font-bold text-blue-600">5</div>
          <p className="text-neutral-600">
            Google, YouTube, Reddit, Quora, App Reviews
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-2">Total Reviews Analyzed</h3>
          <div className="text-3xl font-bold text-blue-600">10,547</div>
          <p className="text-neutral-600">Last updated 5 mins ago</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-2">Key Insights Generated</h3>
          <div className="text-3xl font-bold text-blue-600">127</div>
          <p className="text-neutral-600">Actionable recommendations</p>
        </div>
      </div>

      {/* <!-- Sentiment Analysis --> */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Overall Sentiment</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">Positive</span>
            <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <span className="text-sm font-medium">65%</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">Neutral</span>
            <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="text-sm font-medium">20%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Negative</span>
            <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
            <span className="text-sm font-medium">15%</span>
          </div>
        </div>

        {/* <!-- Word Cloud Preview --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Common Keywords</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              User Experience
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Performance
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Innovation
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Design
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
              Quality
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
              Service
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              Support
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Features
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Recent Insights --> */}
      <div className="bg-white p-6 rounded-lg border border-neutral-200">
        <h3 className="text-lg font-semibold mb-4">Recent Insights</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium mb-2">User Pain Points</h4>
            <ul className="list-disc list-inside text-neutral-600">
              <li>Complex onboarding process</li>
              <li>Limited customization options</li>
              <li>Slow customer support response</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <h4 className="font-medium mb-2">Suggested Solutions</h4>
            <ul className="list-disc list-inside text-neutral-600">
              <li>Streamline user registration flow</li>
              <li>Add more personalization features</li>
              <li>Implement 24/7 chat support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
