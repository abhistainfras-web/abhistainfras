import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Calendar, Sparkles, Building2, Trees, ShieldCheck, Calculator, Users, Clock, Menu, X, TrendingUp, MapPin } from 'lucide-react';

export default function BrandNavbar({ onOpenVisitModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItemClass = (isActive) =>
    `relative py-2 px-3 text-[13px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-1 ${
      isActive
        ? 'text-[#b37a00] after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2.5px] after:bg-[#FDB813] after:rounded-full'
        : 'text-slate-700 hover:text-slate-950'
    }`;

  const handleMouseEnter = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-md border-b border-slate-200 py-1.5 sm:py-2'
          : 'bg-white border-b border-slate-200/90 py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* 1. Official Brand Logo */}
          <Link to="/" className="flex items-center py-1 shrink-0 group">
            <img
              src="/assets/abhista/abhista-logo.png"
              alt="Abhista Infras"
              className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* 2. Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            
            {/* Home */}
            <NavLink to="/" end className={({ isActive }) => navItemClass(isActive)}>
              Home
            </NavLink>

            {/* Projects Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('projects')}
                className={`text-[13px] font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/projects') || location.pathname.includes('ongoing') || location.pathname.includes('completed')
                    ? 'text-[#b37a00] font-extrabold'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-[#FDB813]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'projects' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 px-2 z-50 animate-fade-in">
                  <NavLink
                    to="/projects"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b37a00] flex items-center justify-center shrink-0 group-hover:bg-[#FDB813] group-hover:text-slate-950 transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#b37a00]">All 11 Ventures</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Complete land & farmland portfolio</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/ongoing-projects"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Trees className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Ongoing Projects</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Arrjava, Orchid Bloom, Oak Tree, Mirai</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/completed-projects"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-slate-900">Completed Benchmarks</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Delivered landmarks in Hyd & Bengaluru</p>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Growth Corridors */}
            <NavLink to="/corridors" className={({ isActive }) => navItemClass(isActive)}>
              Corridors
            </NavLink>

            {/* About Us Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('about')}
                className={`text-[13px] font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 transition-colors flex items-center gap-1 ${
                  location.pathname === '/about' || location.pathname === '/history' || location.pathname === '/sustainability'
                    ? 'text-[#b37a00] font-extrabold'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#FDB813]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 px-2 z-50 animate-fade-in">
                  <NavLink
                    to="/about"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b37a00] flex items-center justify-center shrink-0 group-hover:bg-[#FDB813] group-hover:text-slate-950 transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#b37a00]">About Abhista</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Heritage, Leadership & Core Values</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/history"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-slate-900">Our History & Milestones</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">From Anuradha 2006 to 2026</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/sustainability"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Trees className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">Sustainability</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Organic farming & groundwater recharge</p>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('company')}
                className={`text-[13px] font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 transition-colors flex items-center gap-1 ${
                  location.pathname === '/investor-relations' || location.pathname === '/careers' || location.pathname === '/calculator'
                    ? 'text-[#b37a00] font-extrabold'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-[#FDB813]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full right-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 px-2 z-50 animate-fade-in">
                  <NavLink
                    to="/investor-relations"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b37a00] flex items-center justify-center shrink-0 group-hover:bg-[#FDB813] group-hover:text-slate-950 transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#b37a00]">Investor Relations</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">3-Tier legal audit & corporate governance</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/calculator"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">ROI Calculator</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Simulate land compounding & Sec 10(1)</p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/careers"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-slate-900">Careers (80+ Cadre)</div>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">In-house training academy & job roles</p>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Interactive Studio — special pill, positioned after Company */}
            <NavLink
              to="/interactive-studio"
              className={({ isActive }) =>
                `text-[13px] font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-slate-950 bg-amber-500/15 border border-amber-400'
                    : 'text-slate-800 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/60'
                }`
              }
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b37a00]" />
              <span>Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
            </NavLink>

            {/* Contact */}
            <NavLink to="/contact" className={({ isActive }) => navItemClass(isActive)}>
              Contact
            </NavLink>

          </nav>

          {/* 3. Right Action Area */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+918185898089"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-amber-100/80 text-slate-800 hover:text-[#b37a00] flex items-center justify-center transition-colors border border-slate-200"
              title="Call Madhapur HQ: +91 818 5898 089"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenVisitModal && onOpenVisitModal(null)}
              className="px-5 py-2.5 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow animate-pulse-gold whitespace-nowrap flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Site Visit</span>
            </button>
          </div>

          {/* 4. Mobile Action & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="tel:+918185898089"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-amber-100/80 text-slate-800 hover:text-[#b37a00] flex items-center justify-center transition-colors border border-slate-200"
              aria-label="Call Madhapur HQ"
              title="Call Madhapur HQ"
            >
              <Phone className="w-4 h-4 text-[#FDB813]" />
            </a>

            <button
              onClick={() => onOpenVisitModal && onOpenVisitModal(null)}
              className="px-3 sm:px-3.5 py-2 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Visit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-slate-950 rounded-xl hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 sm:px-6 py-5 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto space-y-4">
          
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white flex items-center justify-between border border-slate-800 shadow-md">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#FDB813] block tracking-wider">Kakatiya Hills, Madhapur</span>
              <a href="tel:+918185898089" className="text-xs font-black text-white hover:underline mt-0.5 block tracking-wide">
                +91 818 5898 089
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal && onOpenVisitModal(null);
              }}
              className="px-3 py-2 rounded-xl bg-[#FDB813] text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm"
            >
              Free Site Visit
            </button>
          </div>

          <nav className="space-y-2">
            {/* Home */}
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center min-h-[44px] text-sm font-bold px-3 py-2 rounded-xl transition-colors ${isActive ? 'text-[#b37a00] bg-amber-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              Home
            </NavLink>

            {/* Projects */}
            <div className="pt-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-1.5 px-2">Projects Portfolio</span>
              <div className="space-y-0.5 pl-3 border-l-2 border-[#FDB813]/50">
                <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  All 11 Flagship Ventures
                </NavLink>
                <NavLink to="/ongoing-projects" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Ongoing Projects (Arrjava, Orchid, Oak Tree, Mirai)
                </NavLink>
                <NavLink to="/completed-projects" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Completed Benchmarks (Hyd & Bengaluru)
                </NavLink>
              </div>
            </div>

            {/* Corridors */}
            <NavLink
              to="/corridors"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center gap-2 min-h-[44px] text-sm font-bold px-3 py-2 rounded-xl transition-colors ${isActive ? 'text-[#b37a00] bg-amber-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              <MapPin className="w-4 h-4 text-slate-400" />
              Growth Corridors (ORR, NH-44 & RRR)
            </NavLink>

            {/* About & Heritage */}
            <div className="pt-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-1.5 px-2">About & Heritage</span>
              <div className="space-y-0.5 pl-3 border-l-2 border-slate-300">
                <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  About Abhista & Leadership
                </NavLink>
                <NavLink to="/history" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Our History & Achievements (2006 – 2026)
                </NavLink>
                <NavLink to="/sustainability" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Sustainability & Agroecology
                </NavLink>
                <NavLink to="/investor-relations" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Investor Relations & Legal Standard
                </NavLink>
                <NavLink to="/calculator" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Farmland & Land ROI Calculator
                </NavLink>
                <NavLink to="/careers" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `flex items-center min-h-[40px] py-1.5 px-2 text-xs font-semibold rounded-lg transition-colors ${isActive ? 'text-[#b37a00]' : 'text-slate-700 hover:text-[#b37a00]'}`}>
                  Careers & In-House Technical Cadre
                </NavLink>
              </div>
            </div>

            {/* Interactive Studio */}
            <NavLink
              to="/interactive-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b37a00]" />
                <span>Interactive Studio</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#FDB813] text-slate-950 text-[10px] font-black">6 Tools</span>
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center min-h-[44px] text-sm font-bold px-3 py-2 rounded-xl transition-colors ${isActive ? 'text-[#b37a00] bg-amber-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              Contact Madhapur HQ
            </NavLink>
          </nav>

        </div>
      )}
    </header>
  );
}
