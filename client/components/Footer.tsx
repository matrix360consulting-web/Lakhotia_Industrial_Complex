export function Footer() {
  return (
<footer className="bg-slate-900 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img
                src="/whitelogo.png"
                alt="Lakhotia Group"
                className="h-10 md:h-16 w-auto mb-4"
              />
              <p className="text-xs text-white/40 leading-relaxed">
                A well planned and organised, infrastructure-led industrial
                campus in active development on Ranihati–Amta Road, Howrah, West
                Bengal.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                Navigate
              </h5>
              <ul className="space-y-2 text-xs text-white/40">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    The Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Site Gallery
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                Contact
              </h5>
              <ul className="space-y-3 text-xs text-white/40">
                <li>+91 6293 696009, +91 6293 696008</li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    info@lakhotiaindustrialcomplex.com
                  </a>
                </li>
                <li>www.lakhotiaindustrialcomplex.com</li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                Site Address
              </h5>
              <div className="bg-white overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29466.7!2d87.9570!3d22.5340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf3a9e5c6e4f5%3A0x1!2sRanihati-Amta%20Road%20Howrah!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lakhotia Location Map"
                  ></iframe>
                </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Lakhotia Industrial Complex
                <br />
                Ranihati–Amta Road
                <br />
                Mouza Jalabishwanathpur
                <br />
                Howrah, West Bengal
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs text-white/20">
              © 2026 Lakhotia Industrial Complex Private Limited · CIN:
              U68200WB2017PTC219104
            </p>
            <p className="text-xs text-white/20">
              Site developed by Matrix360.
            </p>
          </div>
        </div>
      </footer>
        );
}