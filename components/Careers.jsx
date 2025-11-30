// import PageHeader from "../components/PageHeader";

import PageHeader from "./PageHeader";

export default function Careers() {
  return (
    <div>
      <PageHeader title="Careers at Redith" subtitle="Join our talented team" />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed">
          Redith Group is always looking for passionate, innovative, and skilled
          individuals who want to make a difference. We offer a collaborative
          work environment, professional growth, and exciting challenges across
          our diverse business units.
        </p>

        <h2 className="text-2xl font-bold mt-10">Why Work With Us</h2>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li>• Dynamic and inclusive work culture</li>
          <li>• Learning and development opportunities</li>
          <li>• Career advancement across multiple divisions</li>
          <li>• Competitive compensation & benefits</li>
          <li>• Contribution to meaningful projects impacting society</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10">Open Positions</h2>
        <p className="text-gray-700 mt-2">
          Check our careers portal or send your CV to{" "}
          <a
            href="mailto:careers@redith.com"
            className="text-primary underline"
          >
            careers@redith.com
          </a>
        </p>
      </section>
    </div>
  );
}
