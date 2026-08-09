import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero, About, Certifications, ResumeSection, Contact } from "@/components/portfolio/Sections";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { CaseStudies, Skills } from "@/components/portfolio/CaseStudies";
import { certifications } from "@/lib/portfolio-data";

const title = "Mark Andrei B. Muyna — Early-Career IT Professional";
const description =
  "Portfolio of Mark Andrei B. Muyna: IT support, troubleshooting, and networking experience from a corporate MIS practicum, academic capstone work, and Cisco Packet Tracer home labs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CaseStudies />
        <Skills />
        <Certifications items={certifications} />
        <ResumeSection />
        <Contact />
      </main>
    </div>
  );
}
