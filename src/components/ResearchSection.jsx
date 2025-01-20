"use client";

import { useState } from "react";
import ResearchLoader from "./ResearchLoader";

export default function ResearchSection({
  data,
  setData,
  title,
  setTitle,
  guidelines,
  setGuidelines,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // Function to parse text containing JSON
  function parseJSONFromText(text) {
    try {
      // Remove outer quotes if they exist
      let cleanText = text.trim();
      if (cleanText.startsWith('"') && cleanText.endsWith('"')) {
        cleanText = cleanText.slice(1, -1);
      }

      // Remove markdown code block indicators if they exist
      cleanText = cleanText.replace(/```json\n?/g, "").replace(/```\n?/g, "");

      // Parse the cleaned text into JSON
      const jsonData = JSON.parse(cleanText);
      return jsonData;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }

  const startAnalysis = async () => {
    setIsLoading(true);
    setData(null);
    try {
      const response = await fetch(
        "https://langflow.incognito.abhinandan.me/api/v1/run/3b87e5ad-9f49-4e74-8032-a6c12449728d?stream=false",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer sk-lrAeJ7XDIHzBLV_kNNGMvJc6OHpmOFLfhpsZfvXh2qQ",
            "Content-Type": "application/json",
            "x-api-key": "sk-lrAeJ7XDIHzBLV_kNNGMvJc6OHpmOFLfhpsZfvXh2qQ",
          },
          body: JSON.stringify({
            input_value: `Brand Title: ${title}. Brand Guidelines: ${guidelines}`,
            output_type: "chat",
            input_type: "chat",
            tweaks: {
              "PerplexityModel-l6dBg": {},
              "ChatInput-ETneG": {},
              "Prompt-rzc9f": {},
              "GoogleGenerativeAIModel-Lr0fw": {},
              "ChatOutput-10Ow0": {},
              "Prompt-TqNMt": {},
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      const content = json.outputs[0].outputs[0].artifacts.message;
      const jsonObject = parseJSONFromText(content);
      if (jsonObject) {
        setData(jsonObject);
        console.log("Successfully parsed JSON:", jsonObject);
      } else {
        console.log("Failed to parse JSON");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <ResearchLoader />;
  }

  return (
    <section id="research" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Automated Research and Trigger Finder</h2>
        <p className="text-neutral-600">
          AI analysis and insights from multiple data sources for best market analysis
        </p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Brand Name
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Brands Name/Core Filed/ Research Topic"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Brand Category and Keywords  
            </label>
            <textarea
              value={guidelines}
              onChange={(e) => setGuidelines(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Enter brand guidelines"
            />
          </div>
        </div>
        <button
          onClick={startAnalysis}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Analysis
        </button>
      </div>

      {/* Quick Stats */}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-2">
              Data Sources Analyzed
            </h3>
            <div className="text-3xl font-bold text-blue-600">
              {data?.totalReferences}
            </div>
            <p className="text-neutral-600">
              Google, YouTube, Reddit, Quora, App Reviews
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-2">
              Key Insights Generated
            </h3>
            <div className="text-3xl font-bold text-blue-600">
              {data?.keyInsightsGenerated}
            </div>
            <p className="text-neutral-600">Last updated 5 mins ago</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-2">
              Key Insights Generated
            </h3>
            <div className="text-3xl font-bold text-blue-600">127</div>
            <p className="text-neutral-600">Actionable recommendations</p>
          </div>
        </div>
      )}

      {/* <!-- Sentiment Analysis --> */}
      {data && (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-semibold mb-4">Overall Sentiment</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Positive</span>
              <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${data?.sentiment?.positive}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">
                {data?.sentiment?.positive}%
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Neutral</span>
              <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${data?.sentiment?.neutral}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">
                {data?.sentiment?.neutral}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Negative</span>
              <div className="w-2/3 bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{ width: `${data?.sentiment?.negative}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">
                {data?.sentiment?.negative}%
              </span>
            </div>
          </div>

          {/* <!-- Word Cloud Preview --> */}
          {data && (
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <h3 className="text-lg font-semibold mb-4">Common Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {data?.topKeywords &&
                  data?.topKeywords?.map((keyword) => {
                    return (
                      <span
                        key={keyword.keyword}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {keyword.keyword}
                      </span>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* <!-- Recent Insights --> */}
      {data && (
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-semibold mb-4">Recent Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-medium mb-2">User Pain Points</h4>
              <ul className="list-disc list-inside text-neutral-600">
                {data?.userPainPoints &&
                  data?.userPainPoints?.map((pain) => {
                    return <li key={pain}>{pain}</li>;
                  })}
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-medium mb-2">Suggested Solutions</h4>
              <ul className="list-disc list-inside text-neutral-600">
                {data?.suggestedSolutions &&
                  data?.suggestedSolutions?.map((solution) => {
                    return <li key={solution}>{solution}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
