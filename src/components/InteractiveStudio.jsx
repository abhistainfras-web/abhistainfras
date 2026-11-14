import React, { useState } from 'react';
import HighwayTimeCalculator from './HighwayTimeCalculator';
import AgroYieldCalculator from './AgroYieldCalculator';
import SmartLandMatcher from './SmartLandMatcher';
import { Car, Trees, SlidersHorizontal } from 'lucide-react';

export default function InteractiveStudio({ onOpenVisitModal }) {
  const [activeTab, setActiveTab] = useState('matcher'); // 'matcher', 'commute', 'agro'

  const tools = [
    {
      id: 'matcher',
      label: 'Interactive Venture Finder',
      shortLabel: 'Venture Finder',
      icon: SlidersHorizontal,
      badge: 'Goal Match',
      desc: 'Find your ideal venture based on goals & budget'
    },
    {
      id: 'commute',
      label: 'Highway Commute Matrix',
      shortLabel: 'Drive Times',
      icon: Car,
      badge: 'ORR & NH-44',
      desc: 'Calculate exact drive minutes from your doorstep'
    },
    {
      id: 'agro',
      label: 'Farmland Agro & Timber Yield',
      shortLabel: 'Agro Calculator',
      icon: Trees,
      badge: 'Sec 10(1) Tax Free',
      desc: 'Project sandalwood, teak & fruit harvest returns'
    }
  ];

  return (
    <div className="bg-slate-950 text-white relative border-y border-slate-800" id="interactive-studio">
      
      {/* Studio Header & Tab Switcher Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 sticky top-[64px] sm:top-[74px] z-30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FDB813] flex items-center gap-1.5">
                <SlidersHorizontal className="w-3 h-3" />
                <span>Abhista Discovery Suite</span>
              </span>
              <h2 className="text-base sm:text-lg font-black text-white mt-0.5">
                Interactive Land & Property Tools
              </h2>
            </div>

            {/* Horizontal Tabs */}
            <div
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scrollbar-none py-0.5"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tools.map((t) => {
                const Icon = t.icon;
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? 'bg-[#FDB813] text-slate-950 shadow-md font-black'
                        : 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{t.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Render Active Tool */}
      <div className="transition-all duration-300">
        {activeTab === 'matcher' && <SmartLandMatcher onOpenVisitModal={onOpenVisitModal} />}
        {activeTab === 'commute' && <HighwayTimeCalculator onOpenVisitModal={onOpenVisitModal} />}
        {activeTab === 'agro' && <AgroYieldCalculator onOpenVisitModal={onOpenVisitModal} />}
      </div>

    </div>
  );
}
