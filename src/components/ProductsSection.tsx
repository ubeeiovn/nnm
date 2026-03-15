"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const ProductsSection = () => {
  const { t } = useLang();
  const d = t.departments;

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">{d.sectionTag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {d.heading}
          </h2>
          <div className="divider-gold h-px w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {d.items.map((dept, i) => (
            <motion.div
              key={dept.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gradient-card border border-border hover:border-gold transition-all duration-500 p-8 group"
            >
              <p className="font-display text-5xl text-gold/30 group-hover:text-gold/60 transition-colors duration-500 mb-4 leading-none">
                {dept.label}.
              </p>
              <h3 className="font-display text-xl text-foreground mb-3">{dept.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
