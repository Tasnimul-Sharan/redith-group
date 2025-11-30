import Image from "next/image";
import About from "@/components/About";
import DigitalIT from "@/components/DigitalIT";
import ConsumerBrands from "@/components/ConsumerBrands";
import Agribusiness from "@/components/Agribusiness";
import Retail from "@/components/Retail";
import Sustainability from "@/components/Sustainability";
import Leadership from "@/components/Leadership";
import WhyRedith from "@/components/WhyRedith";
import Careers from "@/components/Careers";
import News from "@/components/News";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-28 text-center">
        <h1 className="text-4xl font-bold">Redith Group</h1>
        <p className="mt-4 text-lg opacity-90">
          Innovating for a Better Tomorrow
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">About Redith</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2018, Redith has emerged as one of the most prominent
          conglomerates in Bangladesh. With a multinational heritage and a bold
          vision for innovation and sustainability, Redith continues to deliver
          outstanding value across its Strategic Business Units (SBUs).
        </p>
      </section>

      <About />
      <DigitalIT />
      <ConsumerBrands />
      <Agribusiness />
      <Retail />
      <Sustainability />
      <Leadership />
      <WhyRedith />
      <Careers />
      <News />
      <Contact />

      {/* SBUs */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10">Our SBUs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SbuCard title="Digital Marketing & IT" link="/sbu/digital-it" />
          <SbuCard title="Consumer Brands" link="/sbu/consumer-brands" />
          <SbuCard title="Agribusiness" link="/sbu/agribusiness" />
          <SbuCard title="Retail Chain" link="/sbu/retail" />
        </div>
      </section>
    </div>
  );
}

function SbuCard({ title, link }) {
  return (
    <a
      href={link}
      className="border p-6 rounded-lg shadow hover:shadow-lg transition"
    >
      <Image
        src="/images/placeholder.jpg"
        width={400}
        height={300}
        className="rounded"
        alt="SBU"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
    </a>
  );
}
