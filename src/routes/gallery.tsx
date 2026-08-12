import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { PracticumGallery } from "@/components/portfolio/PracticumGallery";
import { SectionHeading } from "@/components/portfolio/Reveal";

const title = "Practicum Gallery — Mark Andrei B. Muyna";
const description =
  "Photos from Mark Andrei B. Muyna's IT support practicum at C&E Publishing, Inc., grouped by hardware, PC and Windows setup, software, networking, and user support work.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Practicum gallery"
          title="Photos from the workbench"
          intro="Documentation from my practicum with the MIS technical team at C&E Publishing, Inc., grouped by the kind of work involved."
        />
        <div className="mt-10">
          <PracticumGallery />
        </div>
        <div className="mt-12">
          <Link
            to="/"
            hash="experience"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to experience
          </Link>
        </div>
      </main>
    </div>
  );
}
