"use client";

import React, { useEffect } from "react";
import WordCloud from "wordcloud";

const WordCloudComp = ({ data }) => {
  useEffect(() => {
    const canvas = document.getElementById("word-cloud");
    const words = data?.topKeywords?.map((keyword) => [
      keyword.keyword,
      keyword.count,
    ]);
    console.log(words);
    WordCloud(canvas, { list: words });
  }, []);
  return (
    <section id="swot-dashboard" className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">WordCloud</h2>
        <p className="text-neutral-600">
          Generation of word cloud based on the frequency of keywords
        </p>
      </div>

      <canvas id="word-cloud"></canvas>
    </section>
  );
};

export default WordCloudComp;
