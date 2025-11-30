import Image from "next/image";
import PageHeader from "./PageHeader";
// import PageHeader from "../components/PageHeader";

const articles = [
  {
    title: "Redith Launches New IT Platform",
    date: "Nov 1, 2025",
    img: "/images/placeholder.jpg",
  },
  {
    title: "Consumer Brands Division Wins Award",
    date: "Oct 15, 2025",
    img: "/images/placeholder.jpg",
  },
  {
    title: "Agribusiness Expansion in Rural Areas",
    date: "Sep 30, 2025",
    img: "/images/placeholder.jpg",
  },
];

export default function News() {
  return (
    <div>
      <PageHeader title="News & Media" subtitle="Latest updates from Redith" />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="rounded shadow overflow-hidden bg-white">
              <Image
                src={article.img}
                alt={article.title}
                width={400}
                height={250}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{article.date}</p>
                <p className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vehicula urna id justo.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
