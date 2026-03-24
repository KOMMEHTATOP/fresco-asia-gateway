import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Technology", href: "/#technology" },
  { label: "Analytics", href: "/#analytics" },
  { label: "Security", href: "/#security" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient-gold">Fresco</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border border-border hover:border-primary/30"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang}
          </button>
          <a
            href="mailto:Frescopartnertns@outlook.com"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-all"
          >
            Get Started
          </a>
          <a
            href="mailto:Frescopartnertns@outlook.com"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-cta text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            Contact Sales
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="flex gap-2 pt-4 border-t border-border">
                <a
                  href="mailto:Frescopartnertns@outlook.com"
                  className="flex-1 text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-cta text-primary-foreground"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
