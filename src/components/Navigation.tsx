const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "members", label: "Lab Members" },
  { id: "contact", label: "Contact & Collaboration" },
];

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
            EET
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">EET-GS Lab</p>
            <p className="text-lg font-semibold">Energy Equity & Transition</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-emerald-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-emerald-200"
        >
          Collaborate
        </a>
      </nav>
    </header>
  );
};
