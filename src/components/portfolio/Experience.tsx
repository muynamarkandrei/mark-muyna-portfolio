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
                  MIS Department — Technical Team · IT Support Intern (Practicum / OJT)
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                March 2026 — June 2026 · 500 required hours completed
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
            <Link
              to="/gallery"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View practicum gallery <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
