
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleMenuClose();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 h-16 flex items-stretch shadow-sm">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 px-6 border-r border-white/10 min-w-max cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleMenuClose}
        >
          <img
            src="/logo.png"
            alt="Lakhotia Group"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-stretch list-none flex-1 justify-center pt-4">
          <li>
            <Link
              to="/"
              className="flex items-center px-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b-4 border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="flex items-center px-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b-4 border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              The Project
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="flex items-center px-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b-4 border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Site Gallery
            </Link>
          </li>
        
          <li>
            <Link
              to="/contact"
              className="flex items-center px-5 text-xs font-bold uppercase tracking-widest text-slate-900 border-b-4 border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2 px-4 border-l border-white/10 hidden md:flex">
          <Link
            to="/contact"
            className="px-5 h-10 text-xs font-bold uppercase tracking-widest bg-slate-900 text-white rounded hover:bg-slate-900 transition-colors cursor-pointer flex items-center"
            onClick={handleMenuClose}
          >
            Free Consultation
          </Link>
          <Link
            to="/contact"
            className="px-4 h-10 text-xs font-bold uppercase tracking-wide bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors cursor-pointer flex items-center"
            onClick={handleMenuClose}
          >
            Book Site Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-12 h-16 text-white/75 hover:text-white transition-colors ml-auto cursor-pointer"
          type="button"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-slate-900 border-b-2 border-orange-500 md:hidden">
          <nav className="flex flex-col">
            <Link
              to="/"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-white/65 border-b border-white/10 hover:text-white hover:bg-orange-500/10 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Home
            </Link>
            <Link
              to="/project"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-white/65 border-b border-white/10 hover:text-white hover:bg-orange-500/10 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              The Project
            </Link>
            <Link
              to="/gallery"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-white/65 border-b border-white/10 hover:text-white hover:bg-orange-500/10 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Site Gallery
            </Link>
            <Link
              to="/knowledge"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-white/65 border-b border-white/10 hover:text-white hover:bg-orange-500/10 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Knowledge Centre
            </Link>
            <Link
              to="/contact"
              className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-white/65 border-b border-white/10 hover:text-white hover:bg-orange-500/10 transition-colors cursor-pointer"
              onClick={handleMenuClose}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
