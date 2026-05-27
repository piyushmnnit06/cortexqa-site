import { NavLink } from "react-router-dom";
import { navItems } from "../data/siteData.jsx";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 CortexQA. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          {navItems.slice(1).map((item) => (
            <NavLink key={item.path} className="transition hover:text-cortex-teal" to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
