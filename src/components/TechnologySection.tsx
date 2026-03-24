import { motion } from "framer-motion";
import { Code2, Database, Cpu, Workflow, Brain, FileCode } from "lucide-react";

const techStack = [
  { icon: Code2, label: "SOAP, REST & GraphQL", desc: "Full API integration suite" },
  { icon: Cpu, label: "Apache Kafka", desc: "Real-time event streaming" },
  { icon: Database, label: "PostgreSQL + SQL", desc: "Enterprise database layer" },
  { icon: FileCode, label: "Swagger & Postman", desc: "Complete API documentation" },
  { icon: Workflow, label: "n8n Automation", desc: "Workflow orchestration" },
  { icon: Brain, label: "OpenAI Integration", desc: "AI-powered intelligence" },
];

const TechnologySection = () => (
  <section id="technology" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-emerald">Technology</span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">
          Built on <span className="text-gradient-gold">Modern Infrastructure</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Enterprise-grade technology stack designed for speed, reliability, and infinite scalability.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-emerald/30 transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-emerald/10 text-emerald group-hover:bg-emerald/20 transition-colors">
              <t.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">{t.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;
