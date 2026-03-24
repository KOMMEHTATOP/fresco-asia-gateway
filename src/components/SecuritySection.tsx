import { motion } from "framer-motion";
import { Lock, ShieldCheck, KeyRound, Bug } from "lucide-react";

const items = [
  { icon: Lock, title: "SSL/TLS Encryption", desc: "End-to-end encryption for all data in transit and at rest." },
  { icon: KeyRound, title: "OAuth 2.0", desc: "Industry-standard authentication and authorization protocols." },
  { icon: ShieldCheck, title: "Anti-Fraud System", desc: "Real-time ML-based fraud detection with adaptive rules engine." },
  { icon: Bug, title: "XSS/SQL Protection", desc: "Comprehensive protection against injection and cross-site attacks." },
];

const SecuritySection = () => (
  <section id="security" className="py-24 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-crimson">Security</span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">
          Enterprise-Grade <span className="text-gradient-gold">Security</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl p-6 border border-border/50 text-center hover:border-crimson/30 transition-all"
          >
            <div className="inline-flex p-3 rounded-lg bg-crimson/10 text-crimson mb-4">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-sm mb-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
