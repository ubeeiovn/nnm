"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const partners = [
  { src: "/p1.png", alt: "Partner 1" },
  { src: "/p2.png", alt: "Partner 2" },
];

const PartnersSection = () => {
  const { t } = useLang();

  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">{t.partners.sectionTag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{t.partners.heading}</h2>
          <div className="divider-gold h-px w-32 mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-16">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex items-center justify-center bg-[#FFF7E2] rounded-xl px-10 py-6"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={200}
                height={100}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
