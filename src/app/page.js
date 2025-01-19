"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import MobileMenu from "@/components/MobileMenu";
import ResearchSection from "@/components/ResearchSection";
import CompetitorSection from "@/components/CompetitorSection";
import AudienceSection from "@/components/AudienceSection";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import CampaignPerformance from "@/components/CampaignPerformance";
import ContentLibrary from "@/components/ContentLibrary";
import GeographicAnalysis from "@/components/GeographicalAnalysis";
import SwotDashboard from "@/components/SWOTAnalysis";
import WordCloudComp from "@/components/WordCloud";

const data = {
  totalReferences: 10,
  keyInsightsGenerated: 100,
  sentiment: {
    positive: 50,
    negative: 30,
    neutral: 20,
  },
  topKeywords: [
    {
      keyword: "Art",
      count: 10,
    },
    {
      keyword: "Painting",
      count: 5,
    },
    {
      keyword: "Sculpture",
      count: 3,
    },
  ],
  userPainPoints: ["Not able to...", "Very bad UX"],
  suggestedSolutions: ["Improve UX", "Add more filters"],
  topConvertingCTAs: [
    {
      cta: "Buy Now",
      conversionRate: 10,
    },
    {
      cta: "Add to Cart",
      conversionRate: 5,
    },
  ],
  effectiveContentHooks: [
    {
      hook: "Free Shipping",
      conversionRate: 10,
    },
    {
      hook: "Limited Edition",
      conversionRate: 5,
    },
  ],
  compStrengthsAndWeaknesses: [
    {
      name: "Comp A",
      strengths: ["Good UX", "Fast Delivery"],
      weaknesses: ["Bad UI", "Poor Customer Support"],
    },
    {
      name: "Comp B",
      strengths: ["Good UI", "Good Customer Support"],
      weaknesses: ["Slow Delivery", "Bad UX"],
    },
  ],
  ageDistribution: {
    "18-24": 35,
    "25-34": 25,
    "35-44": 20,
  },
  genderDistribution: {
    male: 60,
    female: 40,
  },
  topLocations: {
    location1: {
      location: "New York",
      count: 10,
    },
    location2: {
      location: "California",
      count: 5,
    },
  },
  averageBrandAwareness: 50,
  averageCac: 52.4,
  averageChurnRate: 10,
  averageROI: 285,
  averageCpm: 5.4,
  clickThroughRate: 10,
  marketOpportunityAnalysis: [
    {
      region: "North America",
      marketSize: "$5.2B",
      competitionLevel: "High",
      growthPotential: "Strong",
      riskLevel: "Medium",
    },
  ],
  swotAnalysis: {
    strengths: ["Good UX", "Fast Delivery"],
    weaknesses: ["Bad UI", "Poor Customer Support"],
    opportunities: ["Expand to new markets", "Add more products"],
    threats: ["Competition", "Economic Recession"],
  },
};

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [guidelines, setGuidelines] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div className="flex min-h-screen">
      <Navigation />

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 right-4 z-50 bg-neutral-800 p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        {!isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-16 6h16"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
      </button>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <ResearchSection
          data={data}
          setData={setData}
          title={title}
          setTitle={setTitle}
          guidelines={guidelines}
          setGuidelines={setGuidelines}
        />
        {data && (
          <div>
            <CompetitorSection data={data} />
            <AudienceSection data={data} />
            <PerformanceMetrics data={data} />
            <SwotDashboard data={data} />
            <WordCloudComp data={data} />
            {/* <CampaignPerformance /> */}
            <ContentLibrary />
            <GeographicAnalysis data={data} />
          </div>
        )}
      </main>
    </div>
  );
}
