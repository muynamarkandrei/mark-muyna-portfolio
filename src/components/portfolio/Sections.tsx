import { useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, FileDown, ImageOff } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/lib/portfolio-data";

export function Placeholder({
  label,
  className = "aspect-4/3",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`grid place-items-center rounded-xl border border-dashed border-border bg-surface p-6 text-center ${className}`}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      <div className="max-w-[16rem]">
        <ImageOff className="mx-auto h-6 w-6 text-muted-foreground" aria-hidden />
        <p className="mt-2 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          [IMAGE: {label}]
        </p>
      </div>
    </div>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const items = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    {
      href: profile.email.includes("@") ? `mailto:${profile.email}` : "",
      label: "Email",
      Icon: Mail,
    },
  ];
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${compact ? "" : "mt-8"}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <Icon className="h-4 w-4" aria-hidden /> {label}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-3 py-2 text-sm text-muted-foreground">
              <Icon className="h-4 w-4" aria-hidden /> {label} link pending
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Open to IT support & infrastructure roles
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-lg font-medium text-foreground">{profile.title}</p>
            <p className="font-mono text-sm text-muted-foreground">{profile.focus}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I like figuring out how things actually work — and why they stop working. Most of my
              hands-on experience comes from my practicum with a corporate MIS team, where I set up
              and fixed computers, printers, applications, and LAN connections for everyday users.
              I'm building out my networking fundamentals through Cisco Packet Tracer labs at home.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View My Experience <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                View Projects
              </a>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <FileDown className="h-4 w-4" aria-hidden /> Download Resume
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={160} className="min-w-0">
          <div className="card-surface p-3">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt="Professional headshot"
                className="h-auto w-full rounded-lg object-cover aspect-4/5"
              />
            ) : (
              <Placeholder label="PROFESSIONAL HEADSHOT" className="aspect-4/5" />
            )}
            <dl className="mt-3 grid grid-cols-3 divide-x divide-border rounded-lg bg-surface py-3 text-center">
              <div className="px-2">
                <dt className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  Practicum
                </dt>
                <dd className="text-sm font-semibold">500 hrs</dd>
              </div>
              <div className="px-2">
                <dt className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  Focus
                </dt>
                <dd className="text-sm font-semibold">IT Support</dd>
              </div>
              <div className="px-2">
                <dt className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  Learning
                </dt>
                <dd className="text-sm font-semibold">Networking</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const direction = [
    "How devices and operating systems behave",
    "How computers talk to each other over a LAN",
    "How applications interact with the systems they run on",
    "Why a problem happens before jumping to a fix",
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="About"
        title="Curiosity first, then the fix"
        intro="A short version of how I got here, and where I'm heading."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="min-w-0 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            My interest in technology started casually. As a kid I was the one poking around phones —
            installing games and apps, digging through settings, searching for answers online, and
            eventually learning how to reset a device when I'd broken something. Fixing what I broke
            turned out to be the part I enjoyed most.
          </p>
          <p>
            That curiosity grew into wanting to understand the layer underneath: how computers
            communicate, how applications depend on the system around them, how networks connect
            everything, and why things fail the way they do.
          </p>
          <p>
            My practicum made all of that practical. Working with a corporate MIS technical team
            meant real employee problems — a computer that needed a full reset and reconfiguration, a
            printer that wouldn't respond, an application that wouldn't install, a workstation with
            no connectivity. It also made clear that IT isn't only coding or cybersecurity; a lot of
            it is keeping the technology that people rely on every day working properly.
          </p>
          <p>
            Right now I'm heading toward practical IT: support, systems, and networking. I want
            enough breadth to see how devices, applications, and networks fit together, and enough
            depth to diagnose common problems confidently — and remember the fix the next time.
          </p>
        </Reveal>
        <Reveal delay={80} className="min-w-0">
          <div className="card-surface p-6">
            <h3 className="text-lg font-semibold">What I'm building toward</h3>
            <ul className="mt-4 space-y-3">
              {direction.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-5 font-mono text-xs leading-relaxed text-muted-foreground">
              Working mindset: understand why it failed, fix it, and keep the fix.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Certifications({
  items,
}: {
  items: { name: string; issuer: string; date: string; link?: string }[];
}) {
  return (
    <section id="certifications" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials"
          intro="Only verified credentials are listed here."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 ? (
            <Reveal className="sm:col-span-2 lg:col-span-3">
              <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                <div className="w-full sm:w-48 sm:shrink-0">
                  <Placeholder label="CERTIFICATION" className="aspect-16/10" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Certification details will be added here once the credential names, issuing
                  organizations, dates, and verification links are provided.
                </p>
              </div>
            </Reveal>
          ) : (
            items.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <article className="card-surface h-full p-5 transition-shadow hover:shadow-lg">
                  <h3 className="text-base font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.date}</p>
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      View credential
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-20">
      <div className="card-surface grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <Reveal className="min-w-0">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Resume</p>
          <h2 className="mt-3 text-3xl font-semibold">One page, no padding</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A concise summary of my practicum experience, technical skills, academic project work,
            and self-directed networking labs — formatted to be easy to scan and ATS-friendly.
          </p>
        </Reveal>
        <Reveal delay={80}>
          {profile.resumeFile ? (
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FileDown className="h-4 w-4" aria-hidden /> Download Resume
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-5 py-3 font-mono text-xs text-muted-foreground">
              [RESUME FILE] pending upload
            </span>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const hasEmail = profile.email.includes("@");

  return (
    <section id="contact" className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] uppercase opacity-70">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let's talk</h2>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            I'm looking for entry-level IT support, helpdesk, or infrastructure roles. The fastest
            way to reach me is email — I'm happy to walk through anything on this site in more
            detail.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            {hasEmail ? (
              <>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-ink-foreground px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {profile.email}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard?.writeText(profile.email);
                    setCopied(true);
                    window.setTimeout(() => setCopied(false), 1800);
                  }}
                  className="rounded-md border border-ink-foreground/30 px-4 py-2.5 text-sm transition-colors hover:bg-ink-foreground/10"
                >
                  {copied ? "Copied" : "Copy email"}
                </button>
              </>
            ) : (
              <span className="rounded-md border border-dashed border-ink-foreground/40 px-5 py-2.5 font-mono text-xs opacity-80">
                {profile.email}
              </span>
            )}
            {[
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.github, label: "GitHub", Icon: Github },
            ].map(({ href, label, Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-ink-foreground/30 px-4 py-2.5 text-sm transition-colors hover:bg-ink-foreground/10"
                >
                  <Icon className="h-4 w-4" aria-hidden /> {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border border-dashed border-ink-foreground/40 px-4 py-2.5 text-sm opacity-70"
                >
                  <Icon className="h-4 w-4" aria-hidden /> {label} link pending
                </span>
              ),
            )}
          </div>
        </Reveal>

        <p className="mt-16 border-t border-ink-foreground/15 pt-6 font-mono text-xs opacity-60">
          © {new Date().getFullYear()} {profile.name} — Early-career IT professional.
        </p>
      </div>
    </section>
  );
}
