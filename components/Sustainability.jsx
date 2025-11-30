import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../components/PageHeader";

export default function Sustainability() {
  return (
    <div>
      <PageHeader
        title="Sustainability & CSR"
        subtitle="Building a better tomorrow"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          At Redith Group, sustainability and corporate social responsibility
          are integral to our business philosophy. We focus on environmental
          stewardship, community development, ethical practices, and employee
          welfare to ensure long-term value for society.
        </p>

        <h2 className="text-2xl font-bold mt-10">Key Initiatives</h2>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Renewable Energy Adoption & Green Operations</li>
          <li>• Education & Skill Development Programs</li>
          <li>• Healthcare & Community Outreach</li>
          <li>• Employee Volunteering & Engagement</li>
          <li>• Sustainable Supply Chain Practices</li>
        </ul>

        <Image
          src="/images/placeholder.jpg"
          alt="Sustainability"
          width={1000}
          height={600}
          className="rounded mt-10 shadow"
        />
      </section>
    </div>
  );
}
