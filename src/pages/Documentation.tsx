import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, Shield, Code2 } from "lucide-react";

const docs = [
  {
    icon: Scale,
    title: "Terms of Service",
    content: "By using Fresco's payment processing services, you agree to comply with our terms governing transaction processing, settlement timelines, dispute resolution, and acceptable use policies for iGaming operations across supported Asian markets.",
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    content: "Fresco Ltd. is committed to protecting your data. We collect and process personal information in accordance with applicable data protection laws. Transaction data is encrypted using AES-256 and stored in compliance with PCI DSS Level 1 standards.",
  },
  {
    icon: Code2,
    title: "API Documentation",
    content: "Integrate with Fresco's payment API using REST, SOAP, or GraphQL endpoints. Full Swagger/OpenAPI specs and Postman collections are available. Our API supports real-time webhooks, batch processing, and comprehensive error handling.",
  },
];

const Documentation = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Documentation</span>
          <h1 className="text-3xl lg:text-4xl font-display font-bold mt-3 mb-6">
            Legal & <span className="text-gradient-gold">API Docs</span>
          </h1>

          {/* Legal Entity */}
          <div className="bg-gradient-card rounded-2xl border border-border/50 p-6 mb-8">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h2 className="font-display font-semibold mb-2">Legal Entity</h2>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Company:</strong> Fresco Ltd.</p>
                  <p><strong className="text-foreground">Registered in:</strong> Seychelles</p>
                  <p><strong className="text-foreground">Address:</strong> Victoria, Mahé, Seychelles</p>
                  <p className="pt-2">International payment aggregator providing secure iGaming solutions across Asia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Doc sections */}
          <div className="space-y-6">
            {docs.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="bg-gradient-card rounded-xl border border-border/50 p-6"
              >
                <div className="flex items-start gap-3">
                  <d.icon className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Documentation;
