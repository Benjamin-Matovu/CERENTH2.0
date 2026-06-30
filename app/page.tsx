'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import HeroGrid from "@/components/HeroGrid";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      {/* Section 1 - Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroGrid />
        
        <div className="container-main relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-6">DevSecOps Managed Services · East Africa</p>
            <h1 className="text-h1 text-charcoal mb-8 max-w-4xl mx-auto">
              Your code ships fast.<br />
              Does your security keep up?
            </h1>
            <p className="text-body-lg text-charcoal/70 max-w-[560px] mx-auto mb-10">
              Most East African fintechs push code to production with no security pipeline, 
              no monitoring, and no incident response. When something breaks — and it will — 
              they find out from their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-dusty-rose text-charcoal font-bold rounded-button shadow-cta-glow transition-all hover:bg-dusty-rose/80 hover:shadow-[0_0_30px_#D8B4C080]"
              >
                Book a Free Security Audit
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-dusty-rose text-dusty-rose font-bold rounded-button transition-all hover:bg-dusty-rose/10"
              >
                See Our Services →
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-charcoal/50"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Problem Strip */}
      <section className="bg-white border-y border-border-light py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-light">
            <div className="flex flex-col items-center text-center p-8">
              <div className="text-[48px] font-bold text-gold leading-none mb-4">73%</div>
              <div className="text-[12px] font-bold text-charcoal/70 uppercase tracking-[0.08em]">
                OF AFRICAN STARTUPS HAVE NO<br/>SECURITY IN THEIR CI/CD PIPELINE
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <div className="text-[48px] font-bold text-gold leading-none mb-4">$4.5M</div>
              <div className="text-[12px] font-bold text-charcoal/70 uppercase tracking-[0.08em]">
                AVERAGE COST OF A DATA BREACH<br/>FOR A FINTECH
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <div className="text-[48px] font-bold text-gold leading-none mb-4">48hrs</div>
              <div className="text-[12px] font-bold text-charcoal/70 uppercase tracking-[0.08em]">
                AVERAGE TIME TO DETECT A BREACH<br/>WITHOUT MONITORING
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-[18px] text-charcoal/70">
              This is not a future problem. It is happening right now, to companies exactly like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Services Overview */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <p className="eyebrow mb-4">WHAT WE DO</p>
            <h2 className="text-h2 text-charcoal mb-6">
              Security built into every layer of your stack
            </h2>
            <p className="text-body-lg text-charcoal/70">
              We don't bolt security on after the fact. We embed it into your development workflow, 
              your infrastructure, and your team culture from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <ServiceCard 
              title="DevSecOps Pipeline Setup"
              description="Automated security checks baked into your CI/CD pipeline. Every code push is tested, scanned, and verified before it touches production."
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
              delay={0}
            />
            <ServiceCard 
              title="Security Audits"
              description="A full technical review of your infrastructure, codebase, and access controls. We find what's broken before attackers do."
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>}
              delay={0.1}
            />
            <ServiceCard 
              title="Cloud Infrastructure Management"
              description="Secure, scalable cloud architecture on AWS. Designed for fintech workloads, built for the East African market."
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><rect width="8" height="8" x="8" y="10" rx="2"/></svg>}
              delay={0.2}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
            <ServiceCard 
              title="Compliance Consulting"
              description="Uganda Data Protection Act compliance, audit preparation, and data governance frameworks your regulators will respect."
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>}
              delay={0.3}
            />
            <ServiceCard 
              title="Monitoring & Incident Response"
              description="24/7 infrastructure monitoring with real human response. When something goes wrong, we act — not just alert you."
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Why Cerenth */}
      <section className="section-padding bg-white border-y border-border-light">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">WHY CERENTH</p>
              <h2 className="text-h2 text-charcoal mb-6">
                We are not a foreign consultancy parachuting into Africa
              </h2>
              <p className="text-body-lg text-charcoal/70">
                We built Cerenth from Kampala because we understand this market. The infrastructure 
                constraints, the regulatory landscape, the fintech growth pressures. We live in the 
                same ecosystem you operate in.
              </p>
            </motion.div>

            <div className="flex flex-col space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="pl-6 border-l-2 border-gold"
              >
                <div className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-3">EAST AFRICA FIRST</div>
                <p className="text-body text-charcoal/70">
                  Our team is based in Uganda. We understand what it means to build a fintech in a 
                  market where infrastructure is still maturing. Our solutions are designed for your 
                  reality, not copy-pasted from Silicon Valley playbooks.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-6 border-l-2 border-gold"
              >
                <div className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-3">SECURITY IS NOT AN AFTERTHOUGHT</div>
                <p className="text-body text-charcoal/70">
                  Most developers think about security after something breaks. We think about it before 
                  a single line of code is written. That mindset is embedded in everything we deliver.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pl-6 border-l-2 border-gold"
              >
                <div className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-3">MANAGED MEANS MANAGED</div>
                <p className="text-body text-charcoal/70">
                  We don't hand you a report and walk away. We own the outcome. Your pipeline, your 
                  infrastructure, your incident response — fully managed by our engineers, so your team 
                  can focus on building product.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA Banner */}
      <CTABanner />
    </>
  );
}
