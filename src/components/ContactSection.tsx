import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Contact</span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3 mb-4">
          Let's <span className="text-gradient-gold">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Ready to scale your iGaming payments in Asia? Reach out to our team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/payforhr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-royal-blue text-royal-blue-foreground font-semibold text-sm hover:opacity-90 transition-all"
          >
            <Send className="w-4 h-4" />
            Contact via Telegram
          </a>
          <a
            href="mailto:Frescopartnertns@outlook.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-muted text-foreground font-semibold text-sm border border-border hover:border-primary/30 transition-all"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>

        <div className="mt-8">
          <a
            href="mailto:Frescopartnertns@outlook.com"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-cta text-primary-foreground font-bold text-base hover:opacity-90 transition-all glow-primary"
          >
            Contact Sales
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
