import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_NAME, PHONE_RAW, PHONE, navLinks } from "@/data/site";
import logo from "@/assets/logo/astravidya-logo.jpeg";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-transparent/80 backdrop-blur-xl shadow-sm border-b border-purple-100"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={BRAND_NAME}
            className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-contain shadow-brand"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm sm:text-lg text-brand-gradient">
              {BRAND_NAME}
            </span>

            <span className="text-[10px] sm:text-xs text-muted-foreground">
              AI Powered Digital Marketing
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = pathname === l.to;

            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-brand-gradient text-white shadow-brand"
                    : "text-foreground/80 hover:text-primary hover:bg-purple-50"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_RAW}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gradient text-white text-sm font-semibold shadow-brand hover:shadow-glow transition-all"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden bg-transparent/95 backdrop-blur-xl border-t border-purple-100"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-colors",
                    pathname === l.to
                      ? "bg-brand-gradient text-white"
                      : "hover:bg-purple-50"
                  )}
                >
                  {l.label}
                </Link>
              ))}

              <a
                href={`tel:${PHONE_RAW}`}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-gradient text-white font-semibold"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}