export const Footer = () => {
  return (
    <footer className="border-t border-slate-200/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">EET-GS Lab</p>
          <p className="mt-2 max-w-md text-slate-400">
            Advancing equitable, resilient, and low-carbon power systems for the Global South.
          </p>
        </div>
        <div className="space-y-2 text-slate-400">
          <p>© 2024 Energy Equity & Transition Lab</p>
          <p>Hosted on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
};
