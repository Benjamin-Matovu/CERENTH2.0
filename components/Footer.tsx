import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-border-light section-padding pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="font-bold text-h3 text-charcoal mb-4">
              Cerenth
            </Link>
            <p className="text-body text-charcoal/70 mb-6 max-w-[280px]">
              Securing the infrastructure Africa builds on.
            </p>
            <p className="text-caption text-charcoal/70 mt-auto">
              © 2026 Cerenth Ltd. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/services" className="text-body text-charcoal hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-body text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-body text-charcoal hover:text-gold transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="text-body text-gold font-bold hover:opacity-80 transition-opacity mt-2">
              Book a Free Audit
            </Link>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col items-start space-y-4">
            <a href="mailto:info@cerenth.org" className="text-body text-charcoal hover:text-gold transition-colors flex items-center gap-3">
              <span className="text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              info@cerenth.org
            </a>
            <a href="https://linkedin.com/company/cerenth" target="_blank" rel="noopener noreferrer" className="text-body text-charcoal hover:text-gold transition-colors flex items-center gap-3">
              <span className="text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              linkedin.com/company/cerenth
            </a>
            <div className="text-body text-charcoal flex items-center gap-3">
              <span className="text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              Kampala, Uganda
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-light text-center">
          <p className="text-body text-charcoal/70">
            Built in Uganda. Securing Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
