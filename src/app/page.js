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

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

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
        <ResearchSection />
        <CompetitorSection />
        <AudienceSection />
        <PerformanceMetrics />
        {/* <CampaignPerformance /> */}
        <ContentLibrary />
        <GeographicAnalysis />
        <SwotDashboard />
      </main>
    </div>
  );
}
