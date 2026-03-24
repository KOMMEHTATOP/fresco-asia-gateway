import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Activity } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Real-Time Stats", desc: "Live dashboards powered by Tableau for instant transaction visibility across all markets." },
  { icon: Activity, title: "Transaction Monitoring", desc: "24/7 automated monitoring with anomaly detection and instant alert systems." },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "AI-driven insights to maximize payment success rates and reduce drop-offs." },
];

const AnalyticsSection = () => (
  <section id="analytics" className="py-24 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-royal-blue">Analytics</span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">
          Data-Driven <span className="text-gradient-gold">Intelligence</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Complete visibility into your payment ecosystem with actionable insights.
        </p>
      </motion.div>

      {/* Mock dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-card rounded-2xl border border-border/50 p-6 lg:p-8 mb-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Transactions Today", value: "124,892", change: "+12.4%" },
            { label: "Success Rate", value: "98.7%", change: "+0.3%" },
            { label: "Total Volume", value: "₹48.2Cr", change: "+8.1%" },
            { label: "Active Markets", value: "5", change: "Stable" },
          ].map((s) => (
            <div key={s.label} className="bg-muted/50 rounded-xl p-4">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="text-xl font-display font-bold mt-1">{s.value}</div>
              <div className="text-xs text-emerald mt-1">{s.change}</div>
            </div>
          ))}
        </div>
        {/* Chart placeholder bars */}
        <div className="flex items-end gap-1.5 h-32">
          {Array.from({ length: 24 }).map((_, i) => {
            const h = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 40;
            return (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/20 transition-all hover:from-primary hover:to-primary/50"
                style={{ height: `${h}%` }}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex p-3 rounded-xl bg-royal-blue/10 text-royal-blue mb-4">
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AnalyticsSection;
