import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import { hero, reasons, services, technologies } from "../data/siteData.jsx";

const heroImage = `${import.meta.env.BASE_URL}cortexqa-hero.png`;

function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(92vh-5rem)] overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="grid-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-carbon to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cortex-teal/25 bg-cortex-teal/10 px-3 py-2 text-sm text-cortex-teal">
              <ShieldCheck size={16} />
              {hero.eyebrow}
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{hero.description}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cortex-teal px-6 font-semibold text-slate-950 transition hover:bg-cortex-cyan">
                Explore services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-6 font-semibold text-white transition hover:border-cortex-amber/60 hover:text-cortex-amber">
                Start a reliability review
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-amber">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Quality engineering for AI-speed delivery.</h2>
          </div>
          <div className="glass rounded-lg p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              CortexQA partners with product and platform teams to modernize testing, strengthen reliability, and make production signals actionable.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-teal">Services</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Engineering services built for release confidence.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cortex-teal hover:text-cortex-cyan">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-rose">Technologies</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Tooling across test, platform, and telemetry.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.slice(0, 8).map((tech) => (
              <div key={tech} className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium text-slate-200">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-panel py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-amber">Why Choose Us</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="glass flex items-start gap-4 rounded-lg p-6">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-cortex-amber/12 text-cortex-amber">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{reason.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
