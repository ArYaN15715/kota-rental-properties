import { BookOpen, Eye, Key, Shield, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: Shield,
    title: "Verified Rentals",
    desc: "Every property personally inspected by our team. Zero fake listings, zero surprises — only safe, trusted options.",
    accent: "gold",
  },
  {
    icon: Users,
    title: "Local Property Experts",
    desc: "Born and raised in Kota. We know every lane, coaching belt, and neighbourhood nuance inside out.",
    accent: "navy",
  },
  {
    icon: Zap,
    title: "Fast Property Matching",
    desc: "Tell us your budget and requirements. We shortlist verified options within hours, not days.",
    accent: "gold",
  },
  {
    icon: BookOpen,
    title: "Student-Friendly Locations",
    desc: "Specialised housing near Allen, Resonance, FIITJEE and Bansal — safe, quiet, and study-ready.",
    accent: "navy",
  },
  {
    icon: Eye,
    title: "Transparent Assistance",
    desc: "No hidden commissions, no pressure tactics. Clear pricing, honest guidance, every single time.",
    accent: "navy",
  },
  {
    icon: Key,
    title: "Quick Move-In Support",
    desc: "From agreement signing to key handover — we handle every step so you settle in stress-free.",
    accent: "gold",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-12 sm:py-20 px-4 bg-[#f8f9fa]"
      data-ocid="why-us.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold uppercase tracking-widest mb-4">
            <Shield size={12} />
            Trusted Since 2019
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0F1E3D] leading-tight">
            Why Choose{" "}
            <span className="relative">
              Kota Rental
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #F59E0B 0%, transparent 100%)",
                }}
              />
            </span>{" "}
            &amp; Properties
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We combine local expertise, verified listings, and personalised
            service to give students, families and professionals the rental
            experience they deserve.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((feature, i) => {
            const isGold = feature.accent === "gold";
            const iconBg = isGold
              ? "bg-[#F59E0B]/10 border-[#F59E0B]/25"
              : "bg-[#0F1E3D]/8 border-[#1A4FBF]/20";
            const iconColor = isGold ? "#F59E0B" : "#1A4FBF";
            const borderAccent = isGold ? "#F59E0B" : "#1A4FBF";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(15,30,61,0.08)] hover:shadow-[0_8px_32px_rgba(15,30,61,0.14)] transition-all duration-300 overflow-hidden group cursor-default"
                style={{ borderLeft: `4px solid ${borderAccent}` }}
                data-ocid={`why-us.item.${i + 1}`}
              >
                {/* subtle background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${borderAccent}08 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon
                    size={22}
                    style={{ color: iconColor }}
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <h3 className="font-display font-bold text-[#0F1E3D] text-lg mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
