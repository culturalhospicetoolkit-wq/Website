const LEAVES: Array<{ cx: number; cy: number; a: number; c: string }> = [
  // Top center cluster (above upright twig)
  { cx: 124, cy: 130, a: -35, c: "#3D5935" },
  { cx: 136, cy: 114, a: -12, c: "#C47E88" },
  { cx: 150, cy: 106, a: 12,  c: "#6B8E52" },
  { cx: 164, cy: 112, a: 36,  c: "#3D5935" },
  { cx: 173, cy: 127, a: 54,  c: "#C47E88" },
  { cx: 144, cy: 124, a: -2,  c: "#6B8E52" },
  // Far-left cluster (end of left branch)
  { cx: 36,  cy: 196, a: -68, c: "#6B8E52" },
  { cx: 47,  cy: 182, a: -46, c: "#3D5935" },
  { cx: 59,  cy: 171, a: -24, c: "#A87349" },
  { cx: 71,  cy: 163, a: -4,  c: "#C47E88" },
  { cx: 48,  cy: 208, a: -62, c: "#6B8E52" },
  // Mid-left section
  { cx: 92,  cy: 178, a: -22, c: "#3D5935" },
  { cx: 107, cy: 268, a: -14, c: "#A87349" },
  // Far-right cluster (end of right branch)
  { cx: 437, cy: 167, a: 78,  c: "#3D5935" },
  { cx: 448, cy: 153, a: 60,  c: "#C47E88" },
  { cx: 456, cy: 142, a: 46,  c: "#6B8E52" },
  { cx: 443, cy: 179, a: 74,  c: "#A87349" },
  { cx: 429, cy: 158, a: 64,  c: "#3D5935" },
  // Right sub-branch 1 (~x270, y145–175)
  { cx: 280, cy: 157, a: 78,  c: "#3D5935" },
  { cx: 269, cy: 144, a: 60,  c: "#6B8E52" },
  { cx: 275, cy: 172, a: 76,  c: "#C47E88" },
  // Right sub-branch 2 (~x355–380, y133–165)
  { cx: 367, cy: 145, a: 74,  c: "#A87349" },
  { cx: 356, cy: 133, a: 56,  c: "#3D5935" },
  { cx: 375, cy: 162, a: 80,  c: "#6B8E52" },
  // Scattered along main branches
  { cx: 236, cy: 246, a: 26,  c: "#3D5935" },
  { cx: 314, cy: 226, a: 22,  c: "#C47E88" },
  { cx: 117, cy: 276, a: -12, c: "#6B8E52" },
];

export function LogoMark({
  size = 40,
  variant = "color",
  className,
}: {
  size?: number;
  variant?: "color" | "light";
  className?: string;
}) {
  const w = Math.round(size * (700 / 658));
  const isLight = variant === "light";
  const trunk = isLight ? "#D8D1C8" : "#2E3135";
  const textMain = isLight ? "#D8D1C8" : "#2E3135";
  const textSub = isLight ? "#D8D1C8" : "#6F7E90";

  return (
    <svg
      viewBox="0 0 700 658"
      width={w}
      height={size}
      className={className}
      role="img"
      aria-label="Aligned — Cultural Toolkit"
    >
      {/* Roots */}
      <g stroke={trunk} fill="none" strokeLinecap="round">
        <path d="M 153 590 Q 132 614 96 640"   strokeWidth="8" />
        <path d="M 153 590 Q 142 622 122 648"   strokeWidth="6.5" />
        <path d="M 157 592 Q 162 624 178 648"   strokeWidth="6.5" />
        <path d="M 157 592 Q 174 614 208 638"   strokeWidth="8" />
        <path d="M 154 592 Q 154 626 154 650"   strokeWidth="5" />
        <path d="M 150 594 Q 110 622 76  648"   strokeWidth="5" />
        <path d="M 160 594 Q 198 620 232 645"   strokeWidth="5" />
      </g>

      {/* Main trunk */}
      <path
        d="M 157 590 C 148 552 144 510 148 470 C 152 432 157 396 160 360 C 162 330 164 300 166 275"
        stroke={trunk} strokeWidth="22" strokeLinecap="round" fill="none"
      />

      {/* Main right branch */}
      <path
        d="M 163 280 C 180 268 205 257 230 249 C 260 240 292 232 322 222 C 352 213 382 203 408 191 C 420 185 428 179 432 174"
        stroke={trunk} strokeWidth="13" strokeLinecap="round" fill="none"
      />

      {/* Left branch */}
      <path
        d="M 158 338 C 144 320 126 302 108 283 C 91 264 75 246 58 229 C 51 220 46 211 43 201"
        stroke={trunk} strokeWidth="11" strokeLinecap="round" fill="none"
      />

      {/* Upper center twig */}
      <path
        d="M 164 268 C 160 249 156 228 153 208 C 150 190 147 173 144 158"
        stroke={trunk} strokeWidth="8" strokeLinecap="round" fill="none"
      />

      {/* Right sub-branch 1 */}
      <path
        d="M 270 243 C 268 224 268 207 270 191 C 271 179 274 169 277 161"
        stroke={trunk} strokeWidth="6" strokeLinecap="round" fill="none"
      />

      {/* Right sub-branch 2 */}
      <path
        d="M 344 218 C 348 202 352 187 356 174 C 359 163 362 155 365 148"
        stroke={trunk} strokeWidth="5" strokeLinecap="round" fill="none"
      />

      {/* Left sub-branch */}
      <path
        d="M 102 272 C 98 255 94 238 92 222 C 90 207 90 194 90 182"
        stroke={trunk} strokeWidth="5.5" strokeLinecap="round" fill="none"
      />

      {/* Twig tips */}
      <g stroke={trunk} fill="none" strokeLinecap="round" strokeWidth="3.5">
        <path d="M 144 158 C 136 147 128 139 118 133" />
        <path d="M 144 158 C 151 147 158 138 166 131" />
        <path d="M 432 174 C 440 164 446 154 446 144" />
        <path d="M 43  201 C 35  191 30  181 29  171" />
        <path d="M 90  182 C 86  172 84  162 84  152" />
      </g>

      {/* Leaves */}
      {LEAVES.map((leaf, i) => (
        <ellipse
          key={i}
          cx={leaf.cx}
          cy={leaf.cy}
          rx={6.5}
          ry={13}
          fill={isLight ? "#D8D1C8" : leaf.c}
          transform={`rotate(${leaf.a} ${leaf.cx} ${leaf.cy})`}
        />
      ))}

      {/* "ALIGNED" wordmark */}
      <text
        x="170"
        y="440"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        fontSize="115"
        fontWeight="400"
        fill={textMain}
        letterSpacing="-0.005em"
      >
        ALIGNED
      </text>

      {/* "CULTURAL TOOLKIT" subtitle */}
      <text
        x="212"
        y="474"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        fontSize="23"
        fontWeight="600"
        fill={textSub}
        letterSpacing="0.15em"
      >
        CULTURAL TOOLKIT
      </text>
    </svg>
  );
}
