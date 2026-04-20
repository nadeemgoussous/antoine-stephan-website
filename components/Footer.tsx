export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-h3 mb-4">Antoine Stephan</h3>
            <p className="text-body-sm text-gray-300">
              Creating timeless spaces with passion and expertise.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif mb-4">Contact</h4>
            <ul className="space-y-2 text-body-sm text-gray-300">
              <li>
                <a href="mailto:stephan.dec@hotmail.com" className="hover:text-accent transition-colors">
                  stephan.dec@hotmail.com
                </a>
              </li>
              <li>
                <a href="tel:+962795535893" className="hover:text-accent transition-colors">
                  +962 79 553 5893
                </a>
              </li>
              <li>Deir Ghbar, Amman, Jordan</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-serif mb-4">Follow</h4>
            <ul className="space-y-2 text-body-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-body-sm text-gray-400">
          <p>&copy; {currentYear} Antoine Stephan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
