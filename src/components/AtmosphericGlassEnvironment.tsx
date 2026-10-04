import React, { useEffect, useState } from 'react';

/**
 * Atmospheric background recreating the liquid-crystal silk-ribbon reference:
 * - Pure glacial white, soft ice-blue, and crystalline pearl foundation.
 * - Sweeping 3D curved optical glass ribbons with razor-sharp specular crest highlights.
 * - Subtle refraction shadows and ambient daylight bloom.
 * - Responsive mouse parallax that gives a real sense of physical optical depth.
 */
export const AtmosphericGlassEnvironment: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 16;
      targetY = (e.clientY / innerHeight - 0.5) * 16;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      setMouseOffset({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none bg-[#EFF4F9]"
    >
      {/* ========================================================================= */}
      {/* LAYER 1: BASE GLACIAL & SILK AMBIENT FIELD                               */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Foundation ambient gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #E6EEF6 0%, #F5F9FC 35%, #E9F1F8 65%, #DBE7F3 100%)'
          }}
        />

        {/* 1. TOP-RIGHT: Pure Daylight Sunburst & Glacial Sheen */}
        <div
          className="absolute -top-[20%] right-[-5%] w-[850px] h-[750px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 40%, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 35%, rgba(230, 243, 255, 0.6) 60%, transparent 80%)',
            filter: 'blur(70px)',
            transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)`
          }}
        />

        {/* 2. MID-LEFT: Soft Titanium Ice-Blue Bloom */}
        <div
          className="absolute top-[25%] -left-[10%] w-[700px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #D8E7F5 0%, #C4DBEF 45%, rgba(184, 212, 238, 0.4) 65%, transparent 80%)',
            filter: 'blur(80px)',
            transform: `translate(${mouseOffset.x * -0.4}px, ${mouseOffset.y * -0.4}px)`
          }}
        />

        {/* 3. LOWER-CENTER & RIGHT: Deep crystalline cerulean pool */}
        <div
          className="absolute -bottom-[15%] right-[10%] w-[900px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #CDE1F4 0%, #B9D4EC 40%, rgba(175, 205, 234, 0.4) 65%, transparent 80%)',
            filter: 'blur(85px)',
            transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)`
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* LAYER 2: SWEEPING 3D LIQUID-CRYSTAL SILK RIBBONS & SPECULAR WAVE ACCENTS  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* SVG Canvas for realistic fluid crystal ribbon geometry */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary diagonal ribbon gradient */}
            <linearGradient id="mainRibbonGrad" x1="1200" y1="800" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C8DEEE" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#D9EAF7" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#EAF3FA" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>

            {/* Specular crest line gradient */}
            <linearGradient id="specularGleamGrad" x1="1400" y1="520" x2="300" y2="850" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="30%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
            </linearGradient>

            {/* Background silk fold 1 */}
            <linearGradient id="bgSilkFold1" x1="800" y1="0" x2="300" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#E4EFF8" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#C9DFF0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B9D5EA" stopOpacity="0.2" />
            </linearGradient>

            {/* Background silk fold 2 */}
            <linearGradient id="bgSilkFold2" x1="1000" y1="0" x2="600" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#E8F2FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#CDE1F2" stopOpacity="0.3" />
            </linearGradient>

            {/* Filter for diffuse caustics */}
            <filter id="softGleamFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND FOLD 1: Upper-left descending drape */}
          <path
            d="M -100 0 C 350 200, 600 500, 400 1000 L -100 1000 Z"
            fill="url(#bgSilkFold1)"
            style={{
              transform: `translate(${mouseOffset.x * -0.3}px, ${mouseOffset.y * -0.3}px)`
            }}
          />

          {/* BACKGROUND FOLD 2: Central sweeping canopy fold */}
          <path
            d="M 600 -100 C 750 250, 950 500, 1500 700 L 1500 -100 Z"
            fill="url(#bgSilkFold2)"
            style={{
              transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)`
            }}
          />

          {/* Faint caustics light beam passing through center */}
          <path
            d="M 850 0 C 900 200, 750 550, 450 900 L 600 900 C 900 550, 1050 200, 1000 0 Z"
            fill="#FFFFFF"
            opacity="0.35"
            style={{
              filter: 'blur(30px)',
              transform: `translate(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px)`
            }}
          />

          {/* MAIN PROMINENT DIAGONAL CRYSTAL TUBE / SILK RIBBON WAVE (Matches the reference foreground ribbon) */}
          {/* Ribbon shadow */}
          <path
            d="M 450 950 C 750 780, 1100 560, 1500 420 L 1500 520 C 1100 660, 750 880, 450 1050 Z"
            fill="#9CBEDC"
            opacity="0.25"
            style={{
              filter: 'blur(20px)',
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5 + 25}px)`
            }}
          />

          {/* Ribbon 3D body */}
          <path
            d="M 380 950 C 700 750, 1050 520, 1500 370 L 1500 470 C 1050 620, 700 850, 380 1050 Z"
            fill="url(#mainRibbonGrad)"
            style={{
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`
            }}
          />

          {/* Primary razor-sharp specular crest line */}
          <path
            d="M 380 950 C 700 750, 1050 520, 1500 370"
            stroke="url(#specularGleamGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#softGleamFilter)"
            style={{
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`
            }}
          />

          {/* Intense core specular pinpoint line */}
          <path
            d="M 380 950 C 700 750, 1050 520, 1500 370"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`
            }}
          />

          {/* Second parallel soft specular reflection inside the glass cylinder */}
          <path
            d="M 410 970 C 730 770, 1080 540, 1500 400"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.6"
            strokeLinecap="round"
            style={{
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`
            }}
          />

          {/* Delicate secondary sweeping arc from upper-left to center */}
          <path
            d="M 0 350 C 250 480, 550 700, 750 950"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              filter: 'blur(1px)',
              transform: `translate(${mouseOffset.x * -0.4}px, ${mouseOffset.y * -0.4}px)`
            }}
          />
        </svg>

        {/* Ambient specular gleam hotspot on the ribbon */}
        <div
          className="absolute top-[48%] right-[22%] w-[260px] h-[90px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.7) 35%, transparent 70%)',
            filter: 'blur(14px)',
            transform: `rotate(-24deg) translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)`
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* LAYER 3: TRANSLUCENT OPTICAL GLASS ACCENT PANELS                          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Floating Architectural Sheet (Left) */}
        <div
          className="absolute -top-[8%] left-[6%] w-[420px] h-[115vh] rounded-[52px] transition-transform duration-1000 ease-out"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(186, 230, 253, 0.12) 100%)',
            backdropFilter: 'blur(45px)',
            WebkitBackdropFilter: 'blur(45px)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 25px 65px -15px rgba(186, 215, 240, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.95)',
            transform: `rotate(-3.5deg) translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)`
          }}
        >
          {/* Specular edge highlight */}
          <div
            className="absolute inset-0 rounded-[52px] opacity-45 pointer-events-none"
            style={{
              background: 'linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.6) 35%, transparent 50%)'
            }}
          />
        </div>

        {/* Floating Architectural Sheet (Right) */}
        <div
          className="absolute -top-[5%] right-[5%] w-[460px] h-[560px] rounded-[48px] transition-transform duration-1000 ease-out"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.38) 0%, rgba(224, 242, 254, 0.15) 45%, rgba(255, 255, 255, 0.08) 100%)',
            backdropFilter: 'blur(45px)',
            WebkitBackdropFilter: 'blur(45px)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 25px 60px -15px rgba(186, 215, 240, 0.3), inset 0 1px 1.5px rgba(255, 255, 255, 0.9)',
            transform: `rotate(4deg) translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`
          }}
        />

        {/* Subtle vertical light caustics */}
        <div
          className="absolute top-[15%] left-[24%] w-[1px] h-[55vh] bg-gradient-to-b from-transparent via-white/80 to-transparent"
          style={{ transform: `translate(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px)` }}
        />
        <div
          className="absolute top-[30%] right-[32%] w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-white/70 to-transparent"
          style={{ transform: `translate(${mouseOffset.x * -0.2}px, ${mouseOffset.y * -0.2}px)` }}
        />
      </div>
    </div>
  );
};

export default AtmosphericGlassEnvironment;
