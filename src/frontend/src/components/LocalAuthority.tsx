import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const AREAS = [
  {
    name: "Talwandi",
    count: "45+",
    label: "properties",
    feature: "Near Allen Career Institute",
    color: "#F59E0B",
  },
  {
    name: "Vigyan Nagar",
    count: "38+",
    label: "properties",
    feature: "Near Resonance Classes",
    color: "#1A4FBF",
  },
  {
    name: "Rajeev Gandhi Nagar",
    count: "30+",
    label: "properties",
    feature: "Near FIITJEE & Bansal",
    color: "#10B981",
  },
  {
    name: "Nayapura",
    count: "25+",
    label: "properties",
    feature: "Central Kota Location",
    color: "#F59E0B",
  },
  {
    name: "Mahaveer Nagar",
    count: "20+",
    label: "properties",
    feature: "Peaceful Residential Area",
    color: "#1A4FBF",
  },
  {
    name: "IPIA",
    count: "35+",
    label: "properties",
    feature: "Industrial & Commercial Hub",
    color: "#10B981",
  },
];

const STATS = [
  { num: "193+", label: "Properties Listed" },
  { num: "6", label: "Prime Areas Covered" },
  { num: "50+", label: "Coaching Institutes Nearby" },
  { num: "5 Yrs", label: "Local Expertise" },
];

export default function LocalAuthority() {
  return (
    <section
      id="areas"
      className="py-12 sm:py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0F1E3D 50%, #0d1d3a 100%)",
      }}
      data-ocid="areas.section"
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: "#1A4FBF" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "#F59E0B" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{ background: "#1A4FBF" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin size={12} />
            Kota Local Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            Helping Families &amp; Students
            <br className="hidden sm:block" />{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F59E0B 0%, #fbbf24 100%)",
              }}
            >
              Across Kota Find Better Rentals
            </span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We have deep-rooted local knowledge across all prime residential,
            student, and commercial areas of Kota, Rajasthan.
          </p>
        </motion.div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.48 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
              data-ocid={`areas.item.${i + 1}`}
            >
              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${area.color}50, 0 0 20px ${area.color}18`,
                }}
              />

              <div className="flex items-start justify-between mb-3">
                {/* MapPin with area color */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${area.color}20` }}
                >
                  <MapPin size={18} style={{ color: area.color }} />
                </div>

                {/* Property count badge */}
                <div
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: `${area.color}20`,
                    color: area.color,
                    border: `1px solid ${area.color}40`,
                  }}
                >
                  {area.count}
                  <span className="font-normal opacity-80">{area.label}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-white text-base leading-tight mb-1.5 group-hover:text-[#F59E0B] transition-colors duration-200">
                {area.name}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {area.feature}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl p-1 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(26,79,191,0.15) 100%)",
            border: "1px solid rgba(245,158,11,0.2)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex flex-col items-center justify-center py-5 sm:py-6 px-3 sm:px-4 text-center bg-[#0d1a35]"
                data-ocid={`areas.stat.${i + 1}`}
              >
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#F59E0B] leading-none mb-1">
                  {stat.num}
                </span>
                <span className="text-white/55 text-xs leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
