import { Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { capstoneImages, ciscoLabs } from "@/lib/portfolio-data";

const contributions = [
  "Conducted stakeholder interviews and analyzed business workflows to identify operational challenges, translating SME requirements into system features that streamlined inventory management, sales tracking, and delivery processes.",
  "Coordinated project discussions, managed project documentation, and designed the application's UI/UX in Figma, keeping development aligned with business objectives and academic requirements throughout the project lifecycle.",
  "Validated system functionality through testing and feature reviews while maintaining the research manuscript, ensuring the platform incorporated essential e-commerce capabilities, AI-assisted recommendations, automated reporting, and administrative tools that addressed identified business needs.",
];

const stack = ["HTML", "CSS", "JavaScript", "Figma", "AI-assisted workflows"];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Academic capstone and self-directed labs"
        intro="One full academic system project, plus the Packet Tracer labs I run at home to build networking fundamentals."
      />

      <Reveal className="mt-10">
        <article className="card-surface overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            <div className="min-w-0 p-6 sm:p-8">
              <span className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                Featured · Capstone
              </span>
              <h3 className="mt-3 text-2xl leading-tight font-semibold">
                Intelligent E-Commerce Platform for PC Component Sales with AI Assistance and 3D
                Visualization
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                An academic system project built for a small PC-components business. The platform
                combined standard e-commerce functionality with an AI shopping assistant, automated
                reporting, 3D product visualization, and administrative tools for inventory, sales,
                and delivery tracking.
              </p>

              <h4 className="mt-6 text-sm font-semibold tracking-wide uppercase">My contributions</h4>
              <ul className="mt-3 space-y-3">
                {contributions.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 space-y-4 border-t border-border bg-surface p-6 sm:p-8 lg:border-t-0 lg:border-l">
              {capstoneImages.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-xl border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <figcaption className="bg-card p-3 text-xs leading-relaxed text-muted-foreground">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal className="mt-16">
        <h3 className="text-2xl font-semibold">Cisco Packet Tracer home labs</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Self-directed labs I build and document on my own time. They're intentionally
          fundamentals-level — the point is to practice topology, addressing, configuration, and
          verification until it sticks.
        </p>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {ciscoLabs.map((lab, i) => (
          <Reveal key={lab.name} delay={i * 80}>
            <article className="card-surface flex h-full flex-col p-6 transition-shadow hover:shadow-lg">
              <img
                src={lab.image}
                alt={`Packet Tracer topology for ${lab.name}`}
                loading="lazy"
                className="w-full rounded-lg border border-border bg-surface object-contain"
              />

              <h4 className="mt-5 text-lg font-semibold">{lab.name}</h4>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Objective", lab.objective],
                  ["Network topology", lab.topology],
                  ["Devices used", lab.devices],
                  ["Configuration", lab.configuration],
                  ["Connectivity testing", lab.testing],
                  ["What I learned", lab.learned],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-0.5 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
                    <dt className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                      {label}
                    </dt>
                    <dd className="leading-relaxed text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-2">
                {lab.github ? (
                  <a
                    href={lab.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" aria-hidden /> View on GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-4 py-2.5 font-mono text-xs text-muted-foreground">
                    <Github className="h-4 w-4" aria-hidden /> GitHub link pending
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
