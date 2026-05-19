import { Button } from "@/components/ui/button";
import {
  Building2,
  GraduationCap,
  Home,
  Info,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Properties", href: "#properties", icon: Building2 },
  { label: "Rentals", href: "#search", icon: Building2 },
  { label: "Student Housing", href: "#local", icon: GraduationCap },
  { label: "About", href: "#why-us", icon: Info },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];

const WA_NUMBER = "919999999999";
const PHONE_NUMBER = "tel:+919999999999";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWA = () =>
    window.open(
      `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20am%20looking%20for%20rental%20property%20in%20Kota`,
      "_blank",
    );

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-lg py-2"
          : "bg-[#0F1E3D]/95 backdrop-blur-sm py-4"
      }`}
      data-ocid="navbar"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2.5 group flex-shrink-0"
          data-ocid="navbar.logo.link"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
            <Building2 className="text-[#0F1E3D]" size={18} />
          </div>
          <div className="leading-tight">
            <div
              className={`font-display font-bold tracking-wide transition-all duration-300 ${
                scrolled ? "text-[#0F1E3D] text-sm" : "text-white text-sm"
              }`}
            >
              KR&amp;P
            </div>
            <div className="text-[#F59E0B] text-[9px] font-bold tracking-widest uppercase leading-none">
              KOTA RENTAL &amp; PROPERTIES
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-[#0F1E3D]/80 hover:text-[#0F1E3D] hover:bg-[#0F1E3D]/8"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              data-ocid={`navbar.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          {/* WhatsApp icon link */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20need%20help%20finding%20rental%20in%20Kota`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all duration-200 hover:scale-105 shadow-md"
            aria-label="WhatsApp"
            data-ocid="navbar.whatsapp_icon.link"
          >
            <MessageCircle size={16} />
          </a>

          <Button
            asChild
            className={`hidden sm:flex items-center gap-2 font-bold text-sm px-4 rounded-xl border-0 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md ${
              scrolled
                ? "bg-[#0F1E3D] text-white hover:bg-[#1A4FBF]"
                : "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F1E3D] hover:from-[#D97706] hover:to-[#B45309]"
            }`}
            data-ocid="navbar.call_button"
          >
            <a href={PHONE_NUMBER}>
              <Phone size={14} />
              Call Now
            </a>
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-[#0F1E3D] hover:bg-[#0F1E3D]/8"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.menu_toggle"
            type="button"
          >
            <div
              className={`transition-all duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        data-ocid="navbar.mobile_menu"
      >
        <div className="mx-4 mt-2 mb-3 rounded-2xl overflow-hidden glass-card border border-white/20">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3.5 text-sm font-medium transition-all duration-200 border-b border-white/5 last:border-b-0"
              data-ocid={`navbar.mobile.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
            >
              <link.icon size={16} className="text-[#F59E0B] flex-shrink-0" />
              <span>{link.label}</span>
            </a>
          ))}
          <div className="px-4 py-3 flex gap-2">
            <a
              href={PHONE_NUMBER}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F1E3D] font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              data-ocid="navbar.mobile.call_button"
            >
              <Phone size={14} />
              Call Now
            </a>
            <button
              onClick={handleWA}
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              type="button"
              data-ocid="navbar.mobile.whatsapp_button"
            >
              <MessageCircle size={14} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
