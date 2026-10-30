interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = "w-9 h-9", size }: BrandLogoProps) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      style={style}
      aria-label="BillahStudio Download Manager Logo"
    >
      <defs>
        <linearGradient id="bdm-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <circle cx="128" cy="128" r="116" fill="#0f172a" stroke="#0ea5e9" strokeWidth="6" />
      <circle cx="128" cy="128" r="96" fill="url(#bdm-sky)" />
      <path
        d="M38 128h180M128 35c-30 27-48 59-48 93s18 66 48 93m0-186c30 27 48 59 48 93s-18 66-48 93M53 79h150M53 177h150"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M128 65v91m-37-28 37 38 37-38"
        fill="none"
        stroke="#0c4a6e"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 65v91m-37-28 37 38 37-38"
        fill="none"
        stroke="#ffffff"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
