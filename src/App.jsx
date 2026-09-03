import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import IntegrationGraph from './components/IntegrationGraph';
import TeamSection from './components/TeamSection';
import NetworkFlowSection from './components/NetworkFlowSection';
import HardwareGuideSection from './components/HardwareGuideSection';
import TimelineSection from './components/TimelineSection';
import TeamRulesSection from './components/TeamRulesSection';
import Footer from './components/Footer';
import LoginGate from './components/LoginGate';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session
    try {
      const savedUser = localStorage.getItem('cyf_authenticated_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error('Error reading auth session', err);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  const handleLoginSuccess = (member) => {
    setCurrentUser(member);
  };

  const handleLogout = () => {
    localStorage.removeItem('cyf_authenticated_user');
    setCurrentUser(null);
  };

  const handleOpenSimulation = () => {
    const simEl = document.getElementById('simulation');
    if (simEl) {
      simEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#060911] flex items-center justify-center text-cyan-400 font-mono text-xs">
        INITIALIZING CYBERFORGE SECURITY CORE...
      </div>
    );
  }

  // If not authenticated, lock the portal and show the Troll Login Gate
  if (!currentUser) {
    return <LoginGate onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#060911] text-gray-100 selection:bg-cyan-500 selection:text-black font-sans relative overflow-x-hidden animate-fadeIn">
      {/* Sticky Navigation with User Profile & Logout */}
      <Navbar
        onOpenSim={handleOpenSimulation}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Sections */}
      <main>
        {/* 1. 3D Interactive Simulation & Hero */}
        <Hero3D />

        {/* 2. Team Roles & Detailed Roadmaps with PDF Export */}
        <TeamSection />

        {/* 3. System Integration & Protocols Handover */}
        <IntegrationGraph />

        {/* 4. Complete Engineering Pipelines for ALL 4 Sub-Teams */}
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
