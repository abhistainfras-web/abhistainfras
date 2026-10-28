import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';

const ROUTE_META = {
  '/': {
    title: 'Abhista Infras | Farmlands & Gated Communities Hyderabad',
    desc: 'Abhista Infras — 18+ years of trust in premium gated layouts, organic farmlands, and luxury villas across Hyderabad & Bengaluru.'
  },
  '/projects': {
    title: 'All 11 Ventures & Farmlands | Abhista Infras Portfolio',
    desc: 'Explore all 11 masterplanned organic farmlands and HMDA-approved gated communities along Hyderabad & Bengaluru expressways.'
  },
  '/ongoing-projects': {
    title: 'Ongoing Projects | Arrjava, Orchid Bloom, Oak Tree, Mirai | Abhista Infras',
    desc: 'Explore active ongoing plotted ventures and agro-retreats with company-owned machinery development and spot registration.'
  },
  '/completed-projects': {
    title: 'Completed Benchmarks & Delivered Landmarks | Abhista Infras',
    desc: 'Over 20 completed benchmarks spanning 822+ acres delivered across Hyderabad and Bengaluru with 100% clear legal titles.'
  },
  '/corridors': {
    title: 'Strategic Growth Corridors | Outer Ring Road (ORR) & NH-44 | Abhista Infras',
    desc: 'Discover high-yield real estate corridors: Patancheru ORR Exit 3, Kothur NH-44, Shamirpet Genome Valley, and Bengaluru South.'
  },
  '/interactive-studio': {
    title: 'Interactive Discovery Studio (6 Architectural Tools) | Abhista Infras',
    desc: 'Interactive CAD plot explorer, Vedic Vaastu compass, highway commute matrix, agro timber yield calculator, and 360° virtual site viewer.'
  },
  '/about': {
    title: 'About Abhista & Leadership | Mr. M. Ramachandra Reddy | Abhista Infras',
    desc: '18+ years of unassailable trust, backward integration, and direct stewardship under Founder Mr. M. Ramachandra Reddy.'
  },
  '/history': {
    title: 'Our History & Achievements (2006 – 2026) | Anuradha to Abhista Infras',
    desc: 'Interactive chronicle of 18+ years of land banking: from Anuradha Properties in 2006 to 10,000+ satisfied landowners in 2026.'
  },
  '/sustainability': {
    title: 'Sustainability & Eco-Agroforestry | Abhista Infras',
    desc: 'Chemical-free organic farming, sandalwood timber plantations, and rainwater harvesting for ecological land preservation.'
  },
  '/calculator': {
    title: 'Land ROI & Capital Compounding Simulator | Abhista Infras',
    desc: 'Simulate land capital appreciation, sandalwood harvest yields, and Section 10(1) tax-free agricultural income.'
  },
  '/investor-relations': {
    title: 'Investor Relations & 3-Tier Legal Audit | Abhista Infras',
    desc: 'Corporate governance, unassailable 30-year title verification, and zero-litigation plotted development standards.'
  },
  '/careers': {
    title: 'Careers & In-House Technical Cadre (80+ Team) | Abhista Infras',
    desc: 'Join South India’s premier land banking firm. In-house training academy and careers for civil engineers, surveyors, and legal advocates.'
  },
  '/contact': {
    title: 'Contact Corporate Headquarters Madhapur | Abhista Infras',
    desc: 'Connect with our Madhapur desk advisor or book a complimentary weekend site visit with company AC cab pickup.'
  }
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title & Meta Description Update
    let meta = ROUTE_META[pathname];

    if (!meta && pathname.startsWith('/projects/')) {
      const id = pathname.replace('/projects/', '');
      const prop = PROPERTIES.find((p) => p.id === id);
      if (prop) {
        meta = {
          title: `${prop.title} | ${prop.enclave} | Abhista Infras`,
          desc: `${prop.subtitle}. Plot sizes: ${prop.plotSize}. Approval: ${prop.approval}. Starting from ${prop.priceINR}.`
        };
      }
    }

    if (meta) {
      document.title = meta.title;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', meta.desc);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.desc);
    }
  }, [pathname]);

  return null;
}
