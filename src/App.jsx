import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import IntegrationGraph from './components/IntegrationGraph';
import TeamSection from './components/TeamSection';
import NetworkFlowSection from './components/NetworkFlowSection';
import HardwareGuideSection from './components/HardwareGuideSection';
import TimelineSection from './components/TimelineSection';
import TeamRulesSection from './components/TeamRulesSection';
import Footer from './components/Footer';

export default function App() {
  const handleOpenSimulation = () => {
    const simEl = document.getElementById('simulation');
    if (simEl) {
      simEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060911] text-gray-100 selection:bg-cyan-500 selection:text-black font-sans relative overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar onOpenSim={handleOpenSimulation} />

      {/* Main Sections */}
      <main>
        {/* 1. 3D Interactive Simulation & Hero */}
        <Hero3D />

        {/* 2. Team Roles & Detailed Roadmaps with PDF Export */}
        <TeamSection />

        {/* 3. System Integration & Protocols Handover */}
        <IntegrationGraph />

        {/* 4. Network Team 4-Layer Architecture */}
        <NetworkFlowSection />

        {/* 5. Used Hardware Purchasing Guide & Real Egypt Prices */}
        <HardwareGuideSection />

        {/* 6. 5-Month Project Timeline & Individual Learning Plans */}
        <TimelineSection />

        {/* 7. Team Golden Rules & Git Repository Charter */}
        <TeamRulesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
