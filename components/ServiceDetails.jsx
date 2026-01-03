import Image from "next/image";
import PageHeader from "./PageHeader";

export default function ServiceDetails({ service }) {
  return (
    <div>
      <PageHeader
        title={service.header.title}
        subtitle={service.header.subtitle}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {service.sections.map((section, index) => (
          <div key={index} className="mb-12">
            {section.title && (
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            )}

            {section.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {section.description}
              </p>
            )}

            {section.list && (
              <ul className="space-y-2 text-gray-700">
                {section.list.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {service.image && (
          <Image
            src={service.image}
            alt={service.header.title}
            width={1000}
            height={600}
            className="rounded shadow"
          />
        )}
      </section>
    </div>
  );
}
