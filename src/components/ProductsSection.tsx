import { motion } from "framer-motion";

const services = [
  {
    name: "Direct Consumption",
    description: "Ready-to-use consumer goods sourced from Vietnam and distributed across Canadian markets.",
    color: "hsl(150 40% 30%)",
  },
  {
    name: "Indirect Consumption",
    description: "Raw materials and intermediate goods supporting Canadian manufacturers and processors.",
    color: "hsl(35 70% 45%)",
  },
  {
    name: "CPTPP Compliance",
    description: "Full duty-free access optimization through strict Rules of Origin adherence under CPTPP.",
    color: "hsl(200 50% 35%)",
  },
  {
    name: "Export Documentation",
    description: "Complete handling of Canadian Export Declarations and Vietnam import compliance paperwork.",
    color: "hsl(25 60% 40%)",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            End-to-end trade solutions — from sourcing and logistics to compliance and documentation.
          </p>
          <div className="divider-gold h-px w-32 mx-auto mt-6" />
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gradient-card border border-border hover:border-gold transition-all duration-500 p-6 group"
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-full border-2 border-border group-hover:border-gold transition-colors duration-500"
                  style={{ background: service.color }}
                />
              </div>

              <h3 className="font-display text-xl text-center text-foreground mb-3">{service.name}</h3>
              <p className="font-body text-sm text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
