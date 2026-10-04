import React, { forwardRef } from 'react';

export interface GlassTileProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  interactive?: boolean;
  glow?: boolean;
  variant?: 'surface' | 'subtle' | 'card' | 'elevated' | 'green' | 'amber' | 'lavender' | 'blue';
  className?: string;
}

/**
 * Reusable GlassTile tailored for the liquid-crystal silk & glacial ice aesthetic:
 * - Ultra-high clarity frosted white glass (rgba(255, 255, 255, 0.62–0.82))
 * - Strong optical backdrop blur: 36px–42px
 * - Pure specular white rim border with inner highlight (inset 0 1px 2px rgba(255, 255, 255, 1))
 * - Soft diffused cerulean/glacial drop shadow
 * - Continuous rounded corners: 28px
 */
export const GlassTile = forwardRef<HTMLDivElement, GlassTileProps>(({
  children,
  interactive = false,
  glow = false,
  variant = 'surface',
  className = '',
  style,
  ...rest
}, ref) => {
  const baseClasses = "rounded-[28px] relative transition-all duration-300";
  
  const variantClasses = {
    surface: "bg-white/[0.72] backdrop-blur-[38px] border border-white/[0.90] shadow-[0_24px_55px_-12px_rgba(186,215,240,0.45),0_1px_3px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,1)] text-[#0F172A]",
    card: "bg-white/[0.65] backdrop-blur-[36px] border border-white/[0.85] shadow-[0_20px_45px_-12px_rgba(186,215,240,0.38),0_1px_2px_rgba(0,0,0,0.02),inset_0_1px_1.5px_rgba(255,255,255,0.98)] text-[#0F172A]",
    elevated: "bg-white/[0.82] backdrop-blur-[42px] border border-white shadow-[0_30px_70px_-15px_rgba(186,215,240,0.55),0_1px_4px_rgba(0,0,0,0.02),inset_0_1px_2.5px_rgba(255,255,255,1)] text-[#0F172A]",
    subtle: "bg-white/[0.50] backdrop-blur-[30px] border border-white/[0.78] shadow-[0_12px_32px_-8px_rgba(186,215,240,0.25),inset_0_1px_1px_rgba(255,255,255,0.95)] text-[#0F172A]",
    green: "bg-[#E6F4EA]/80 backdrop-blur-[36px] border border-white shadow-[0_20px_48px_-12px_rgba(34,197,94,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] text-[#0F172A]",
    amber: "bg-[#FEF3C7]/80 backdrop-blur-[36px] border border-white shadow-[0_20px_48px_-12px_rgba(245,158,11,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] text-[#0F172A]",
    lavender: "bg-[#F3E8FF]/80 backdrop-blur-[36px] border border-white shadow-[0_20px_48px_-12px_rgba(168,85,247,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] text-[#0F172A]",
    blue: "bg-[#E0F2FE]/85 backdrop-blur-[36px] border border-white shadow-[0_20px_48px_-12px_rgba(14,165,233,0.18),inset_0_1px_1.5px_rgba(255,255,255,1)] text-[#0F172A]"
  }[variant];

  const interactiveClasses = interactive
    ? "cursor-pointer hover:-translate-y-1 hover:bg-white/[0.88] hover:border-white hover:shadow-[0_28px_60px_-10px_rgba(14,165,233,0.3),0_0_30px_rgba(186,230,253,0.7),inset_0_1px_2.5px_rgba(255,255,255,1)] active:translate-y-0"
    : "";

  return (
    <div
      ref={ref}
      style={{
        backdropFilter: 'blur(38px)',
        WebkitBackdropFilter: 'blur(38px)',
        ...style
      }}
      className={`${baseClasses} ${variantClasses} ${interactiveClasses} ${className}`}
      {...rest}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-sky-300/40 via-cyan-200/35 to-indigo-300/40 blur-xl pointer-events-none -z-10"
        />
      )}
      {children}
    </div>
  );
});

GlassTile.displayName = 'GlassTile';

export default GlassTile;
