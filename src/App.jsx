import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BrandNavbar from './components/BrandNavbar';
import BrandFooter from './components/BrandFooter';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/HistoryPage';
import CareersPage from './pages/CareersPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CorridorsPage from './pages/CorridorsPage';
import CalculatorPage from './pages/CalculatorPage';
import InteractiveStudioPage from './pages/InteractiveStudioPage';
import ContactPage from './pages/ContactPage';
import PropertyModal from './components/PropertyModal';
import ViewingModal from './components/ViewingModal';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Modals
  const [activePropertyModal, setActivePropertyModal] = useState(null);
  const [viewingModalOpen, setViewingModalOpen] = useState(false);
  const [viewingTargetProperty, setViewingTargetProperty] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenViewingModal = (property = null) => {
    setViewingTargetProperty(property);
    setViewingModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#FDB813] selection:text-slate-950 flex flex-col justify-between">
        
        {/* Persistent Multi-Page Brand Navbar */}
        <BrandNavbar onOpenVisitModal={handleOpenViewingModal} />

        {/* Dynamic Multi-Page Router Matching Old Website Exactly */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenVisitModal={handleOpenViewingModal}
                  onSelectProperty={(prop) => setActivePropertyModal(prop)}
                  filterLocation={filterLocation}
                  setFilterLocation={setFilterLocation}
                  filterCategory={filterCategory}
                  setFilterCategory={setFilterCategory}
                />
              }
            />

            <Route
              path="/about"
              element={<AboutPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/history"
              element={<HistoryPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/projects"
              element={<ProjectsPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/ongoing-projects"
              element={<OngoingProjectsPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/completed-projects"
              element={<CompletedProjectsPage />}
            />

            <Route
              path="/projects/:id"
              element={<ProjectDetailPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/corridors"
              element={<CorridorsPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/interactive-studio"
              element={<InteractiveStudioPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/calculator"
              element={<CalculatorPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/careers"
              element={<CareersPage />}
            />

            <Route
              path="/investor-relations"
              element={<InvestorRelationsPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            <Route
              path="/sustainability"
              element={<SustainabilityPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage onOpenVisitModal={handleOpenViewingModal} />}
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Corporate Brand Footer */}
        <BrandFooter onOpenVisitModal={handleOpenViewingModal} />

        {/* CAD Layout Modal */}
        {activePropertyModal && (
          <PropertyModal
            property={activePropertyModal}
            currency="INR"
            onClose={() => setActivePropertyModal(null)}
            onOpenViewingModal={handleOpenViewingModal}
          />
        )}

        {/* Site Visit Booking Modal */}
        {viewingModalOpen && (
          <ViewingModal
            isOpen={viewingModalOpen}
            targetProperty={viewingTargetProperty}
            onClose={() => {
              setViewingModalOpen(false);
              setViewingTargetProperty(null);
            }}
          />
        )}

        {/* Floating Quick Action Buttons */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 sm:gap-3 items-end">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#FDB813] hover:text-slate-950 transition-all shadow-lg hover:shadow-xl"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          <a
            href="https://wa.me/917075528334?text=Hello%20Abhista%20Infra,%20I%20would%20like%20to%20know%20more%20about%20your%20ventures."
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-auto p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
            title="Direct WhatsApp"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}
