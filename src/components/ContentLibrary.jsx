import React from "react";

const ContentLibrary = ({ title, guidelines }) => {
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
        <h3 className="text-lg font-semibold mb-4">
          Generate AI commercial video
        </h3>
        <a
          target="_blank"
          style={{ textDecoration: "underline", color: "#2563EB" }}
          href={`https://www.veed.io/ai-text-to-video?videoType=business&topic=${`Brand Title: ${title}. Brand guidelines: ${guidelines}`}&flow=business`}
        >
          Generate Here
        </a>
      </div>
    </section>
  );
};

export default ContentLibrary;
