import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-display font-bold text-gradient-gold">Fresco</span>
          <p className="text-xs text-muted-foreground mt-1">International Payment Aggregator for iGaming</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/documentation" className="hover:text-foreground transition-colors">Documentation</Link>
          <a href="https://t.me/payforhr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
          <a href="mailto:Frescopartnertns@outlook.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8 pt-6 border-t border-border/30">
        © {new Date().getFullYear()} Fresco Ltd. Registered in Seychelles. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
