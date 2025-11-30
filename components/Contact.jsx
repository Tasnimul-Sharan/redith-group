// import PageHeader from "../components/PageHeader";

import PageHeader from "./PageHeader";

export default function Contact() {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We’d love to hear from you" />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <form className="space-y-6 bg-white p-8 rounded shadow">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-gray-700 space-y-2">
          <p>📍 Headquarters: Dhaka, Bangladesh</p>
          <p>📞 Phone: +880 1234 567890</p>
          <p>✉️ Email: info@redith.com</p>
        </div>
      </section>
    </div>
  );
}
