import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/siteData.jsx";

const navClass = ({ isActive }) =>
  `transition ${isActive ? "text-cortex-teal" : "text-slate-300 hover:text-cortex-teal"}`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="CortexQA home" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md border border-cortex-teal/35 bg-cortex-teal/10 text-cortex-teal shadow-glow">
            <Sparkles size={20} />
          </span>
          <span className="text-lg font-semibold tracking-wide">CortexQA</span>
        </NavLink>

        <div className="hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-cortex-teal px-4 text-sm font-semibold text-slate-950 transition hover:bg-cortex-cyan"
          >
            Talk to us <ArrowRight size={16} />
          </NavLink>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-200 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-carbon/95 px-5 py-4 md:hidden">
          <div className="grid gap-4 text-base">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
