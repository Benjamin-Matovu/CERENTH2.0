'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/80 backdrop-blur-[12px] py-4 shadow-sm border-b border-border-light"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-main flex items-center justify-between">
          <Link href="/" className="font-bold text-h3 text-charcoal">
            Cerenth
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="/services" className="text-body text-charcoal/80 hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-body text-charcoal/80 hover:text-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-body text-charcoal/80 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-dusty-rose text-charcoal font-bold rounded-button shadow-cta-glow transition-all hover:bg-dusty-rose/80 hover:shadow-[0_0_30px_#D8B4C080]"
            >
              Book a Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {!isMobileMenuOpen && (
            <button
              className="md:hidden text-charcoal focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ivory flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              <Link href="/services" onClick={toggleMobileMenu} className="text-h3 text-charcoal hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/about" onClick={toggleMobileMenu} className="text-h3 text-charcoal hover:text-gold transition-colors">
                About
              </Link>
              <Link href="/contact" onClick={toggleMobileMenu} className="text-h3 text-charcoal hover:text-gold transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-dusty-rose text-charcoal font-bold rounded-button shadow-cta-glow"
              >
                Book a Free Audit
              </Link>
            </nav>
            
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 text-charcoal p-2 z-50"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
