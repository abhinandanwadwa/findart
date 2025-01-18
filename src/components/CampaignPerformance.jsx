export default function CampaignPerformance() {
  return (
    <section id="audience" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Audience Insights</h2>
        <p className="text-neutral-600">
          Detailed analysis of audience demographics, preferences, and behavior
          patterns
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-8">
        {/* <!-- Campaign Performance --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200 mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Campaign Performance Overview
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Impressions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    CTR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Conversions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Summer Sale</td>
                  <td className="px-6 py-4 whitespace-nowrap">125,430</td>
                  <td className="px-6 py-4 whitespace-nowrap">4,521</td>
                  <td className="px-6 py-4 whitespace-nowrap">3.6%</td>
                  <td className="px-6 py-4 whitespace-nowrap">285</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Brand Awareness
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">98,752</td>
                  <td className="px-6 py-4 whitespace-nowrap">3,254</td>
                  <td className="px-6 py-4 whitespace-nowrap">3.3%</td>
                  <td className="px-6 py-4 whitespace-nowrap">195</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Product Launch
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">75,841</td>
                  <td className="px-6 py-4 whitespace-nowrap">2,845</td>
                  <td className="px-6 py-4 whitespace-nowrap">3.8%</td>
                  <td className="px-6 py-4 whitespace-nowrap">168</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
