export default function PerformanceMetrics() {
  return (
    <section id="competitors" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Performance Metrics</h2>
        <p className="text-neutral-600">
          CompreKey performance indicators and business metrics analysis
        </p>
      </div>

      {/* Market Share Comparison */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {/* Add competitor analysis components... */}
        {/* <!-- Brand Awareness --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Brand Awareness</h3>
            <span className="text-green-500">↑ 12%</span>
          </div>
          <div className="text-3xl font-bold mb-2">78%</div>
          <p className="text-sm text-neutral-600">Month-over-month growth</p>
        </div>

        {/* <!-- Customer Acquisition Cost --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">CAC</h3>
            <span className="text-red-500">↓ 8%</span>
          </div>
          <div className="text-3xl font-bold mb-2">$52.40</div>
          <p className="text-sm text-neutral-600">Per customer average</p>
        </div>

        {/* <!-- Churn Rate --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Churn Rate</h3>
            <span className="text-green-500">↓ 5%</span>
          </div>
          <div className="text-3xl font-bold mb-2">4.2%</div>
          <p className="text-sm text-neutral-600">Monthly average</p>
        </div>

        {/* <!-- ROI --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">ROI</h3>
            <span className="text-green-500">↑ 15%</span>
          </div>
          <div className="text-3xl font-bold mb-2">285%</div>
          <p className="text-sm text-neutral-600">Quarter-to-date</p>
        </div>

        {/* <!-- Detailed Metrics --> */}
      </div>
      <div className="grid md:grid-cols-1 gap-6 mb-8">
        {/* <!-- Ad Performance --> */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Ad Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-neutral-50 rounded">
              <span>CPM</span>
              <div className="flex items-center">
                <span className="font-semibold">$5.40</span>
                <span className="text-green-500 text-sm ml-2">↓ 12%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-neutral-50 rounded">
              <span>Click-through Rate</span>
              <div className="flex items-center">
                <span className="font-semibold">3.8%</span>
                <span className="text-green-500 text-sm ml-2">↑ 8%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-neutral-50 rounded">
              <span>Conversion Rate</span>
              <div className="flex items-center">
                <span className="font-semibold">2.5%</span>
                <span className="text-green-500 text-sm ml-2">↑ 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
