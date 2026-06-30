'use client';

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="eyebrow mb-6">GET IN TOUCH</p>
          <h1 className="text-h1 text-charcoal mb-6">
            Let's talk about your security posture
          </h1>
          <p className="text-body-lg text-charcoal/70 max-w-3xl mx-auto">
            Book a free security audit call. No sales pitch. We review your current setup, identify the most critical gaps, and tell you exactly what needs to be fixed — whether you work with us or not.
          </p>
        </motion.div>
      </section>

      {/* Contact Layout */}
      <section className="section-padding pb-32">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* Left Column — Contact Form (60%) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[60%] overflow-hidden"
            >
              <div className="bg-white border border-border-light rounded-card p-6 sm:p-10 shadow-sm overflow-x-hidden">
                <ContactForm />
              </div>
            </motion.div>
            
            {/* Right Column — Contact Info (40%) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-[40%] flex flex-col"
            >
              <div className="mb-12">
                <h3 className="text-h3 text-charcoal mb-6 font-bold">What happens next?</h3>
                <p className="text-body text-charcoal/70 mb-4">
                  We review your submission within 24 hours. If your setup qualifies for a free audit, we schedule a 45-minute call where our engineers review your current stack, identify critical vulnerabilities, and outline a remediation path.
                </p>
                <p className="text-body font-bold text-charcoal">
                  No commitment required.
                </p>
              </div>
              
              <div className="space-y-6 border-t border-border-light pt-12">
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-charcoal/70 uppercase tracking-[0.08em] mb-1">Email</p>
                    <a href="mailto:info@cerenth.org" className="text-body text-charcoal hover:text-gold transition-colors font-bold">info@cerenth.org</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-charcoal/70 uppercase tracking-[0.08em] mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/company/cerenth" target="_blank" rel="noopener noreferrer" className="text-body text-charcoal hover:text-gold transition-colors font-bold">linkedin.com/company/cerenth</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-charcoal/70 uppercase tracking-[0.08em] mb-1">Location</p>
                    <p className="text-body text-charcoal font-bold">Kampala, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-charcoal/70 uppercase tracking-[0.08em] mb-1">Response time</p>
                    <p className="text-body text-charcoal font-bold">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}
