import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
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
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-6">
            Ready to explore trade opportunities between Vietnam and Canada? Request a quotation or reach out to start a conversation.
          </p>
          <div className="divider-gold h-px w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "info@nnmimportexport.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Location", value: "Canada" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8 border border-border hover:border-gold transition-colors duration-500"
            >
              <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2">{item.label}</p>
              <p className="font-body text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
