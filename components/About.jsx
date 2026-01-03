import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div>
      {/* <PageHeader
        title="About Redith Group"
        subtitle="Innovation • Progress • Sustainability"
      /> */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="leading-relaxed text-gray-700 text-lg">
          Founded in 2018, Redith has emerged as one of the most prominent
          conglomerates in Bangladesh. With a multinational heritage and a bold
          vision for innovation and sustainability, Redith continues to deliver
          outstanding value through four dynamic Strategic Business Units
          (SBUs): Digital Marketing & IT, Consumer Brands, Agribusiness, and
          Retail Chain.
        </p>

        <p className="leading-relaxed text-gray-700 text-lg mt-6">
          Over the years, Redith has earned the trust of millions by combining
          technological excellence, product quality, and customer-centric
          approaches across all sectors it operates in.
        </p>
      </section>
    </div>
  );
}
