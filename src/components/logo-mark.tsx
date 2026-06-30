export function LogoMark({ size = 40 }: { size?: number }) {
  const id = "g" + size;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-sun`} cx="50%" cy="58%" r="38%">
          <stop offset="0%" stopColor="#FFCF80" stopOpacity="1" />
          <stop offset="55%" stopColor="#E8A040" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D4883A" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id={`${id}-canopy`} cx="50%" cy="35%" r="52%">
          <stop offset="0%" stopColor="#B0A0CC" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#7A68A8" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#4A5E98" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1E5C4A" stopOpacity="0.5" />
        </radialGradient>
        <filter id={`${id}-b1`}>
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <filter id={`${id}-b2`}>
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
        <filter id={`${id}-b3`}>
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <circle cx="60" cy="72" r="34" fill={`url(#${id}-sun)`} filter={`url(#${id}-b2)`} />
      <ellipse
        cx="60"
        cy="42"
        rx="40"
        ry="34"
        fill={`url(#${id}-canopy)`}
        filter={`url(#${id}-b2)`}
        opacity="0.6"
      />
      <line x1="20" y1="90" x2="100" y2="90" stroke="#1E5C4A" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path d="M60 90 Q50 96 36 99" stroke="#1E5C4A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M60 90 Q60 99 60 106" stroke="#2E7A60" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55" />
      <path d="M60 90 Q70 96 84 99" stroke="#1E5C4A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M53 93 Q42 100 30 103" stroke="#1E5C4A" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M67 93 Q78 100 90 103" stroke="#1E5C4A" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M60 90 Q57 74 60 58" stroke="#2E7A60" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M60 68 Q46 58 30 54" stroke="#4A5E98" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity="0.82" />
      <path d="M60 68 Q74 58 90 54" stroke="#4A5E98" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity="0.82" />
      <path d="M60 62 Q50 50 40 42" stroke="#7A68A8" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.78" />
      <path d="M60 62 Q70 50 80 42" stroke="#7A68A8" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.78" />
      <path d="M60 56 Q60 44 60 32" stroke="#7A68A8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.72" />
      <path d="M40 42 Q32 34 24 30" stroke="#B0A0CC" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.72" />
      <path d="M40 42 Q36 32 32 24" stroke="#B0A0CC" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.62" />
      <path d="M80 42 Q88 34 96 30" stroke="#B0A0CC" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.72" />
      <path d="M80 42 Q84 32 88 24" stroke="#B0A0CC" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.62" />
      <path d="M60 32 Q54 24 48 18" stroke="#B0A0CC" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.62" />
      <path d="M60 32 Q66 24 72 18" stroke="#B0A0CC" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.62" />
      <path d="M60 32 Q60 24 60 16" stroke="#C8BCE0" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.55" />
      <circle cx="30" cy="54" r="6" fill="#4A5E98" opacity="0.38" filter={`url(#${id}-b1)`} />
      <circle cx="90" cy="54" r="6" fill="#4A5E98" opacity="0.38" filter={`url(#${id}-b1)`} />
      <circle cx="24" cy="29" r="7" fill="#7A68A8" opacity="0.48" filter={`url(#${id}-b1)`} />
      <circle cx="32" cy="22" r="5.5" fill="#5A4A88" opacity="0.42" filter={`url(#${id}-b1)`} />
      <circle cx="48" cy="17" r="6" fill="#B0A0CC" opacity="0.5" filter={`url(#${id}-b1)`} />
      <circle cx="60" cy="14" r="7" fill="#7A68A8" opacity="0.52" filter={`url(#${id}-b1)`} />
      <circle cx="72" cy="17" r="6" fill="#B0A0CC" opacity="0.5" filter={`url(#${id}-b1)`} />
      <circle cx="88" cy="22" r="5.5" fill="#5A4A88" opacity="0.42" filter={`url(#${id}-b1)`} />
      <circle cx="96" cy="29" r="7" fill="#7A68A8" opacity="0.48" filter={`url(#${id}-b1)`} />
      <circle cx="40" cy="41" r="4" fill="#5A9E7A" opacity="0.4" filter={`url(#${id}-b3)`} />
      <circle cx="80" cy="41" r="4" fill="#5A9E7A" opacity="0.4" filter={`url(#${id}-b3)`} />
      <circle cx="60" cy="15" r="3.5" fill="#C8BCE0" opacity="0.6" filter={`url(#${id}-b3)`} />
    </svg>
  );
}
