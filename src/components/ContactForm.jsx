import { ArrowRight } from "lucide-react";
import { services } from "../data/siteData.jsx";

function ContactForm() {
  return (
    <form className="grid gap-4">
      <input className="h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cortex-teal" placeholder="Name" />
      <input className="h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cortex-teal" placeholder="Work email" type="email" />
      <select className="h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cortex-teal">
        {services.map((service) => (
          <option key={service.title}>{service.title}</option>
        ))}
      </select>
      <textarea className="min-h-32 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cortex-teal" placeholder="What are you trying to improve?" />
      <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cortex-teal px-6 font-semibold text-slate-950 transition hover:bg-cortex-cyan" type="button">
        Send inquiry <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default ContactForm;
