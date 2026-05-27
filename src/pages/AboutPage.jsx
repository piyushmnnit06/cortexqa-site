import PageHeader from "../components/PageHeader.jsx";

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About CortexQA"
        title="An AI-first reliability partner for teams shipping serious software."
        description="CortexQA helps product, QA, SRE, and platform teams replace fragmented testing with an intelligent quality system that sees risk, learns from production, and improves every release."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Turn brittle regression suites into AI-assisted automation programs that generate, heal, and explain test coverage.",
            "Connect test strategy, performance, observability, chaos, and Kubernetes reliability into one operating model.",
            "Build practical quality gates that learn from telemetry, incidents, code change, and business-critical user journeys.",
          ].map((item) => (
            <div key={item} className="glass rounded-lg p-6">
              <p className="leading-8 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
