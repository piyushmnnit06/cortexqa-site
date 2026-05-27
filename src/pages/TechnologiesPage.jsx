import PageHeader from "../components/PageHeader.jsx";
import { technologies } from "../data/siteData.jsx";

function TechnologiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technologies"
        title="Tools we use to build reliable software delivery systems."
        description="CortexQA works across automation, performance, Kubernetes, observability, and delivery infrastructure."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech} className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-4 text-center text-sm font-medium text-slate-200 transition hover:border-cortex-teal/50 hover:text-cortex-teal">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TechnologiesPage;
