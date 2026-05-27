import {
  Activity,
  ArrowRight,
  Bot,
  Boxes,
  Gauge,
  GitBranch,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "AI Test Automation",
    description: "Autonomous test strategy, model-assisted coverage, self-healing UI suites, and CI-ready regression intelligence.",
    icon: Bot,
  },
  {
    title: "Performance Engineering",
    description: "Capacity models, load testing, latency diagnostics, and tuning programs for high-volume platforms.",
    icon: Gauge,
  },
  {
    title: "Kubernetes Reliability",
    description: "Cluster hardening, deployment resilience, autoscaling validation, and production readiness reviews.",
    icon: Boxes,
  },
  {
    title: "API Automation",
    description: "Contract testing, service virtualization, data-driven suites, and end-to-end API quality gates.",
    icon: TerminalSquare,
  },
  {
    title: "Chaos Engineering",
    description: "Controlled failure experiments that expose fragility before customers or critical workloads do.",
    icon: Zap,
  },
  {
    title: "Observability Engineering",
    description: "Logs, metrics, traces, SLOs, and actionable dashboards built for engineering response, not noise.",
    icon: Activity,
  },
];

const technologies = [
  "Playwright",
  "Cypress",
  "Selenium",
  "JMeter",
  "k6",
  "Postman",
  "REST Assured",
  "Kubernetes",
  "Docker",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Datadog",
  "GitHub Actions",
  "Jenkins",
  "Terraform",
];

const reasons = [
  "AI-first QA systems that reduce manual test maintenance.",
  "Reliability programs aligned to business-critical user journeys.",
  "Enterprise consulting with hands-on implementation ownership.",
  "Production-grade observability, performance, and resilience practices.",
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-slate-100">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#hero" className="flex items-center gap-3" aria-label="CortexQA home">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-cortex-teal/35 bg-cortex-teal/10 text-cortex-teal shadow-glow">
              <Sparkles size={20} />
            </span>
            <span className="text-lg font-semibold tracking-wide">CortexQA</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cortex-teal" href="#about">About</a>
            <a className="transition hover:text-cortex-teal" href="#services">Services</a>
            <a className="transition hover:text-cortex-teal" href="#technologies">Technologies</a>
            <a className="transition hover:text-cortex-teal" href="#contact">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-cortex-teal px-4 text-sm font-semibold text-slate-950 transition hover:bg-cortex-cyan"
          >
            Talk to us <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      <section id="hero" className="relative min-h-[92vh] overflow-hidden pt-24">
        <img
          src="./cortexqa-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="grid-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-carbon to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cortex-teal/25 bg-cortex-teal/10 px-3 py-2 text-sm text-cortex-teal">
              <ShieldCheck size={16} />
              AI-powered QA and Reliability Engineering
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              CortexQA
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help engineering teams ship resilient software with AI test automation,
              performance engineering, Kubernetes reliability, chaos experiments, and
              observability systems that hold up in production.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cortex-teal px-6 font-semibold text-slate-950 transition hover:bg-cortex-cyan"
              >
                Explore services <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-6 font-semibold text-white transition hover:border-cortex-amber/60 hover:text-cortex-amber"
              >
                Start a reliability review
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-amber">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Quality engineering for AI-speed delivery.
            </h2>
          </div>
          <div className="glass rounded-lg p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              CortexQA partners with product and platform teams to modernize testing,
              strengthen reliability, and make production signals actionable. We combine
              consulting strategy with implementation across automation frameworks,
              cloud-native infrastructure, performance labs, and SLO-driven operations.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-teal">Services</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Engineering services built for release confidence.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group glass scanline relative overflow-hidden rounded-lg p-6 transition hover:-translate-y-1 hover:border-cortex-teal/45">
                  <div className="relative z-10">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-cortex-cyan/25 bg-cortex-cyan/10 text-cortex-cyan">
                      <Icon size={23} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technologies" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-rose">Technologies</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Tooling across test, platform, and telemetry.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div key={tech} className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-cortex-teal/50 hover:text-cortex-teal">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-panel py-20">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-amber">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Senior reliability expertise without theater.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason} className="glass flex items-start gap-4 rounded-lg p-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-cortex-amber/12 text-cortex-amber">
                  {index % 2 === 0 ? <Network size={20} /> : <GitBranch size={20} />}
                </div>
                <p className="leading-7 text-slate-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="glass grid gap-10 rounded-lg p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-teal">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Build a stronger quality and reliability program.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Bring us into a release, reliability review, automation rebuild, or platform
              hardening initiative. We will map the risk, define the plan, and implement
              the engineering systems that keep teams moving.
            </p>
            <div className="mt-8 flex items-center gap-3 text-slate-300">
              <RadioTower className="text-cortex-cyan" size={22} />
              <a className="transition hover:text-cortex-cyan" href="mailto:hello@cortexqa.com">
                hello@cortexqa.com
              </a>
            </div>
          </div>
          <form className="grid gap-4">
            <input className="h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cortex-teal" placeholder="Name" />
            <input className="h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cortex-teal" placeholder="Work email" type="email" />
            <select className="h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cortex-teal">
              <option>AI Test Automation</option>
              <option>Performance Engineering</option>
              <option>Kubernetes Reliability</option>
              <option>API Automation</option>
              <option>Chaos Engineering</option>
              <option>Observability Engineering</option>
            </select>
            <textarea className="min-h-32 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cortex-teal" placeholder="What are you trying to improve?" />
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cortex-teal px-6 font-semibold text-slate-950 transition hover:bg-cortex-cyan" type="button">
              Send inquiry <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 CortexQA. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="transition hover:text-cortex-teal" href="#services">Services</a>
            <a className="transition hover:text-cortex-teal" href="#technologies">Technologies</a>
            <a className="transition hover:text-cortex-teal" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
