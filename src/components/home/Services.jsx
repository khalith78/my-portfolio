import SectionMarker from "../common/SectionMarker.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../../data/services.js";

function Services() {
  return (
<section
  id="services"
  className="px-3 pt-0 pb-10 md:px-10 md:pt-4 md:pb-20"
>   
 <SectionMarker number="02" />
      <div className="mx-auto max-w-7xl">
        <h2 id="services-heading" className="mb-12 text-center font-heading text-2xl font-semibold text-accent">
          Services
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
