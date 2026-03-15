"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "../../public/1.jpg";
import { useLang } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={heroBg} alt="" className="w-full h-full object-cover" fill />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-6"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold leading-tight mb-6"
        >
          {t.hero.heading1}
          <br />
          <span className="text-foreground italic font-normal text-4xl md:text-5xl lg:text-6xl">
            {t.hero.heading2}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="divider-gold h-px w-48 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {t.hero.body}
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block border border-gold px-10 py-4 font-body text-sm tracking-widest uppercase text-gold hover:bg-accent hover:text-accent-foreground transition-all duration-500"
        >
          {t.hero.cta}
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
