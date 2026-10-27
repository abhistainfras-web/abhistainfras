import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/properties';
import { Users, GraduationCap, Building2, Briefcase, CheckCircle2, Send, Phone, Mail } from 'lucide-react';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', role: 'Sales Executive', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.phone) return;
    setSubmitted(true);
  };

  const openings = [
    { title: "Senior Land Acquisition Manager", exp: "5+ Years", loc: "Madhapur, Hyderabad", type: "Full-Time" },
    { title: "Site Civil Engineer (Layouts & Roads)", exp: "3+ Years", loc: "Patancheru / Kothur Sites", type: "Full-Time" },
    { title: "Real Estate Relationship Executive", exp: "1-3 Years", loc: "Madhapur Corporate Desk", type: "Full-Time" },
    { title: "Legal & Revenue Documentation Specialist", exp: "4+ Years", loc: "Hyderabad HQ", type: "Full-Time" },
    { title: "Agricultural Horticulturist / Farm Manager", exp: "3+ Years", loc: "Begumpet / Shamirpet", type: "Full-Time" }
  ];

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/assets/abhista/home/career-banner-img.png" alt="Careers" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDB813]">Careers at Abhista</span>
          </div>

          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDB813] bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              Join Our Growing Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3">
              Take Your Career To The Next Level.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              We are the only real estate company in Hyderabad to operate a full-fledged backward integration model with company-owned machinery, specialized engineering cadre, and an internal training academy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core USP from careers.php */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#d99600]">
              One of Hyderabad’s Leading Real Estate Entities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Staff Strength of Over 80 People & In-House Academy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In order to meet the growing demand for quality construction, we are continuously on the lookout for talent to help us maintain our reputation as the nation’s most reliable, quality builder. Today, we have a staff strength of over 80 people and a full-fledged academy to impart training on different technical and behavioural aspects.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We come with a reputation of developing some of the finest residential communities, farmlands, and contractual projects across Hyderabad, Chennai, and Bangalore.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900">80+</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Full-Time Professionals</div>
            </div>
            <div className="text-xs text-slate-600 font-medium">
              Technical, Engineering & Behavioral Training Academy at Madhapur HQ
            </div>
          </div>
        </div>

        {/* Current Openings & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Job Openings (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Current Career Opportunities</h3>
            
            <div className="space-y-4">
              {openings.map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1 font-medium">
                      <span>Experience: {job.exp}</span>
                      <span>•</span>
                      <span>{job.loc}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold">{job.type}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@abhista.in?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap text-center"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Resume Drop Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Send Your Resume</h3>
              <p className="text-xs text-slate-500">
                Interested in working with us? Submit your details or email your CV directly to <strong>careers@abhista.in</strong>.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Application Received</h4>
                  <p className="text-xs text-slate-600">Our HR team will review your profile and reach out within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-amber-500 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Department / Role</label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-amber-500 bg-slate-50 cursor-pointer"
                    >
                      <option value="Land Acquisition">Land Acquisition</option>
                      <option value="Civil Engineering">Civil Engineering & Survey</option>
                      <option value="Sales & Marketing">Sales & Marketing</option>
                      <option value="Customer Relations (CRM)">Customer Relations (CRM)</option>
                      <option value="Legal & Documentation">Legal & Revenue Documentation</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md mt-2"
                  >
                    Submit Candidate Profile
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
