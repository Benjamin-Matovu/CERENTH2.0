'use client';

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="card group flex flex-col h-full"
    >
      <div className="mb-6 text-gold">
        {icon}
      </div>
      <h3 className="text-h3 text-charcoal mb-3 font-bold">{title}</h3>
      <p className="text-body text-charcoal/70 mb-8 flex-grow">{description}</p>
      <Link 
        href="/services" 
        className="text-dusty-rose font-bold inline-flex items-center group-hover:opacity-80 transition-colors mt-auto"
      >
        Learn more 
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </motion.div>
  );
}
