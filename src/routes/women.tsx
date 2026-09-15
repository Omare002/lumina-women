import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { women } from "@/data/women";

export const Route = createFileRoute("/women")({
  head: () => ({
    meta: [
      { title: "The Index — Women Who Inspired Me This Year" },
      {
        name: "description",
        content:
          "The full index of featured women — portraits, quotes and the traits that defined them.",
      },
      { property: "og:title", content: "The Index — Women Who Inspired Me This Year" },
      {
        property: "og:description",
        content:
          "The full index of featured women — portraits, quotes and the traits that defined them.",
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
  component: WomenIndex,
});

function WomenIndex() {
  return (
    <div className="grain min-h-screen bg-white">
      <Nav />
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="max-w-[1500px] mx-auto px-8 md:px-14 mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666] mb-8">
            <span className="w-8 h-px bg-[#111]" />
            <span>The Index · {women.length} portraits</span>
          </div>
          <h1 className="font-display font-black text-[clamp(2.8rem,8vw,7rem)] leading-[0.86] tracking-[-0.035em] text-[#111]">
            The Women.
            <br />
            <span className="italic font-light">In full.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-[#555] font-light">
            Every portrait, every quote, every trait — collected here as a single
            index of the women who rearranged the way I think this year.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#666] hover:text-[#111] transition-colors"
            >
              <span className="w-10 h-px bg-[#111] group-hover:w-16 transition-all" />
              Back to the gallery
            </Link>
          </div>
        </section>

        {/* Grid of women */}
        <section className="max-w-[1500px] mx-auto px-8 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {women.map((w) => (
              <article
                key={w.name}
                className="group relative border-t border-[#eaeaea] pt-10"
              >
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[#666] mb-8">
                  <span>{w.index}</span>
                  <span className="w-10 h-px bg-[#eaeaea]" />
                  <span>{w.total}</span>
                  <span className="ml-auto">{w.category}</span>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden bg-[#f2f2f2]">
                  <img
                    src={w.image}
                    alt={w.name}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: w.imagePosition ?? "50% 50%" }}
                    loading="lazy"
                  />
                </div>

                <h2 className="mt-8 font-display font-black text-[clamp(2.2rem,5vw,4rem)] leading-[0.9] tracking-[-0.03em] text-[#111]">
                  {w.name.split(" ")[0]}
                  <br />
                  <span className="italic font-light">
                    {w.name.split(" ").slice(1).join(" ")}
                  </span>
                </h2>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-[#333] font-light max-w-md">
                  <span className="font-display text-2xl leading-none text-[#111] mr-1 align-top">“</span>
                  {w.quote}
                  <span className="font-display text-2xl leading-none text-[#111] ml-1 align-top">”</span>
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {w.chips.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 py-24 border-t border-[#eaeaea]">
          <div className="max-w-[900px] mx-auto px-8 text-center">
            <p className="font-display italic text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#333] leading-relaxed">
              To the women whose work reminded me that greatness is built one decision at a time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.28em] text-[#666]">
              <span>Women.</span>
              <span className="w-8 h-px bg-[#eaeaea]" />
              <span>The Index</span>
              <span className="w-8 h-px bg-[#eaeaea]" />
              <span>MMXXVI</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
