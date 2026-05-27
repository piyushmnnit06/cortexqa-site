import { RadioTower } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { contactEmail } from "../data/siteData.jsx";

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Build a stronger quality and reliability program."
        description="Bring us into a release, reliability review, automation rebuild, or platform hardening initiative."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="glass grid gap-10 rounded-lg p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Start with the risk that matters most.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              We will map the risk, define the plan, and implement the engineering systems that keep teams moving.
            </p>
            <div className="mt-8 flex items-center gap-3 text-slate-300">
              <RadioTower className="text-cortex-cyan" size={22} />
              <a className="transition hover:text-cortex-cyan" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
