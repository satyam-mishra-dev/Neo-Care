"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HeroAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const doctorRef = useRef<HTMLDivElement>(null);
  const stethoscopeRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate subtitle
    tl.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Animate buttons
    tl.fromTo(
      buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Animate doctor image
    tl.fromTo(
      doctorRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Animate decorative elements
    tl.fromTo(
      stethoscopeRef.current,
      { rotation: -180, scale: 0, opacity: 0 },
      { rotation: 0, scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.8"
    );

    tl.fromTo(
      heartRef.current,
      { rotation: 180, scale: 0, opacity: 0 },
      { rotation: 0, scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Floating animation for decorative elements
    gsap.to(stethoscopeRef.current, {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(heartRef.current, {
      y: -10,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5,
    });

  }, []);

  return (
    <div ref={heroRef}>
      {/* This component doesn't render anything, it just handles animations */}
    </div>
  );
}; 