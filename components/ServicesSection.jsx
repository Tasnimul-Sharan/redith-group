import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  // data/services.js

  const services = [
    {
      title: "Digital Marketing & IT",
      slug: "digital-it",
      shortDesc: "Technology-driven digital transformation",
      image: "/images/services/digital-it.jpg",
    },
    {
      title: "Consumer Brands",
      slug: "consumer-brands",
      shortDesc: "High-quality products for everyday life",
      image: "/images/services/consumer-brands.jpg",
    },
    {
      title: "Agribusiness",
      slug: "agribusiness",
      shortDesc: "Modernizing agriculture at scale",
      image: "/images/services/agribusiness.jpg",
    },
    {
      title: "Retail Chain",
      slug: "retail",
      shortDesc: "Bangladesh’s largest retail ecosystem",
      image: "/images/services/retail.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group"
          >
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={260}
                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.shortDesc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
