import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  BRAND_NAME,
  BRAND_TAGLINE,
  PHONE,
  PHONE_RAW,
  EMAIL,
  ADDRESS,
  navLinks,
  services,
  industries,
} from "@/data/site";

import logo from "@/assets/logo/astravidya-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white pt-16 pb-8 mt-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.18),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt={BRAND_NAME}
              className="h-14 w-14 rounded-xl object-cover shadow-lg"
            />

            <div>
              <div className="font-bold text-lg">{BRAND_NAME}</div>
              <div className="text-xs text-purple-200">
                {BRAND_TAGLINE}
              </div>
            </div>
          </div>

          <p className="text-sm text-purple-100/80 max-w-sm">
            AI-powered digital marketing & technology agency helping
            healthcare, real estate, jewellery, education, ecommerce,
            and political brands scale through measurable growth.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 rounded-full glass-purple flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/astravidya.ai?igsh=MTkwMGNpeTllZTdwMA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full glass-purple flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/company/ai-smart-live-solutions-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full glass-purple flex items-center justify-center hover:bg-sky-700 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://youtube.com/@astravidyastudios?si=cljY4B6TrQVT0nJx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-10 w-10 rounded-full glass-purple flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300"
            >
              <Youtube className="h-4 w-4" />
            </a>

            <a
              href="https://x.com/aismartlive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="h-10 w-10 rounded-full glass-purple flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-purple-100/80 hover:text-white transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Services
          </h4>

          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link
                  to="/services"
                  className="text-purple-100/80 hover:text-white transition"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Industries */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-2 text-purple-100/80 hover:text-white transition"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-purple-100/80 hover:text-white transition"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
            </li>

            <li className="flex items-start gap-2 text-purple-100/80">
              <MapPin className="h-4 w-4 mt-0.5" />
              {ADDRESS}
            </li>
          </ul>

          <h4 className="font-semibold mt-6 mb-3 text-white">
            Industries
          </h4>

          <ul className="space-y-1 text-sm">
            {industries.map((i) => (
              <li
                key={i.slug}
                className="text-purple-100/70"
              >
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 pt-6 border-t border-white/10 text-center text-xs text-purple-200/60">
        © {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
        <br />
        {BRAND_TAGLINE}
      </div>
    </footer>
  );
}