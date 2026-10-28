import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter
 * Smoothly scrolls/counts up numbers from lowest to highest using requestAnimationFrame and easeOutExpo.
 * Triggers cleanly when the element enters the viewport.
 */
export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
  useIndianFormat = true
}) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    let animationFrameId = null;

    // Smooth exponential ease-out for a high-end luxury feel
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentVal = Math.floor(start + (end - start) * easedProgress);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasAnimated, start, end, duration]);

  const formattedNumber = useIndianFormat
    ? count.toLocaleString('en-IN')
    : count.toLocaleString();

  return (
    <span ref={elementRef} className={`inline-block tabular-nums transition-all ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
