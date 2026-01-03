import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
import About from "@/components/About";
export default function AboutPage() {
  const meta = {
    title: "About Us | Redith Group – Innovation, Industry & Impact",
    description:
      "Learn about Redith Group, one of Bangladesh’s leading conglomerates operating across Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail Chain. Driven by innovation, AI, and sustainable growth.",
    keywords:
      "Redith Group, About Redith, Bangladeshi conglomerate, Digital IT Bangladesh, Consumer Brands Bangladesh, Agribusiness Bangladesh, Retail Chain Bangladesh, AI driven company, sustainable business",
    author: "Redith Group",
    url: "https://www.redithgroup.com/about",
    image: "https://www.redithgroup.com/about/redith-about-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Navbar hasBackground={true} />

      <HeroSection
        hero={{
          title: "About Redith Group",
          subtitle: "Building the Future Through Innovation & Trust",
          backgroundImage: "/about-bg.jpg",
        }}
      />

      <About />
      <VisionMission />
      {/* Future: Leadership | SBUs | CSR */}
    </div>
  );
}
