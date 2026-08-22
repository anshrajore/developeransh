import { useState } from "react";
import type { SiteImage as SiteImageData } from "@/data/images";

type SiteImageProps = SiteImageData & {
  className?: string;
  loading?: "eager" | "lazy";
  fallbackClassName?: string;
};

export function SiteImage({
  src,
  alt,
  label,
  tone,
  className = "",
  fallbackClassName = "",
  loading = "lazy",
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`flex items-end overflow-hidden ${className} ${fallbackClassName}`}
        style={{ background: tone }}
      >
        <div className="w-full bg-black/20 p-5 text-white backdrop-blur-sm">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">
            Image
          </p>
          <p className="display mt-2 text-[1.8rem] leading-none">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
