import PageHeader from "../components/PageHeader.jsx";

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Quality engineering for AI-speed delivery."
        description="CortexQA helps product, QA, SRE, and platform teams design engineering systems that protect delivery speed without masking production risk."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Modernize brittle regression suites into maintainable, AI-assisted automation programs.",
            "Connect test strategy, performance, observability, and reliability into one operating model.",
            "Build practical quality gates that work inside real CI/CD and cloud-native environments.",
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
