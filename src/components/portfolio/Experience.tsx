import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ojtAreas, supportCapabilities } from "@/lib/portfolio-data";

export function Experience() {

  return (
    <section id="experience" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Practicum with a corporate MIS technical team"
          intro="Hands-on experience supporting real users, workplace devices, applications, and network-connected equipment under the supervision of an MIS technical team."
        />

        <Reveal className="mt-10">
          <article className="card-surface border-t-4 border-t-primary p-6 sm:p-8">
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
              I worked alongside the technical team on day-to-day support: preparing computers,
              troubleshooting hardware and printers, setting up applications, testing LAN cables,
              and assisting employees. I learned through demonstrated procedures and completed
              familiar tasks under the team's supervision.
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

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-primary/20 bg-primary/5 p-5">
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                The detailed procedures behind this work — diagnostics, fixes, and what I learned —
                are written up as individual case studies.
              </p>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Technical Case Studies <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </article>
        </Reveal>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Practical support"
            title="What I Can Help With"
            intro="Entry-level support tasks I have practiced through my corporate practicum, coursework, and networking labs."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportCapabilities.map((item, index) => (
              <Reveal key={item} delay={index * 35}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

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
