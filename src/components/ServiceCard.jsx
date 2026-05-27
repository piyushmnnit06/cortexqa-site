function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group glass scanline relative overflow-hidden rounded-lg p-6 transition hover:-translate-y-1 hover:border-cortex-teal/45">
      <div className="relative z-10">
        <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-cortex-cyan/25 bg-cortex-cyan/10 text-cortex-cyan">
          <Icon size={23} />
        </div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
