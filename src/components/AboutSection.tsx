"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import agaveField from "../../public/2.jpg";
import distillery from "../../public/3.jpg";
import { useLang } from "@/lib/i18n";

const AboutSection = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">{a.sectionTag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {a.heading}
          </h2>
          <div className="divider-gold h-px w-32 mx-auto" />
        </motion.div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={agaveField}
              alt="Trade between Vietnam and Canada"
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl text-foreground">{a.whoTag}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{a.whoBody1}</p>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{a.whoMission}</strong> {a.whoMissionBody}
            </p>
          </motion.div>
        </div>

        {/* CPTPP & Compliance */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:order-1"
          >
            <h3 className="font-display text-3xl text-foreground">{a.complianceTag}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{a.cptppLabel}</strong> {a.cptppBody}
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{a.regLabel}</strong> {a.regBody}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <Image
              src={distillery}
              alt="Compliance and trade operations"
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">{a.valuesTag}</p>
          <h3 className="font-display text-3xl text-foreground">{a.valuesHeading}</h3>
          <div className="divider-gold h-px w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.values.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border hover:border-gold transition-colors duration-500 p-6 text-center"
            >
              <h4 className="font-display text-lg text-gold mb-3">{v.label}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
