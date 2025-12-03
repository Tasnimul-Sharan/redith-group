"use client";

import React from "react";
import Image from "next/image";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaMicrochip,
  FaShoppingCart,
  FaLeaf,
  FaTruck,
} from "react-icons/fa";

export default function RedithLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 antialiased">
      {/* HERO */}
      <header className="relative bg-[url('/images/hero-pattern.jpg')] bg-cover bg-center">
        <div className="backdrop-blur-sm bg-white/60">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Since 2018 • Multisector Conglomerate
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
                  Redith Group — Innovation, Sustainability & Scale
                </h1>
                <p className="mt-4 text-lg text-slate-700 max-w-xl">
                  A diversified Bangladeshi conglomerate with four Strategic
                  Business Units — Digital Marketing &amp; IT, Consumer Brands,
                  Agribusiness and Retail Chain. We build products, services and
                  experiences that matter to millions.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-lg shadow-lg"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-3 border border-slate-200 hover:bg-slate-100 px-5 py-3 rounded-lg"
                  >
                    Learn More
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Stat label="Employees" value="5,000+" />
                  <Stat label="Farmers Enabled" value="25,000+" />
                  <Stat label="Retail Outlets" value="1,200+" />
                  <Stat label="Export Regions" value="20+" />
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-200">
                  <Image
                    src="/images/redith-hero.jpg"
                    alt="Redith overview"
                    width={1200}
                    height={800}
                    className="object-cover w-full h-96 sm:h-[420px]"
                  />
                </div>
                <div className="-mt-12 bg-white/80 p-4 rounded-xl shadow-md border border-slate-100 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-md bg-emerald-50 grid place-items-center">
                    <FaMicrochip className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">
                      AI Innovations for Marketing &amp; Agritech
                    </p>
                    <p className="font-semibold">
                      Proprietary tools for predictive analytics &amp; campaign
                      optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* About */}
        <section id="about" className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">About Redith</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Founded in 2018, Redith has emerged as one of Bangladesh’s
                leading conglomerates. With multinational roots and a bold
                commitment to innovation and sustainability, Redith operates
                across four Strategic Business Units (SBUs) — bringing tech,
                quality products and community-first programs to millions.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <FeatureCard
                  icon={<FaGlobe className="w-6 h-6" />}
                  title="Global Reach"
                  text="Export markets across South Asia, Middle East and Africa"
                />
                <FeatureCard
                  icon={<FaLeaf className="w-6 h-6" />}
                  title="Sustainability"
                  text="Renewable energy, recycling &amp; women empowerment in agribusiness"
                />
                <FeatureCard
                  icon={<FaTruck className="w-6 h-6" />}
                  title="Distribution"
                  text="Robust logistics supporting retail &amp; consumer brand penetration"
                />
                <FeatureCard
                  icon={<FaShoppingCart className="w-6 h-6" />}
                  title="Retail Scale"
                  text="Hypermarkets, neighborhood stores and e-commerce with same-day delivery"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100">
              <h3 className="text-lg font-semibold">Vision &amp; Mission</h3>
              <p className="mt-4 text-slate-600">
                "To be a force of progress by combining innovation, ethics, and
                excellence in everything we do—impacting lives, empowering
                communities, and inspiring industries."
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>
                  Deliver market-leading solutions with reliability and
                  innovation.
                </li>
                <li>
                  Empower people and partners through knowledge and
                  collaboration.
                </li>
                <li>
                  Foster sustainable development across all sectors of
                  operation.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SBUs */}
        <section id="sbus" className="mb-16">
          <h2 className="text-3xl font-bold">Strategic Business Units</h2>
          <p className="mt-2 text-slate-600">
            Four focused divisions delivering end-to-end excellence.
          </p>

          <div className="mt-8 grid lg:grid-cols-4 gap-6">
            <SBUCard
              title="Digital Marketing &amp; IT"
              subtitle="Redith IT &amp; Marketing Agency"
              icon={<FaMicrochip className="w-8 h-8 text-emerald-600" />}
              bullets={[
                "Custom Software",
                "AI &amp; ML Integration",
                "Cloud &amp; Cybersecurity",
                "Digital Strategy &amp; SEO",
              ]}
            />

            <SBUCard
              title="Consumer Brands"
              subtitle="Quality products for everyday life"
              icon={<FaShoppingCart className="w-8 h-8 text-amber-600" />}
              bullets={[
                "Toiletries &amp; Home Care",
                "Electronics &amp; Mobile Devices",
                "Food &amp; Beverages",
                "Paints &amp; Coatings",
              ]}
            />

            <SBUCard
              title="Agribusiness"
              subtitle="Modern farming &amp; agri-tech"
              icon={<FaLeaf className="w-8 h-8 text-green-600" />}
              bullets={[
                "Advanced seeds &amp; irrigation",
                "Livestock &amp; fisheries",
                "Farm mechanization &amp; drones",
                "Financing &amp; training for farmers",
              ]}
            />

            <SBUCard
              title="Retail Chain"
              subtitle="Hypermarkets, neighborhood stores &amp; e-comm"
              icon={<FaTruck className="w-8 h-8 text-sky-600" />}
              bullets={[
                "Smart billing &amp; loyalty",
                "Mobile shopping apps",
                "Same-day delivery",
                "1,200+ outlets nationwide",
              ]}
            />
          </div>
        </section>

        {/* Consumer Brands Deep Dive */}
        <section className="mb-16 bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Consumer Brands — Product Range &amp; Quality
              </h3>
              <p className="mt-3 text-slate-700">
                From personal care to ready-to-cook foods and durable
                electronics, Redith's products are built with safety,
                affordability and local preferences in mind.
              </p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-700">
                <li>• Toiletries: Soaps, shampoos, lotions</li>
                <li>• Home Care: Cleaners, detergents, disinfectants</li>
                <li>• Hygiene: Sanitary napkins, diapers, sanitizers</li>
                <li>• Electronics &amp; Mobile devices</li>
                <li>• Food: Salt, flour, snacks, beverages</li>
                <li>• Paints &amp; Coatings</li>
              </ul>

              <div className="mt-6">
                <a className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg shadow">
                  Explore Brands
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/consumer-1.jpg"
                  alt="consumer product"
                  width={600}
                  height={600}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="/images/consumer-2.jpg"
                  alt="consumer product"
                  width={600}
                  height={600}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 col-span-2">
                <Image
                  src="/images/consumer-3.jpg"
                  alt="consumer product"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-56"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Agribusiness */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/agri-hero.jpg"
                alt="agriculture"
                width={1200}
                height={800}
                className="object-cover w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Agribusiness — Feeding the Future
              </h3>
              <p className="mt-4 text-slate-700">
                As the largest integrator in Bangladesh's ag ecosystem, Redith
                blends technology and on-ground support — from smart seeds and
                irrigation to drone-based crop protection and farm financing.
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Advanced seed distribution &amp; crop nutrition</li>
                <li>• Livestock breeding and feed production</li>
                <li>• Sustainable aquaculture and fish health</li>
                <li>
                  • Mechanization: tractors, harvesters, automated systems
                </li>
                <li>• Satellite &amp; drone tech for precision agriculture</li>
              </ul>

              <div className="mt-6">
                <a className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow">
                  Farmer Programs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability & CSR */}
        <section className="mb-16 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold">Sustainability &amp; CSR</h3>
              <p className="mt-3 text-slate-700">
                Redith operates with strong ethical standards — focusing on
                renewable energy, plastic reduction, women empowerment and
                community health.
              </p>

              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Renewable energy integration in facilities</li>
                <li>• Plastic waste recycling and reduction programs</li>
                <li>• Women empowerment in rural agribusiness</li>
                <li>• Free digital training camps for students</li>
                <li>• Health &amp; nutrition awareness campaigns</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold">Carbon &amp; Energy</h4>
                <p className="text-slate-700 mt-1">
                  Programs for energy efficiency and rooftop solar deployments
                  across facilities.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="font-semibold">Community Impact</h4>
                <p className="text-slate-700 mt-1">
                  Health camps, vocational training and direct farmer financing
                  initiatives.
                </p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                <h4 className="font-semibold">Circularity</h4>
                <p className="text-slate-700 mt-1">
                  Packaging optimization and plastic recycling partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Governance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold">Leadership &amp; Governance</h2>
          <p className="mt-2 text-slate-600">
            Managed by professionals with robust governance practices aligned to
            global standards.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <LeaderCard
              name="Md. A. Rahman"
              role="Chairman"
              imgSrc="/images/leader-1.jpg"
            />
            <LeaderCard
              name="Mrs. Sultana Rahman"
              role="CEO"
              imgSrc="/images/leader-2.jpg"
            />
            <LeaderCard
              name="Engr. Faruq Hossain"
              role="CTO"
              imgSrc="/images/leader-3.jpg"
            />
            <LeaderCard
              name="Dr. Nazia Karim"
              role="Head of CSR"
              imgSrc="/images/leader-4.jpg"
            />
          </div>
        </section>

        {/* Presence & Contact */}
        <section id="contact" className="mb-20 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 border border-slate-100 shadow-md">
            <h3 className="text-2xl font-bold">
              Contact &amp; Corporate Office
            </h3>
            <p className="mt-2 text-slate-700">
              We are headquartered in Dhaka with operational facilities across
              major districts. For partnerships or media inquiries, reach out
              below.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <ContactTile
                icon={<FaMapMarkerAlt className="w-6 h-6" />}
                title="Head Office"
                text={`327, Purbo Rampura Abdullah Bag Jame Mosjid Road, Dhaka, Bangladesh`}
              />
              <ContactTile
                icon={<FaPhoneAlt className="w-6 h-6" />}
                title="Phone"
                text={`+8801765733715`}
              />
              <ContactTile
                icon={<FaEnvelope className="w-6 h-6" />}
                title="Email"
                text={`info@redith.com`}
              />
              <ContactTile
                icon={<FaGlobe className="w-6 h-6" />}
                title="Website"
                text={`www.redithgroup.com`}
              />
            </div>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="hidden lg:block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h4 className="font-semibold">Our Presence</h4>
            <p className="text-slate-700 mt-2">
              Operational facilities across major districts. Export markets
              include South Asia, Middle East and emerging African economies.
            </p>

            <div className="mt-4">
              <Image
                src="/images/map-placeholder.jpg"
                alt="map"
                width={600}
                height={400}
                className="rounded-md object-cover"
              />
            </div>

            <div className="mt-4 text-sm text-slate-600">
              Follow us on social media for updates and product launches.
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* Reusable components */
function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm flex items-start gap-4">
      <div className="w-11 h-11 rounded-md bg-emerald-50 grid place-items-center text-emerald-600">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-600">{text}</div>
      </div>
    </div>
  );
}

