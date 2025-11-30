import Image from "next/image";
import PageHeader from "../components/PageHeader";

export default function WhyRedith() {
  return (
    <div>
      <PageHeader
        title="Why Redith"
        subtitle="Excellence. Innovation. Trust."
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          Choosing Redith means partnering with a forward-thinking, innovative,
          and socially responsible conglomerate. Our approach combines
          operational excellence with a focus on sustainability, technology, and
          customer satisfaction.
        </p>

        <h2 className="text-2xl font-bold mt-10">Core Strengths</h2>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Market Leadership Across Multiple Industries</li>
          <li>• Commitment to Innovation & Technology</li>
          <li>• Strong Brand Equity & Customer Trust</li>
          <li>• Sustainable & Ethical Business Practices</li>
          <li>• Robust Operational Excellence & Talent</li>
        </ul>

        <Image
          src="/images/placeholder.jpg"
          alt="Why Redith"
          width={1000}
          height={600}
          className="rounded mt-10 shadow"
        />
      </section>
    </div>
  );
}
