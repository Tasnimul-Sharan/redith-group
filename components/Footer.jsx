export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-white font-semibold text-lg">Redith Group</h2>
          <p className="mt-3 text-sm leading-relaxed">
            A leading Bangladeshi conglomerate driving innovation,
            sustainability, and progress.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg">Quick Links</h2>
          <ul className="space-y-2 mt-3 text-sm">
            <li>About</li>
            <li>SBU Divisions</li>
            <li>Sustainability</li>
            <li>Leadership</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg">Contact</h2>
          <p className="mt-3 text-sm">
            327, Purbo Rampura Abdullah Bag Dhaka, Bangladesh Phone: 01765733715
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Redith Group — All Rights Reserved.
      </p>
    </footer>
  );
}
