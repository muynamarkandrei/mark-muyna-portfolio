import { useState } from "react";
import { Reveal } from "./Reveal";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/portfolio-data";
import { Placeholder } from "./Sections";

export function PracticumGallery() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const shown = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <div>
      <Reveal delay={60}>
        <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap gap-2">
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
          <Reveal key={`${item.category}-${item.src}`} delay={i * 50}>
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
  );
}
