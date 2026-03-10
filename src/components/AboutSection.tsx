import { motion } from "framer-motion";
import agaveField from "@/assets/agave-field.jpg";
import distillery from "@/assets/distillery.jpg";

const values = [
  { label: "Integrity", desc: "We operate with full transparency and honesty in every trade." },
  { label: "Customer Focus", desc: "Your business goals are at the center of everything we do." },
  { label: "Global Awareness", desc: "Deep knowledge of international trade, tariffs, and regulations." },
  { label: "Operational Excellence", desc: "Precise documentation and compliance at every step." },
];

const AboutSection = () => {
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
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            NNM Import & Export
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
            <img
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
            <h3 className="font-display text-3xl text-foreground">Who We Are</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              NNM IE Inc. is a federally incorporated company established in 2024, operating across Canada.
              We specialize in the trade of consumer goods — both for direct and indirect consumption — between Vietnam and Canada.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Our Mission:</strong> To empower businesses by facilitating seamless and reliable trade of quality consumer goods between Vietnam and Canada.
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
            <h3 className="font-display text-3xl text-foreground">Compliance & Reliability</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">CPTPP Mastery:</strong> We specialize in maximizing duty-free access under the CPTPP, ensuring all shipments strictly adhere to Rules of Origin to provide our clients with the most competitive tariff treatments.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Regulatory Precision:</strong> Our team handles full documentation for both markets, from Canadian Export Declarations to Vietnam's import compliance requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <img
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
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">Our Foundation</p>
          <h3 className="font-display text-3xl text-foreground">Core Values</h3>
          <div className="divider-gold h-px w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
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
