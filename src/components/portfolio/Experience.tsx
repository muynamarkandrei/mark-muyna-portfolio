import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { gallery, galleryCategories, ojtAreas, type GalleryCategory } from "@/lib/portfolio-data";
import { Placeholder } from "./Sections";

export function Experience() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const shown = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <section id="experience" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Practicum with a corporate MIS technical team"
          intro="This is where most of my hands-on experience comes from — real units, real users, real deadlines."
        />

        <Reveal className="mt-10">
          <article className="card-surface p-6 sm:p-8">
            <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">C&amp;E Publishing, Inc.</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  MIS Department — Technical Team · Practicum / OJT
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                March 9, 2026 — completion of required 500 hours
              </p>
            </header>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I worked alongside the technical team on day-to-day support: preparing and configuring
              computers, installing and troubleshooting printers, setting up applications, making and
              testing LAN cables, and helping employees get back to work. Early on I shadowed and
              followed demonstrated procedures; once I was familiar with them, my supervisors let me
              handle those tasks on my own.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {ojtAreas.map((area) => (
                <div key={area.title} className="rounded-lg bg-surface p-5">
                  <h4 className="text-sm font-semibold tracking-wide uppercase">{area.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {area.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-border p-5">
              <h4 className="text-sm font-semibold">User support</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A big part of the role was simply helping people: walking employees through printing
                and scanning, explaining what caused an issue and what I did about it, and making
                sure they could repeat the steps themselves next time.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-semibold">Practicum gallery</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Photos from the workbench, grouped by the kind of work involved.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div
              role="tablist"
              aria-label="Gallery categories"
              className="mt-6 flex flex-wrap gap-2"
            >
              {(["All", ...galleryCategories] as const).map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active === cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    active === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((item, i) => (
              <Reveal key={item.src} delay={i * 50}>
                <figure className="card-surface group h-full overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="p-4">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
                      {item.category}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            {shown.length === 0 ? (
              <Reveal className="sm:col-span-2 lg:col-span-3">
                <Placeholder label={`OJT ${active.toUpperCase()}`} className="aspect-21/9" />
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
