'use client';

import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center container-main px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-6">OUR SERVICES</p>
          <h1 className="text-h1 text-charcoal mb-6 max-w-4xl mx-auto px-4 sm:px-6 leading-tight text-3xl sm:text-4xl md:text-h1">
            DevSecOps expertise,<br className="sm:hidden" /> fully managed
          </h1>
          <p className="text-body-lg text-charcoal/70 max-w-3xl mx-auto px-4 sm:px-6">
            We handle the security and infrastructure complexity so your engineering team can focus on what matters — building your product.
          </p>
        </motion.div>
      </section>

      {/* Service 1 — DevSecOps Pipeline Setup */}
      <section className="section-padding bg-white border-y border-border-light">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-left"
            >
              <h2 className="text-h2 text-charcoal mb-4">DevSecOps Pipeline Setup</h2>
              <p className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-6">FOR FINTECHS SHIPPING CODE WITHOUT SECURITY CHECKS</p>
              
              <div className="space-y-4 text-body text-charcoal/70 mb-8">
                <p>
                  Right now, somewhere in East Africa, a developer is pushing code directly to a production server with no automated tests, no security scans, and no approval process. One bad commit can take down a live payment system.
                </p>
                <p>
                  Our team designs and implements CI/CD pipelines with security embedded at every stage. Static code analysis, dependency vulnerability scanning, secret detection, container image scanning, and automated compliance checks — all running before a single line of code reaches your users.
                </p>
                <p>
                  You get a pipeline that catches problems before they become incidents.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-charcoal font-bold mb-4">What's included:</h4>
                <ul className="space-y-2">
                  {[
                    "CI/CD pipeline design and implementation (GitHub Actions, GitLab CI)",
                    "SAST (Static Application Security Testing) integration",
                    "Dependency vulnerability scanning",
                    "Secret and credential leak detection",
                    "Container image security scanning",
                    "Pipeline audit and documentation",
                    "Team onboarding and handover"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-3 mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="text-dusty-rose font-bold inline-flex items-center hover:opacity-80 transition-colors group">
                Book a Free Audit
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2 — Security Audits */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-left"
            >
              <h2 className="text-h2 text-charcoal mb-4">Security Audits</h2>
              <p className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-6">FOR TEAMS THAT WANT TO KNOW WHAT'S BROKEN BEFORE ATTACKERS DO</p>
              
              <div className="space-y-4 text-body text-charcoal/70 mb-8">
                <p>
                  A security audit is not a compliance checkbox. It is a real technical investigation into the weakest points in your infrastructure, codebase, and access controls.
                </p>
                <p>
                  Our engineers conduct structured security reviews covering your cloud infrastructure configuration, application-level vulnerabilities, access control policies, API security, and data handling practices. You receive a prioritized findings report with clear remediation steps — not a 200-page document no one reads.
                </p>
                <p>
                  We tell you what's wrong, why it matters, and exactly how to fix it.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-charcoal font-bold mb-4">What's included:</h4>
                <ul className="space-y-2">
                  {[
                    "Cloud infrastructure security review (AWS)",
                    "Application vulnerability assessment",
                    "API security testing",
                    "Access control and IAM policy review",
                    "Data handling and storage assessment",
                    "Prioritized findings report",
                    "Remediation guidance and follow-up call"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-3 mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="text-dusty-rose font-bold inline-flex items-center hover:opacity-80 transition-colors group">
                Book a Free Audit
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 3 — Cloud Infrastructure Management */}
      <section className="section-padding bg-white border-y border-border-light">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><rect width="8" height="8" x="8" y="10" rx="2"/></svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-left"
            >
              <h2 className="text-h2 text-charcoal mb-4">Cloud Infrastructure Management</h2>
              <p className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-6">FOR STARTUPS THAT HAVE OUTGROWN THEIR CURRENT SETUP</p>
              
              <div className="space-y-4 text-body text-charcoal/70 mb-8">
                <p>
                  Cloud infrastructure is not set-and-forget. Misconfigured S3 buckets, over-permissioned IAM roles, unpatched EC2 instances — these are not edge cases. They are the default state of most startup cloud environments.
                </p>
                <p>
                  Our team designs, deploys, and manages secure cloud infrastructure on AWS tailored for East African fintech workloads. We handle the architecture, the security hardening, the cost optimization, and the ongoing management — while you maintain full visibility into everything we do.
                </p>
                <p>
                  Your infrastructure runs. Your team focuses on product. We handle the rest.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-charcoal font-bold mb-4">What's included:</h4>
                <ul className="space-y-2">
                  {[
                    "Cloud architecture design and deployment",
                    "Security hardening and configuration management",
                    "IAM policy design and access control",
                    "Cost monitoring and optimization",
                    "Backup and disaster recovery setup",
                    "Monthly infrastructure review and reporting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-3 mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="text-dusty-rose font-bold inline-flex items-center hover:opacity-80 transition-colors group">
                Book a Free Audit
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 4 — Compliance Consulting */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-left"
            >
              <h2 className="text-h2 text-charcoal mb-4">Compliance Consulting</h2>
              <p className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-6">FOR FINTECHS NAVIGATING THE UGANDA DATA PROTECTION ACT</p>
              
              <div className="space-y-4 text-body text-charcoal/70 mb-8">
                <p>
                  The Uganda Data Protection and Privacy Act is not optional. As the regulatory environment in East Africa tightens, fintechs that have not built compliance into their data handling practices will face audits, fines, and reputational damage.
                </p>
                <p>
                  Our team helps you understand exactly what the law requires, assess your current gaps, and implement the technical and operational controls that bring you into compliance — and keep you there.
                </p>
                <p>
                  We translate regulatory requirements into engineering tasks your team can actually execute.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-charcoal font-bold mb-4">What's included:</h4>
                <ul className="space-y-2">
                  {[
                    "Uganda Data Protection Act gap assessment",
                    "Data flow mapping and classification",
                    "Privacy policy and consent framework review",
                    "Technical control implementation guidance",
                    "Audit preparation and documentation",
                    "Ongoing compliance monitoring support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-3 mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="text-dusty-rose font-bold inline-flex items-center hover:opacity-80 transition-colors group">
                Book a Free Audit
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 5 — Monitoring & Incident Response */}
      <section className="section-padding bg-white border-t border-border-light">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><path d="M3 3v18h18"/></svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-left"
            >
              <h2 className="text-h2 text-charcoal mb-4">Monitoring & Incident Response</h2>
              <p className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-6">FOR TEAMS THAT FIND OUT ABOUT OUTAGES FROM THEIR CUSTOMERS</p>
              
              <div className="space-y-4 text-body text-charcoal/70 mb-8">
                <p>
                  If your users are the ones telling you your system is down, you do not have monitoring. You have hope.
                </p>
                <p>
                  Our team deploys full-stack observability across your infrastructure and applications — metrics, logs, traces, and alerting configured to catch anomalies before they become outages. When something does go wrong, our engineers respond. Not just an alert. A real human being who knows your system and knows what to do.
                </p>
                <p>
                  You get the confidence of knowing that someone is always watching — so you can sleep.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-charcoal font-bold mb-4">What's included:</h4>
                <ul className="space-y-2">
                  {[
                    "Infrastructure and application monitoring setup",
                    "Log aggregation and analysis pipeline",
                    "Alerting and escalation policy design",
                    "On-call incident response coverage",
                    "Post-incident reviews and root cause analysis",
                    "Monthly uptime and performance reporting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-3 mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="text-dusty-rose font-bold inline-flex items-center hover:opacity-80 transition-colors group">
                Book a Free Audit
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
