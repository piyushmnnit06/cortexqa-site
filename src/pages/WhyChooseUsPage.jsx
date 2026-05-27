import PageHeader from "../components/PageHeader.jsx";
import { reasons } from "../data/siteData.jsx";

function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="The difference is an AI-first operating model, not another testing checklist."
        description="We focus on measurable engineering outcomes: smarter coverage, fewer escaped defects, stronger production readiness, faster diagnosis, and releases teams can trust."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="glass flex items-start gap-4 rounded-lg p-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-cortex-amber/12 text-cortex-amber">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{reason.title}</h2>
                  <p className="mt-3 leading-7 text-slate-300">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default WhyChooseUsPage;
