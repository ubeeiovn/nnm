"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

const ContactSection = () => {
  const { t } = useLang();
  const c = t.contact;

  const items = [
    { icon: Mail, label: c.email, value: "info@nnmie.com", href: "mailto:info@nnmie.com" },
    { icon: Mail, label: c.email, value: "tim@nnmie.com", href: "mailto:tim@nnmie.com" },
    { icon: MapPin, label: c.location, value: "Ottawa, Ontario", href: null },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">{c.sectionTag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {c.heading}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-6">{c.body}</p>
          <div className="divider-gold h-px w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8 border border-border hover:border-gold transition-colors duration-500"
            >
              <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="font-body text-foreground hover:text-gold transition-colors duration-300">
                  {item.value}
                </a>
              ) : (
                <p className="font-body text-foreground">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
