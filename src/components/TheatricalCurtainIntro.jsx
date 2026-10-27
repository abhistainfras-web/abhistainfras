import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Crown, Sparkles } from 'lucide-react';

export default function TheatricalCurtainIntro({ onIntroComplete, replayTrigger }) {
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const flareLineRef = useRef(null);
  const flareVertRef = useRef(null);
  const flareCoreRef = useRef(null);
  const emblemRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(true);
        if (onIntroComplete) onIntroComplete();
      }
    });

    // Reset initial states
    setIsOpen(false);
    gsap.set(containerRef.current, { visibility: 'visible', opacity: 1, pointerEvents: 'all' });
    gsap.set(leftCurtainRef.current, { x: '0%' });
    gsap.set(rightCurtainRef.current, { x: '0%' });
    gsap.set(flareLineRef.current, { scaleX: 0.05, opacity: 0 });
    gsap.set(flareVertRef.current, { scaleY: 0.05, opacity: 0 });
    gsap.set(flareCoreRef.current, { scale: 0.1, opacity: 0 });
    gsap.set(emblemRef.current, { scale: 0.8, opacity: 0 });

    // Step 1: Anamorphic lens flare burst
    tl.to(flareLineRef.current, { opacity: 1, scaleX: 1.2, duration: 0.6, ease: 'power2.out' })
      .to(flareVertRef.current, { opacity: 0.9, scaleY: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4')
      .to(flareCoreRef.current, { opacity: 1, scale: 1.5, duration: 0.5, ease: 'back.out(2)' }, '-=0.4')
      .to(emblemRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      
      // Step 2: Hold for dramatic luxury pause
      .to({}, { duration: 0.4 })

      // Step 3: Lens flare softens into ambient glow
      .to([flareLineRef.current, flareVertRef.current, flareCoreRef.current], {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to(emblemRef.current, {
        opacity: 0,
        scale: 1.15,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.3')

      // Step 4: Velvet Curtains smoothly part outward
      .to(leftCurtainRef.current, {
        x: '-102%',
        duration: 1.6,
        ease: 'power3.inOut'
      })
      .to(rightCurtainRef.current, {
        x: '102%',
        duration: 1.6,
        ease: 'power3.inOut'
      }, '<')

      // Step 5: Container fades away to unblock clicks
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(containerRef.current, { visibility: 'hidden', pointerEvents: 'none' });
        }
      }, '-=0.3');

    return () => tl.kill();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] overflow-hidden bg-black select-none"
      style={{ visibility: 'visible' }}
    >
      {/* Ambient Cinema Light & Floor Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/40 via-black to-black"></div>
      <div className="absolute left-0 right-0 top-1/2 h-1/3 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* Velvet Left Curtain with Organic 3D Folds */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 bottom-0 left-0 w-[53vw] z-20 flex shadow-[20px_0_50px_rgba(0,0,0,0.95)]"
      >
        <div className="w-full h-full flex">
          {[1.2, 0.9, 1.1, 0.95, 1.05, 0.9, 1.15].map((flexGrow, idx) => (
            <div
              key={idx}
              style={{
                flex: `${flexGrow} 1 0%`,
                background: `linear-gradient(90deg, 
                  #130306 0%, 
                  #2a0a10 18%, 
                  #48151f 36%, 
                  #5f212c 50%, 
                  #45131c 65%, 
                  #26090e 84%, 
                  #140306 100%)`
              }}
              className="h-full border-r border-black/40"
            />
          ))}
        </div>
        {/* Drape Light Reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Velvet Right Curtain with Organic 3D Folds */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 bottom-0 right-0 w-[53vw] z-20 flex shadow-[-20px_0_50px_rgba(0,0,0,0.95)]"
      >
        <div className="w-full h-full flex">
          {[1.15, 0.9, 1.05, 0.95, 1.1, 0.9, 1.2].map((flexGrow, idx) => (
            <div
              key={idx}
              style={{
                flex: `${flexGrow} 1 0%`,
                background: `linear-gradient(90deg, 
                  #140306 0%, 
                  #26090e 16%, 
                  #45131c 35%, 
                  #5f212c 50%, 
                  #48151f 64%, 
                  #2a0a10 82%, 
                  #130306 100%)`
              }}
              className="h-full border-l border-black/40"
            />
          ))}
        </div>
        {/* Drape Light Reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Center Anamorphic Lens Flare */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        
        {/* Horizontal Laser Ray */}
        <div
          ref={flareLineRef}
          className="absolute w-[80vw] h-[2px] bg-gradient-to-r from-transparent via-[#f8e5ab] to-transparent shadow-[0_0_25px_4px_rgba(248,229,171,0.85)] filter blur-[0.4px]"
        />

        {/* Vertical Beam */}
        <div
          ref={flareVertRef}
          className="absolute w-[2px] h-[45vh] bg-gradient-to-b from-transparent via-[#f8e5ab] to-transparent shadow-[0_0_20px_3px_rgba(248,229,171,0.7)] filter blur-[0.4px]"
        />

        {/* Golden Flare Core */}
        <div
          ref={flareCoreRef}
          className="absolute w-28 h-28 rounded-full bg-[radial-gradient(circle,_#ffffff_0%,_#f2cb73_40%,_transparent_75%)] shadow-[0_0_50px_15px_rgba(242,203,115,0.6)]"
        />

        {/* Center Animated Royal Emblem */}
        <div
          ref={emblemRef}
          className="relative z-40 flex flex-col items-center justify-center text-center space-y-3"
        >
          <div className="w-20 h-20 rounded-2xl border border-gold-400/60 bg-black/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.5)]">
            <span className="font-serif text-4xl font-bold gold-gradient-text tracking-widest">A</span>
          </div>
          <div>
            <div className="font-serif text-2xl tracking-[0.3em] font-semibold text-white">
              ABHISTA INFRA’S
            </div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold-400 font-light mt-1">
              Tradition Meets Tomorrow • Since 2016
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
