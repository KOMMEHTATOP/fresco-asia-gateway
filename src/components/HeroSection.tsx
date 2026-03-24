import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.jpg";

const countries = ["India", "Thailand", "Philippines", "Indonesia", "Vietnam"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-hero">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Country tabs */}
            <div className="flex flex-wrap gap-2">
              {countries.map((c, i) => (
                <span
                  key={c}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                    i === 0
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Next-Gen Payment Infrastructure for{" "}
              <span className="text-gradient-primary">iGaming in Asia</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Fast, secure, and scalable payment solutions built for the Asian iGaming market. Process transactions across UPI, wallets, cards, and crypto with enterprise-grade reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:Frescopartnertns@outlook.com"
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-muted text-foreground font-semibold text-sm hover:bg-muted/80 transition-all border border-border"
              >
                Get Started
              </a>
              <a
                href="mailto:Frescopartnertns@outlook.com"
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-gradient-cta text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 glow-primary"
              >
                Contact Sales
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<2s", label: "Processing" },
                { value: "5+", label: "Markets" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-bold text-gradient-gold">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img
                src={heroImage}
                alt="Fresco payment infrastructure visualization"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
