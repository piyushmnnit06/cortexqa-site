function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-panel px-5 py-20 lg:px-8">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cortex-teal">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
