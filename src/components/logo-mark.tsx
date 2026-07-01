import Image from "next/image";

const ASPECT_RATIO = 700 / 658;

export function LogoMark({
  size = 40,
  variant = "color",
  className,
}: {
  size?: number;
  variant?: "color" | "light";
  className?: string;
}) {
  const src = variant === "color" ? "/logo-transparent.png" : "/logo-mono-light.png";
  const width = Math.round(size * ASPECT_RATIO);

  return (
    <Image
      src={src}
      alt="Aligned — Cultural Toolkit"
      width={width}
      height={size}
      className={className}
      priority
    />
  );
}
