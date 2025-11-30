import Image from "next/image";
import PageHeader from "../components/PageHeader";

const leaders = [
  {
    name: "Mr. John Doe",
    position: "Chairman",
    img: "/images/placeholder.jpg",
  },
  { name: "Ms. Jane Smith", position: "CEO", img: "/images/placeholder.jpg" },
  { name: "Mr. Ali Khan", position: "CFO", img: "/images/placeholder.jpg" },
  { name: "Ms. Sara Rahman", position: "COO", img: "/images/placeholder.jpg" },
];

export default function Leadership() {
  return (
    <div>
      <PageHeader
        title="Leadership & Governance"
        subtitle="Driving Redith forward"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          Redith Group thrives under visionary leadership and strong corporate
          governance, fostering transparency, accountability, and sustainable
          growth.
        </p>

        <h2 className="text-2xl font-bold mt-10">Our Leadership Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {leaders.map((leader, idx) => (
            <div key={idx} className="text-center">
              <Image
                src={leader.img}
                alt={leader.name}
                width={250}
                height={250}
                className="rounded-full mx-auto shadow"
              />
              <h3 className="mt-4 text-xl font-semibold">{leader.name}</h3>
              <p className="text-gray-500">{leader.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