function SBUCard({ title, subtitle, icon, bullets = [] }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-slate-50 grid place-items-center">
          {icon}
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm text-slate-500">{subtitle}</div>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-slate-700">
        {Array.isArray(bullets) &&
          bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">•</span>
              <span>{b}</span>
            </li>
          ))}
      </ul>

      <div className="mt-6">
        <a className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  );
}

function LeaderCard({ name, role, imgSrc }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={name}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-slate-100 text-slate-400">
            {name
              ?.split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </div>
      <div className="mt-3 font-semibold">{name}</div>
      <div className="text-sm text-slate-500">{role}</div>
    </div>
  );
}

function ContactTile({ icon, title, text }) {
  return (
    <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm flex items-start gap-4">
      <div className="text-emerald-600">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-600">{text}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        name="name"
        className="col-span-1 sm:col-span-1 rounded-lg border border-slate-200 p-3"
        placeholder="Your name"
      />
      <input
        name="email"
        className="col-span-1 sm:col-span-1 rounded-lg border border-slate-200 p-3"
        placeholder="Email"
      />
      <input
        name="subject"
        className="col-span-2 rounded-lg border border-slate-200 p-3"
        placeholder="Subject"
      />
      <textarea
        name="message"
        className="col-span-2 rounded-lg border border-slate-200 p-3 h-28"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className="col-span-2 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-3 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-white font-bold text-lg">Redith Group</div>
          <p className="mt-3 text-sm">
            327, Purbo Rampura Abdullah Bag Jame Mosjid Road, Dhaka, Bangladesh
          </p>
          <div className="mt-3 text-sm">Phone: +8801765733715</div>
          <div className="mt-1 text-sm">Email: info@redith.com</div>
        </div>

        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 text-sm space-y-2">
            <li>About</li>
            <li>Our SBUs</li>
            <li>Sustainability</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Subscribe</div>
          <p className="text-sm mt-2">Get product updates and company news</p>
          <div className="mt-3 flex gap-2">
            <input
              className="rounded-lg p-2 bg-slate-800 border border-slate-700 text-slate-200 flex-1"
              placeholder="Email address"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Redith Group. All rights reserved.
      </div>
    </footer>
  );
}
