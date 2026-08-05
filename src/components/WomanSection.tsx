import { useEffect, useRef, useState } from "react";

export interface Woman {
  name: string;
  image: string;
  quote: string;
  category: string;
  chips: string[];
  index: string;
  total: string;
  imagePosition?: string;
}

export function WomanSection({ woman, reverse = false }: { woman: Woman; reverse?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);

    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = 1 - Math.max(0, Math.min(1, (rect.top + rect.height / 2) / vh));
      setScrollProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scale = 0.94 + scrollProgress * 0.12;
  const rotate = (scrollProgress - 0.5) * 4;
  const parY = (scrollProgress - 0.5) * 40;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden py-24"
    >
      {/* Faint oversized background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span
          className="font-display font-black text-[24vw] leading-none tracking-tighter text-black/[0.03] whitespace-nowrap"
          style={{ transform: `translateY(${parY * 0.6}px)` }}
        >
          {woman.name.split(" ")[0]}
        </span>
      </div>

      <div className={`relative w-full max-w-[1500px] mx-auto px-8 md:px-14 grid md:grid-cols-12 gap-10 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
        {/* Text */}
        <div
          className="md:col-span-5 [direction:ltr] transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666] mb-8">
            <span className="w-8 h-px bg-[#111]" />
            <span>{woman.category}</span>
          </div>

          <h2 className="font-display font-black text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-[#111]">
            {woman.name.split(" ")[0]}
            <br />
            <span className="italic font-light">{woman.name.split(" ").slice(1).join(" ")}</span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[#333] max-w-md font-light">
            <span className="font-display text-3xl leading-none text-[#111] mr-1 align-top">“</span>
            {woman.quote}
            <span className="font-display text-3xl leading-none text-[#111] ml-1 align-top">”</span>
          </p>

          <div className="mt-10 flex items-center gap-6 text-[11px] uppercase tracking-[0.28em] text-[#666]">
            <span>{woman.index}</span>
            <span className="w-16 h-px bg-[#eaeaea]" />
            <span>{woman.total}</span>
          </div>
        </div>

        {/* Portrait */}
        <div className="md:col-span-7 [direction:ltr] relative flex items-center justify-center">
          <div
            className="relative aspect-square w-[min(78vw,620px)] transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${scale}) rotate(${rotate}deg)`,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-[#f2f2f2] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]" />
            <img
              src={woman.image}
              alt={woman.name}
              className="absolute inset-0 w-full h-full object-cover rounded-full grayscale"
              style={{ objectPosition: woman.imagePosition ?? "50% 50%" }}
              loading="lazy"
            />

            {/* Floating chips */}
            <div className="absolute -top-4 right-4 md:right-[-40px] animate-float-slow">
              <span className="chip">{woman.chips[0]}</span>
            </div>
            <div className="absolute bottom-10 left-[-20px] md:left-[-60px] animate-float-slower">
              <span className="chip">{woman.chips[1]}</span>
            </div>
            {woman.chips[2] && (
              <div className="absolute top-1/2 right-[-30px] md:right-[-80px] animate-drift">
                <span className="chip">{woman.chips[2]}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
