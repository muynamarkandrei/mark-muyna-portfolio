import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/90 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-ink font-mono text-sm font-semibold text-ink-foreground">
            MM
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">Mark Andrei B. Muyna</span>
            <span className="block truncate font-mono text-[11px] text-muted-foreground">
              IT Support • Networking
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
