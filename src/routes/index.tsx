import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { WomanSection, type Woman } from "@/components/WomanSection";
import leila from "@/assets/leila-hormozi.jpg";
import christina from "@/assets/christina-koch.jpg";
import riyam from "@/assets/riyam-ojaimi.jpg";
import codie from "@/assets/codie-sanchez.jpg";
import judit from "@/assets/judit-polgar.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Women Who Inspired Me This Year" },
      {
        name: "description",
        content:
          "A monochrome editorial tribute to the women whose work, discipline and mindset changed the way I think.",
      },
      { property: "og:title", content: "Women Who Inspired Me This Year" },
      {
        property: "og:description",
        content:
          "A monochrome editorial tribute to the women whose work, discipline and mindset changed the way I think.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,400&family=Inter:wght@200;300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const women: Woman[] = [
  {
    name: "Leila Hormozi",
    image: leila,
    quote:
      "Life becomes 100x better when you stop letting your mood dictate your behavior and start doing what you committed to doing.",
    category: "Discipline",
    chips: ["Discipline", "Ownership", "Consistency"],
    index: "01",
    total: "04",
  },
  {
    name: "Christina Koch",
    image: christina,
    quote:
      "Always do the things that might even scare you. When you achieve them, you learn the most about yourself and bring the most back to the world.",
    category: "Courage",
    chips: ["Courage", "Curiosity"],
    index: "02",
    total: "04",
  },
  {
    name: "Riyam Ojaimi",
    image: riyam,
    quote:
      "You need to realize that people's limitation is their problem, and you decide that it either makes you or breaks you — and I hope you decide it makes you.",
    category: "Resilience",
    chips: ["Resilience", "Voice", "Conviction"],
    index: "03",
    total: "04",
  },
  {
    name: "Codie Sanchez",
    image: codie,
    quote:
      "Real wealth is simplicity. Most people spend their lives chasing freedom, then build a life that makes freedom impossible.",
    category: "Independence",
    chips: ["Leadership", "Clarity"],
    index: "04",
    total: "04",
  },
];

function Hero() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => setP(Math.min(1, window.scrollY / window.innerHeight));
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span className="font-display font-black text-[22vw] leading-none tracking-tighter text-black/[0.035]">
          WOMEN
        </span>
      </div>

      <div className="relative w-full max-w-[1500px] mx-auto px-8 md:px-14 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 animate-fade-up">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666] mb-8">
            <span className="w-8 h-px bg-[#111]" />
            <span>Volume I — 2026</span>
          </div>
          <h1 className="font-display font-black text-[clamp(3rem,8.2vw,8rem)] leading-[0.86] tracking-[-0.035em] text-[#111]">
            Women
            <br />
            Who <span className="italic font-light">Inspired</span>
            <br />
            Me This Year.
          </h1>
          <p className="mt-10 max-w-md text-base md:text-lg leading-relaxed text-[#555] font-light">
            A small collection of women whose work, discipline and mindset changed the way I think — and the way I decide to spend my days.
          </p>
          <div className="mt-12 flex items-center gap-6 text-[11px] uppercase tracking-[0.28em] text-[#666]">
            <a href="#gallery" className="group inline-flex items-center gap-3">
              <span className="w-10 h-px bg-[#111] group-hover:w-16 transition-all" />
              Enter the gallery
            </a>
          </div>
        </div>

        <div className="md:col-span-6 relative flex items-center justify-center">
          <div
            className="relative aspect-square w-[min(80vw,600px)]"
            style={{ transform: `translateY(${p * -40}px) scale(${1 + p * 0.05})` }}
          >
            <div className="absolute inset-0 rounded-full bg-[#f2f2f2] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                {[leila, christina, riyam, codie].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover grayscale"
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-6 right-[-20px] md:right-[-60px] animate-float-slow">
              <span className="chip">Discipline</span>
            </div>
            <div className="absolute bottom-16 left-[-20px] md:left-[-70px] animate-float-slower">
              <span className="chip">Courage</span>
            </div>


          </div>

          {/* Right side index rail */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[11px] tracking-[0.28em] text-[#666]">
            <span>01</span>
            <span className="w-px h-24 bg-[#eaeaea]" />
            <span>04</span>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-8 md:left-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666]">
        <span className="inline-block w-6 h-6 rounded-full border border-[#111] flex items-center justify-center">
          <span className="w-1 h-1 bg-[#111] rounded-full" />
        </span>
        Scroll
      </div>
    </section>
  );
}

function Quotes() {
  const items = women.map((w) => ({ name: w.name, quote: w.quote }));
  return (
    <section id="quotes" className="relative py-40 border-t border-[#eaeaea]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666] mb-16">
          <span className="w-8 h-px bg-[#111]" />
          <span>Quotes · A Reading</span>
        </div>
        <div className="space-y-24">
          {items.map((q) => (
            <figure key={q.name} className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3 text-[11px] uppercase tracking-[0.28em] text-[#666] pt-4">
                {q.name}
              </div>
              <blockquote className="md:col-span-9 font-display italic font-light text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-[#111]">
                “{q.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-40 border-t border-[#eaeaea]">
      <div className="max-w-[1000px] mx-auto px-8 md:px-14 text-center">
        <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666] mb-10">
          <span className="w-8 h-px bg-[#111]" />
          <span>About this exhibition</span>
          <span className="w-8 h-px bg-[#111]" />
        </div>
        <p className="font-display text-[clamp(1.75rem,3.4vw,2.8rem)] leading-[1.25] tracking-[-0.02em] text-[#111]">
          A&nbsp; personal archive of the women whose thinking rearranged mine this year — and maybe they changed yours.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-24 border-t border-[#eaeaea]">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <p className="font-display italic text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#333] leading-relaxed">
          To the women whose work reminded me that greatness is built one decision at a time.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.28em] text-[#666]">
          <span>Women.</span>
          <span className="w-8 h-px bg-[#eaeaea]" />
          <span>Volume I</span>
          <span className="w-8 h-px bg-[#eaeaea]" />
          <span>MMXXVI</span>
        </div>
      </div>
    </footer>
  );
}

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-[90] hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 60%)",
        transition: "transform 0.2s ease-out",
      }}
    />
  );
}

function Index() {
  return (
    <div className="grain min-h-screen bg-white">
      <Cursor />
      <Nav />
      <Hero />
      <div id="gallery">
        {women.map((w, i) => (
          <WomanSection key={w.name} woman={w} reverse={i % 2 === 1} />
        ))}
      </div>

      <Quotes />
      <About />
      <Footer />
    </div>
  );
}
