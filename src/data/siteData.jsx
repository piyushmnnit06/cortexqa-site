import {
  Activity,
  Bot,
  Boxes,
  Gauge,
  GitBranch,
  Network,
  RadioTower,
  ShieldCheck,
  TerminalSquare,
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
  eyebrow: "AI-powered QA and Reliability Engineering",
  title: "CortexQA",
  description:
    "We help engineering teams ship resilient software with AI test automation, performance engineering, Kubernetes reliability, chaos experiments, and observability systems that hold up in production.",
};

export const services = [
  {
    title: "AI Test Automation",
    description:
      "Autonomous test strategy, model-assisted coverage, self-healing UI suites, and CI-ready regression intelligence.",
    icon: Bot,
  },
  {
    title: "Performance Engineering",
    description:
      "Capacity models, load testing, latency diagnostics, and tuning programs for high-volume platforms.",
    icon: Gauge,
  },
  {
    title: "Kubernetes Reliability",
    description:
      "Cluster hardening, deployment resilience, autoscaling validation, and production readiness reviews.",
    icon: Boxes,
  },
  {
    title: "API Automation",
    description:
      "Contract testing, service virtualization, data-driven suites, and end-to-end API quality gates.",
    icon: TerminalSquare,
  },
  {
    title: "Chaos Engineering",
    description:
      "Controlled failure experiments that expose fragility before customers or critical workloads do.",
    icon: Zap,
  },
  {
    title: "Observability Engineering",
    description:
      "Logs, metrics, traces, SLOs, and actionable dashboards built for engineering response, not noise.",
    icon: Activity,
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
    title: "AI-first delivery",
    description: "QA systems that reduce manual maintenance while improving release signal quality.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability aligned to journeys",
    description: "Programs designed around business-critical user flows, not isolated test counts.",
    icon: Network,
  },
  {
    title: "Implementation ownership",
    description: "Enterprise consulting with hands-on delivery across frameworks, pipelines, and platforms.",
    icon: GitBranch,
  },
  {
    title: "Production-grade operations",
    description: "Performance, observability, SLO, and resilience practices built for real incidents.",
    icon: RadioTower,
  },
];

export const contactEmail = "hello@cortexqa.com";
