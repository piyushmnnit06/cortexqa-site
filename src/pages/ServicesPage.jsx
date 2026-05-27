import PageHeader from "../components/PageHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/siteData.jsx";

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Consulting services for quality, scale, and resilience."
        description="Each service can stand alone or fit into a larger quality and reliability transformation."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
