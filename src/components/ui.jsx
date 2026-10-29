import { useState } from "react"

export function Cover({ src, alt, className = "", priority = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-[linear-gradient(155deg,#2a2420_0%,#7a5732_48%,#f3eee7_100%)] ${className}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export function SectionLabel({ children, light = false }) {
  return (
    <p className={`text-[11px] uppercase tracking-[0.28em] ${light ? "text-gold-2" : "text-gold"}`}>
      {children}
    </p>
  )
}

export function Button({
  children,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
  arrow = false,
}) {
  const variants = {
    solid: "bg-ink text-ivory hover:bg-gold hover:text-ivory",
    light: "bg-ivory text-ink hover:bg-ink hover:text-ivory",
    ghost: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
    ghostLight: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-ink",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {arrow ? (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      ) : null}
    </button>
  )
}

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}
