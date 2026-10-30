import { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoDemo } from './components/VideoDemo';
import { LiveSimulator } from './components/LiveSimulator';
import { SpeedBenchmark } from './components/SpeedBenchmark';
import { BrowserExtensionShowcase } from './components/BrowserExtensionShowcase';
import { BentoFeatures } from './components/BentoFeatures';
import { InstallationSteps } from './components/InstallationSteps';
import { DownloadHub } from './components/DownloadHub';
import { FaqSection } from './components/FaqSection';
import { BottomBanner } from './components/BottomBanner';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en'); // Default to English
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleTriggerDownload = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-body selection:bg-teal-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onTriggerDownload={handleTriggerDownload}
      />

      <main>
        {/* Hero Section with Interactive Mockup */}
        <Hero
          currentLang={currentLang}
          onTriggerDownload={handleTriggerDownload}
        />

        {/* Video Demo Section */}
        <VideoDemo currentLang={currentLang} />

        {/* Live 16-Thread Segmentation Engine Simulator */}
        <LiveSimulator currentLang={currentLang} />

        {/* Real-World Speed Benchmark Calculator */}
        <SpeedBenchmark currentLang={currentLang} />

        {/* Chrome & Edge Video Sniffer Browser Extension Interactive Demo */}
        <BrowserExtensionShowcase currentLang={currentLang} />

        {/* Asymmetric Core Architecture Bento Grid */}
        <BentoFeatures currentLang={currentLang} />

        {/* 3-Step Interactive Installation Guide */}
        <InstallationSteps
          currentLang={currentLang}
          onTriggerDownload={handleTriggerDownload}
        />

        {/* Official Releases & Checksum Hub */}
        <DownloadHub
          currentLang={currentLang}
          onTriggerDownload={handleTriggerDownload}
        />

        {/* Searchable / Categorized FAQ Accordions */}
        <FaqSection currentLang={currentLang} />

        {/* High-Intent Conversion Banner */}
        <BottomBanner
          currentLang={currentLang}
          onTriggerDownload={handleTriggerDownload}
        />
      </main>

      {/* Quiet Footer */}
      <Footer currentLang={currentLang} />

      {/* Direct Download Trigger Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
