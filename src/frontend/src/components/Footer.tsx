import {
  Building2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";

const QUICK_LINKS = [
  { id: "home", label: "Home", href: "#" },
  { id: "properties", label: "Properties", href: "#properties" },
  { id: "rentals", label: "Rentals", href: "#search" },
  { id: "student", label: "Student Housing", href: "#local" },
  { id: "about", label: "About Us", href: "#why-us" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const SERVICE_AREAS = [
  { id: "talwandi", name: "Talwandi" },
  { id: "vigyan", name: "Vigyan Nagar" },
  { id: "rgn", name: "Rajeev Gandhi Nagar" },
  { id: "nayapura", name: "Nayapura" },
  { id: "mahaveer", name: "Mahaveer Nagar" },
  { id: "ipia", name: "IPIA" },
];

const WA_NUMBER = "919999999999";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: "facebook",
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    id: "youtube",
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "kotarental.in";

  return (
    <footer
      data-ocid="footer.section"
      className="relative border-t"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #0F1E3D 100%)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* Top gold accent line */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #F59E0B 30%, #FBBF24 50%, #F59E0B 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Google Maps Embed */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(245,158,11,0.3)" }}
            />
            <h3
              className="text-white font-display font-semibold text-sm uppercase tracking-widest"
              style={{ color: "#F59E0B" }}
            >
              Find Us in Kota
            </h3>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(245,158,11,0.3)" }}
            />
          </div>
          <div
            className="rounded-2xl overflow-hidden w-full border"
            style={{
              borderColor: "rgba(245,158,11,0.25)",
              borderTopWidth: "2px",
              borderTopColor: "#F59E0B",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114960.60698536574!2d75.8067!3d25.2138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8354abd5a4a5%3A0x1e0c9e0e9e0e9e0e!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kota Rental & Properties – Location Map"
              className="sm:h-[300px]"
            />
          </div>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Column 1: Brand + Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                }}
              >
                <Building2 size={20} className="text-navy" />
              </div>
              <div>
                <div className="text-white font-display font-bold text-base leading-tight">
                  KOTA RENTAL
                </div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#F59E0B" }}
                >
                  &amp; Properties
                </div>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Trusted Rental Assistance Across Kota — helping students,
              families, and working professionals find verified accommodations
              since 2018.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                data-ocid="footer.phone_link"
              >
                <Phone size={14} style={{ color: "#F59E0B" }} />
                +91 99999 99999
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi%20I%20need%20rental%20assistance`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                data-ocid="footer.whatsapp_link"
              >
                <MessageCircle size={14} style={{ color: "#25D366" }} />
                WhatsApp: +91 99999 99999
              </a>
              <a
                href="mailto:info@kotarental.in"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                data-ocid="footer.email_link"
              >
                <Mail size={14} style={{ color: "#1A4FBF" }} />
                info@kotarental.in
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin
                  size={14}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#10B981" }}
                />
                Kota, Rajasthan 324001
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ id, icon: Icon, label, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-ocid={`footer.${id}_link`}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 border"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    data-ocid={`footer.${link.id}_link`}
                  >
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-gold">
                      ›
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-widest">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area.id}
                  className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200 cursor-default"
                >
                  <MapPin
                    size={12}
                    style={{ color: "#F59E0B" }}
                    className="shrink-0"
                  />
                  {area.name}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA in sidebar */}
            <div className="mt-8">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi%20I%20need%20rental%20help%20in%20Kota`}
                target="_blank"
                rel="noreferrer"
                data-ocid="footer.whatsapp_cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #128C7E, #25D366)",
                }}
              >
                <MessageCircle size={16} className="fill-white" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 sm:mt-12 pt-5 sm:pt-6 pb-20 sm:pb-0 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/35 text-xs">
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-white/40 text-xs font-medium">
            Trusted Rental Assistance Across Kota
          </p>
        </div>
      </div>
    </footer>
  );
}
