import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import ResumeModal from './components/ResumeModal';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded main pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

// Lazy-loaded project deep-dive pages
const ELMSProject = lazy(() => import('./projects/ELMSProject'));
const RideShareProject = lazy(() => import('./projects/RideShareProject'));
const EmergencyRouteProject = lazy(() => import('./projects/EmergencyRouteProject'));
const BankingProject = lazy(() => import('./projects/BankingProject'));

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
        {/* Scroll To Top on Route Change */}
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Area with Suspense Fallback */}
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="/about" element={<About onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />

              {/* Direct URLs for each project */}
              <Route path="/projects/elms" element={<ELMSProject />} />
              <Route path="/projects/rideshare-connect" element={<RideShareProject />} />
              <Route path="/projects/ai-emergency-route-planning" element={<EmergencyRouteProject />} />
              <Route path="/projects/banking-credit-risk" element={<BankingProject />} />
              
              {/* Fallback parameter dispatcher */}
              <Route path="/projects/:id" element={<ProjectDetails />} />

              {/* Profile & Credentials */}
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Back to Top Floating Button */}
        <BackToTopButton />

        {/* Resume Lightbox Preview Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </Router>
  );
}
