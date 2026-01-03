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
import LandingPage from "@/components/LandingPage";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <LandingPage />

      <AboutSection />

      {/* <About /> */}
      {/* <DigitalIT />
      <ConsumerBrands />
      <Agribusiness />
      <Retail /> */}
      <ServicesSection />
      <Sustainability />
      <Leadership />
      <WhyRedith />
      <Careers />
      <News />
      <Contact />
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
