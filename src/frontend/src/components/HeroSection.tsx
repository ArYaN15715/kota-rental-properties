import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const TRUST_BADGES = [
  { icon: CheckCircle2, label: "Verified Listings", color: "text-[#10B981]" },
  { icon: MapPin, label: "Local Experts", color: "text-[#F59E0B]" },
  { icon: Clock, label: "Fast Assistance", color: "text-[#1A4FBF]" },
  {
    icon: GraduationCap,
    label: "Student-Friendly Areas",
    color: "text-[#F59E0B]",
  },
];

const FLOAT_CARDS = [
  {
    id: 1,
    title: "3 BHK Apartment – Talwandi",
    price: "₹18,000/mo",
    tag: "Student Friendly",
    tagColor: "bg-[#F59E0B]/20 text-[#D97706]",
    type: "Apartment",
  },
  {
    id: 2,
    title: "2 BHK Flat – Vigyan Nagar",
    price: "₹12,000/mo",
    tag: "Near Coaching",
    tagColor: "bg-[#1A4FBF]/20 text-[#1A4FBF]",
    type: "Flat",
  },
  {
    id: 3,
    title: "PG Room – Rajeev Gandhi Nagar",
    price: "₹5,500/mo",
    tag: "Budget Pick",
    tagColor: "bg-[#10B981]/20 text-[#10B981]",
    type: "PG",
  },
  {
    id: 4,
    title: "1 BHK Studio – Nayapura",
    price: "₹8,000/mo",
    tag: "Furnished",
    tagColor: "bg-purple-500/20 text-purple-300",
    type: "Studio",
  },
];

const WA_NUMBER = "919999999999";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen gradient-hero overflow-hidden flex items-center pt-16 sm:pt-20 pb-28 sm:pb-10"
      data-ocid="hero.section"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none hidden md:block animate-pulse"
        style={{ background: "#1A4FBF" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl hidden md:block pointer-events-none"
        style={{ background: "#F59E0B" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl hidden md:block pointer-events-none"
        style={{ background: "#1A4FBF" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20 grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* LEFT COLUMN */}
        <div className="space-y-7 order-1">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge className="badge-verified text-xs font-semibold px-3 py-1.5 rounded-full border-0 inline-flex items-center gap-1.5">
              <Shield size={12} />
              Kota's Most Trusted Rental Platform
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight"
          >
            Find Verified <br className="hidden sm:block" />
            Rentals in Kota{" "}
            <span className="relative">
              <span className="text-gradient-gold">Without the</span>
              <br />
              <span className="text-gradient-gold">Stress</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg"
          >
            Helping students, parents, and families discover trusted rooms,
            flats, PGs, and rental properties across Kota quickly and safely.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("properties")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F1E3D] font-bold text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-4 h-auto min-h-[44px] rounded-2xl border-0 shadow-lg hover:from-[#D97706] hover:to-[#B45309] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] hover:shadow-xl w-full xs:w-auto"
              data-ocid="hero.find_rentals_button"
              type="button"
            >
              <Search size={17} />
              Find Rentals
            </Button>
            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20need%20help%20finding%20a%20rental%20in%20Kota`,
                  "_blank",
                )
              }
              variant="outline"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 border-0 text-white font-semibold text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-4 h-auto min-h-[44px] rounded-2xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-xl w-full xs:w-auto"
              data-ocid="hero.whatsapp_button"
              type="button"
            >
              <MessageCircle size={17} />
              Talk on WhatsApp
            </Button>
          </motion.div>

          {/* Trust badge chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.44 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1.5 sm:px-3.5 sm:py-2 text-white/90 text-xs sm:text-sm font-medium border border-white/15"
              >
                <badge.icon size={14} className={badge.color} />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="flex gap-5 sm:gap-8 pt-1"
          >
            {[
              { num: "500+", label: "Properties" },
              { num: "1200+", label: "Families Helped" },
              { num: "4.9", label: "Rating", star: true },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline gap-1 text-2xl font-display font-bold text-white">
                  {s.num}
                  {s.star && (
                    <Star
                      size={14}
                      className="text-[#F59E0B] fill-[#F59E0B] mb-0.5"
                    />
                  )}
                </div>
                <div className="text-white/55 text-xs mt-0.5 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN — Property cards showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="relative order-2 hidden md:block"
          data-ocid="hero.property_cards"
        >
          {/* Hero property image card */}
          <div className="relative w-full max-w-sm ml-auto rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/generated/hero-property.dim_1200x800.jpg"
              alt="Premium rental property in Kota"
              className="w-full object-cover h-60 rounded-3xl"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,30,61,0.85) 0%, rgba(15,30,61,0.2) 50%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-1.5 mb-1">
                <CheckCircle2 size={13} className="text-[#10B981]" />
                <span className="text-xs font-bold text-[#10B981]">
                  Verified
                </span>
                <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B]">
                  Student Friendly
                </span>
              </div>
              <div className="font-display font-semibold text-white text-sm">
                3 BHK Apartment – Talwandi
              </div>
              <div className="text-[#F59E0B] font-bold text-base">
                ₹18,000/mo
              </div>
            </div>
          </div>

          {/* Floating mini cards */}
          {FLOAT_CARDS.slice(1).map((card, i) => (
            <motion.div
              key={card.id}
              animate={{ y: [0, -(6 + i * 2), 0] }}
              transition={{
                duration: 3.5 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.1,
                ease: "easeInOut",
              }}
              className={`absolute bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-xl border border-white/60 ${
                i === 0
                  ? "right-0 -top-6 w-52"
                  : i === 1
                    ? "-left-4 top-28 w-48"
                    : "right-2 bottom-2 w-44"
              }`}
              data-ocid={`hero.float_card.${i + 1}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-[#10B981]" />
                  <span className="text-xs font-bold text-[#10B981]">
                    Verified
                  </span>
                </div>
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${card.tagColor}`}
                >
                  {card.tag}
                </span>
              </div>
              <div className="text-[#0F1E3D] font-display font-semibold text-xs leading-tight">
                {card.title}
              </div>
              <div className="text-[#1A4FBF] font-bold text-sm mt-1">
                {card.price}
              </div>
              <div className="text-[#0F1E3D]/50 text-[10px] mt-0.5 font-medium uppercase tracking-wide">
                {card.type}
              </div>
            </motion.div>
          ))}

          {/* Decorative floating dot elements */}
          <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B]/30 to-[#F59E0B]/10 blur-md" />
          <div className="absolute -bottom-2 right-8 w-8 h-8 rounded-full bg-gradient-to-br from-[#1A4FBF]/40 to-[#1A4FBF]/10 blur-sm" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center pt-2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("search")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-1 h-2.5 rounded-full bg-white/50" />
      </motion.div>
    </section>
  );
}
