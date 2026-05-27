import PageHeader from "../components/PageHeader.jsx";
import { technologyGroups } from "../data/siteData.jsx";

function TechnologiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technologies"
        title="High-demand technologies for AI-era QA and reliability."
        description="CortexQA works across agentic QA, automation, API quality, performance, Kubernetes reliability, observability, and delivery infrastructure."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map((group) => (
            <article key={group.title} className="glass rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cortex-teal/50 hover:text-cortex-teal">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default TechnologiesPage;
