import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { caseStudies, skillGroups } from "@/lib/portfolio-data";

export function CaseStudies() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="case-studies" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Technical Solutions"
          title="Troubleshooting case studies"
          intro="How I work through a problem: what happened, what I checked, what caused it, and what I took away from it. Details are filled in from documented cases only."
        />

        <div className="mt-10 grid gap-3">
          {caseStudies.map((cs, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={cs.title} delay={i * 50}>
                <article className="card-surface overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left transition-colors hover:bg-secondary/60"
                    >
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                          {cs.category}
                        </span>
                        <span className="mt-1 block text-base font-semibold">{cs.title}</span>
                      </span>
                      <ChevronDown
                        aria-hidden
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  {isOpen ? (
                    <dl className="grid gap-4 border-t border-border p-5 sm:grid-cols-2">
                      {[
                        ["Problem", cs.problem],
                        ["Investigation", cs.investigation],
                        ["Cause", cs.cause],
                        ["Solution", cs.solution],
                        ["Result", cs.result],
                        ["What I learned", cs.learned],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-lg bg-surface p-4">
                          <dt className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                            {label}
                          </dt>
                          <dd className="mt-1.5 text-sm leading-relaxed">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technical expertise"
        intro="Grouped by area, and limited to what I've actually worked with during my practicum, coursework, project work, and home labs."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <article className="card-surface h-full p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120} className="mt-6">
        <p className="rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
          Worth being clear about: my web development work is entry-level and often
          AI-assisted, and I don't claim professional Linux, Python, cybersecurity, or advanced
          networking experience. Those are areas I'm interested in, not areas I've worked in
          professionally.
        </p>
      </Reveal>
    </section>
  );
}
