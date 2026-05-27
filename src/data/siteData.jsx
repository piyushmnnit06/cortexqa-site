import {
  Activity,
  BrainCircuit,
  Bot,
  Boxes,
  Cpu,
  DatabaseZap,
  FlaskConical,
  Gauge,
  GitBranch,
  Network,
  RadioTower,
  Radar,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Technologies", path: "/technologies" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Contact", path: "/contact" },
];

export const hero = {
  eyebrow: "AI-first QA and Reliability Engineering",
  title: "CortexQA",
  description:
    "We turn quality engineering into an intelligent operating system: AI agents discover risk, generate tests, read telemetry, pressure-test infrastructure, and help teams release with production confidence.",
  proofPoints: ["AI-native quality strategy", "Autonomous test generation", "Reliability intelligence"],
};

export const services = [
  {
    title: "AI Test Automation",
    description:
      "Agent-assisted test design, self-healing UI suites, generated API checks, risk-based coverage, and CI-ready regression intelligence.",
    icon: Bot,
  },
  {
    title: "Performance Engineering",
    description:
      "AI-assisted workload modeling, load testing, bottleneck diagnosis, and tuning programs for high-volume platforms.",
    icon: Gauge,
  },
  {
    title: "Kubernetes Reliability",
    description:
      "Cluster hardening, deployment resilience, autoscaling validation, AI-driven runbooks, and production readiness reviews.",
    icon: Boxes,
  },
  {
    title: "API Automation",
    description:
      "Contract testing, service virtualization, generated assertions, data-driven suites, and end-to-end API quality gates.",
    icon: TerminalSquare,
  },
  {
    title: "Chaos Engineering",
    description:
      "Controlled failure experiments, AI-assisted blast-radius analysis, and resilience scoring before customers feel impact.",
    icon: Zap,
  },
  {
    title: "Observability Engineering",
    description:
      "Logs, metrics, traces, SLOs, anomaly detection, and actionable dashboards built for engineering response, not noise.",
    icon: Activity,
  },
];

export const aiToolchain = [
  {
    title: "Agentic Test Design",
    description: "LLM-assisted scenario mining from user stories, production traces, API contracts, and defect history.",
    icon: BrainCircuit,
  },
  {
    title: "Risk Intelligence",
    description: "Release-risk heatmaps that combine code change, coverage, incidents, SLO burn, and business impact.",
    icon: Radar,
  },
  {
    title: "Self-Healing Automation",
    description: "Locator recovery, flaky-test triage, test data reasoning, and automated failure summaries for CI.",
    icon: Workflow,
  },
  {
    title: "Telemetry Copilots",
    description: "AI-assisted log, metric, and trace analysis that turns production signals into test and reliability actions.",
    icon: Cpu,
  },
  {
    title: "Synthetic Data Labs",
    description: "Privacy-aware data generation for API, UI, performance, and edge-case testing at scale.",
    icon: DatabaseZap,
  },
  {
    title: "Experiment Engines",
    description: "Chaos, load, and resilience experiments orchestrated with clear hypotheses and measurable outcomes.",
    icon: FlaskConical,
  },
];

export const deliveryFlow = [
  {
    step: "01",
    title: "Discover Risk",
    description: "Map releases, incidents, user journeys, data paths, and infrastructure pressure points.",
  },
  {
    step: "02",
    title: "Model Intelligence",
    description: "Build AI-assisted coverage, risk scoring, telemetry correlation, and automation strategy.",
  },
  {
    step: "03",
    title: "Engineer Systems",
    description: "Implement test frameworks, performance labs, reliability experiments, and observability workflows.",
  },
  {
    step: "04",
    title: "Operate Confidence",
    description: "Embed dashboards, quality gates, SLO feedback, and continuous improvement into delivery.",
  },
];

export const technologies = [
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

export const reasons = [
  {
    title: "AI-first operating model",
    description: "Quality systems that use AI to find risk, explain failures, generate checks, and reduce maintenance.",
    icon: ShieldCheck,
  },
  {
    title: "Business-flow reliability",
    description: "Programs designed around revenue paths, customer journeys, platform dependencies, and SLO impact.",
    icon: Network,
  },
  {
    title: "Hands-on delivery",
    description: "Consulting that ships working frameworks, pipelines, dashboards, experiments, and runbooks.",
    icon: GitBranch,
  },
  {
    title: "Production intelligence",
    description: "Performance, observability, SLO, and resilience practices connected to real production signals.",
    icon: RadioTower,
  },
];

export const contactEmail = "hello@cortexqa.com";
