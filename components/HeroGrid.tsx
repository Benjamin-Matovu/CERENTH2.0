'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroGrid() {
  const [mounted, setMounted] = useState(false);
  const rows = 12;
  const cols = 20;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }}
      >
        <div 
          className="grid gap-[20px]" 
          style={{ 
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            width: '120vw',
            height: '120vh',
            transform: 'rotate(15deg) scale(1.2)'
          }}
        >
          {Array.from({ length: rows * cols }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-gold rounded-full"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: (i % cols) * 0.1 + Math.floor(i / cols) * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
