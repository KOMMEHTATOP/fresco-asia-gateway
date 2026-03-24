import { motion } from "framer-motion";
import { CreditCard, Shield, Globe2 } from "lucide-react";

const solutions = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept payments via cards, UPI, digital wallets, and cryptocurrency. Seamless integration with local payment methods across Asia.",
    features: ["UPI & IMPS", "Digital Wallets", "Crypto Payments", "Card Processing"],
    color: "text-primary",
    glow: "glow-primary",
  },
  {
    icon: Globe2,
    title: "Local Acquiring",
    description: "Direct local acquiring in India, Thailand, Philippines, Indonesia, and Vietnam. Lower fees, faster settlements, higher approval rates.",
    features: ["Multi-Currency", "Local Settlement", "Cross-Border", "FX Optimization"],
    color: "text-emerald",
    glow: "glow-gold",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "AI-powered fraud detection and prevention. Real-time transaction scoring and automated risk management for iGaming operators.",
    features: ["AI Scoring", "Real-Time Alerts", "Risk Rules", "Chargeback Defense"],
    color: "text-royal-blue",
    glow: "",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="py-24 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Solutions</span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">
          End-to-End Payment <span className="text-gradient-gold">Solutions</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Purpose-built for iGaming operators in Asian markets with deep local expertise.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
          >
            <s.icon className={`w-10 h-10 ${s.color} mb-6`} />
            <h3 className="text-xl font-display font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.description}</p>
            <div className="flex flex-wrap gap-2">
              {s.features.map((f) => (
                <span key={f} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
