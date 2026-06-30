'use client';

import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center container-main border-b border-border-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-6">OUR STORY</p>
          <h1 className="text-h1 text-charcoal max-w-4xl mx-auto">
            We started Cerenth because no one else was solving this
          </h1>
        </motion.div>
      </section>

      {/* The Founding Story */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[720px] mx-auto text-[20px] leading-[1.8] text-charcoal/70 space-y-8"
          >
            <p className="text-charcoal font-bold">
              On the 5th of October 2026, Cerenth Ltd was founded in Kampala, Uganda — not because it was a good business idea, but because it was a necessary one.
            </p>
            <p>
              East Africa's tech ecosystem is growing fast. Fintechs are raising capital, onboarding millions of users, processing real money, and handling sensitive personal data. But underneath the product layer, most of these companies are running on infrastructure that has never been seriously reviewed, pipelines that have no security checks, and teams that have never been trained on what happens when a server goes down.
            </p>
            <p>
              We watched developers push code to production with no automated testing. We watched startups store user data in misconfigured cloud environments. We watched fintech teams scramble during incidents with no playbook, no monitoring, and no one who knew what to do next.
            </p>
            <p>
              The knowledge gap is real. Very few people in Uganda — or East Africa at large — have deep expertise in what happens between a developer pushing code to GitHub and that code serving real users in production. Even fewer understand the security implications of every step in that chain.
            </p>
            <p className="text-charcoal text-[24px] font-bold py-4 border-l-4 border-gold pl-6">
              That gap is what Cerenth exists to close.
            </p>
            <p>
              We are not here to consult and disappear. We are here to build the DevSecOps foundation that East Africa's fintech ecosystem needs to grow without breaking — and to build it from inside the continent, not from a boardroom in London or San Francisco.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white border-y border-border-light">
        <div className="container-main">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 text-charcoal text-center mb-16"
          >
            How we think about security
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pl-6 border-l-2 border-gold"
            >
              <div className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-4">PREVENTION OVER REACTION</div>
              <p className="text-body text-charcoal/70">
                Most security teams are incident responders. We are pipeline architects. We embed security controls into the development workflow so that vulnerabilities are caught in code review, not in a breach report.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pl-6 border-l-2 border-gold"
            >
              <div className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-4">CONTEXT MATTERS</div>
              <p className="text-body text-charcoal/70">
                Building a fintech in Kampala is not the same as building one in London. The infrastructure constraints, the regulatory environment, the talent market — all different. Our solutions are designed for East African realities, not imported wholesale from other markets.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pl-6 border-l-2 border-gold"
            >
              <div className="text-[13px] font-bold text-gold uppercase tracking-[0.08em] mb-4">OWNERSHIP, NOT OVERSIGHT</div>
              <p className="text-body text-charcoal/70">
                We do not hand you a report and leave. When we manage something, we own the outcome. Your uptime, your security posture, your compliance status — these are our responsibility until you say otherwise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="section-padding">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2 text-charcoal mb-12 max-w-3xl mx-auto">
              We are building something bigger than a consultancy
            </h2>
            
            <div className="max-w-[680px] mx-auto text-body-lg text-charcoal/70 space-y-6 text-left">
              <p>
                Cerenth is a managed services firm today. But the 15-year vision is larger.
              </p>
              <p>
                We are building toward a future where every East African startup has access to enterprise-grade DevSecOps infrastructure — regardless of their size, budget, or technical maturity. A future where "we got hacked" is not an acceptable answer for a company handling people's money.
              </p>
              <p>
                That means training the next generation of East African DevSecOps engineers. It means building tools and platforms designed for this market. It means making security a default, not an afterthought, across the entire continent.
              </p>
              <p className="text-charcoal font-bold pt-4">
                We are starting with one client at a time. The mission does not change.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
