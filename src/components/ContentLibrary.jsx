import React from "react";

const ContentLibrary = () => {
  return (
    <section id="content-library" className="px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Content Library</h2>
        <p className="text-neutral-600">
          Collection of high-performing content and reference materials
        </p>
      </div>

      {/* Content Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          All Content
        </button>
        <button className="px-4 py-2 bg-white text-neutral-700 border border-neutral-200 rounded-lg">
          Videos
        </button>
        <button className="px-4 py-2 bg-white text-neutral-700 border border-neutral-200 rounded-lg">
          Presentations
        </button>
        <button className="px-4 py-2 bg-white text-neutral-700 border border-neutral-200 rounded-lg">
          Ad Creatives
        </button>
      </div>

      {/* Video Content Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Top Performing Video Ads</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Product Launch Campaign",
              duration: "0:30",
              views: "125K",
              ctr: "4.2%",
              conv: "2.8%",
            },
            {
              title: "Brand Story",
              duration: "1:15",
              views: "98K",
              ctr: "3.8%",
              conv: "2.5%",
            },
            {
              title: "Customer Testimonial",
              duration: "0:45",
              views: "75K",
              ctr: "4.5%",
              conv: "3.2%",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
            >
              <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                <span className="text-neutral-500">Video Preview</span>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-2">{video.title}</h4>
                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                  <span>Duration: {video.duration}</span>
                  <span>Views: {video.views}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">CTR: {video.ctr}</span>
                  <span className="text-blue-600">Conv: {video.conv}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Presentation Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Marketing Presentations</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Q2 Strategy Deck", updated: "2 days ago" },
            { title: "Campaign Results", updated: "5 days ago" },
          ].map((presentation, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-neutral-200"
            >
              <div className="bg-neutral-100 rounded-lg p-8 mb-3 flex items-center justify-center">
                <span className="text-4xl text-neutral-400">PPT</span>
              </div>
              <h4 className="font-medium text-sm mb-1">{presentation.title}</h4>
              <p className="text-xs text-neutral-600">{presentation.updated}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Creative Gallery */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ad Creative Gallery</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: "Summer Campaign",
              format: "Story Ad",
              ctr: "3.8%",
              impressions: "45K",
            },
            {
              title: "Holiday Special",
              format: "Carousel",
              ctr: "4.2%",
              impressions: "62K",
            },
          ].map((creative, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-neutral-200"
            >
              <div className="bg-neutral-100 rounded-lg p-8 mb-3 flex items-center justify-center">
                <span className="text-neutral-500">Image Preview</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-sm">{creative.title}</h4>
                <p className="text-xs text-neutral-600">
                  Format: {creative.format}
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-green-600">CTR: {creative.ctr}</span>
                  <span>Impressions: {creative.impressions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
