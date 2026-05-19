import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProperties } from "@/hooks/useProperties";
import { useFilterStore } from "@/store/filterStore";
import type { Property } from "@/types";
import {
  Building2,
  CheckCircle2,
  GraduationCap,
  MapPin,
  MessageCircle,
  RefreshCw,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";

const WA_NUMBER = "919999999999";

// Property type to gradient map
const TYPE_GRADIENTS: Record<string, string> = {
  Apartment: "linear-gradient(135deg,#0F1E3D 0%,#1A4FBF 100%)",
  Flat: "linear-gradient(135deg,#134074 0%,#2563eb 100%)",
  Room: "linear-gradient(135deg,#1e3a5f 0%,#1A4FBF 100%)",
  PG: "linear-gradient(135deg,#0a2342 0%,#1d4ed8 100%)",
  "PG Room": "linear-gradient(135deg,#0a2342 0%,#1d4ed8 100%)",
  Hostel: "linear-gradient(135deg,#0F1E3D 0%,#7c3aed 100%)",
  Studio: "linear-gradient(135deg,#164e63 0%,#0891b2 100%)",
};

function getCoachingText(nearbyCoaching: string | string[]): string {
  if (Array.isArray(nearbyCoaching)) return nearbyCoaching.join(", ");
  return nearbyCoaching;
}

function parseBudgetFilter(budget: string, price: string): boolean {
  if (!budget) return true;
  const num = Number.parseInt(price.replace(/[^0-9]/g, ""), 10);
  if (Number.isNaN(num)) return true;
  if (budget === "Under ₹5K") return num < 5000;
  if (budget === "₹5K–₹10K") return num >= 5000 && num <= 10000;
  if (budget === "₹10K–₹20K") return num > 10000 && num <= 20000;
  if (budget === "Above ₹20K") return num > 20000;
  return true;
}

function matchesCoaching(
  nearbyCoaching: string | string[],
  filter: string,
): boolean {
  if (!filter) return true;
  const text = getCoachingText(nearbyCoaching).toLowerCase();
  return text.includes(filter.toLowerCase());
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0F1E3D]/10 animate-pulse">
      <div className="h-48 bg-[#0F1E3D]/20" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-[#0F1E3D]/15 rounded-lg w-3/4" />
        <div className="h-6 bg-[#0F1E3D]/15 rounded-lg w-1/2" />
        <div className="h-3 bg-[#0F1E3D]/10 rounded-lg w-2/3" />
        <div className="flex gap-2">
          <div className="h-3 bg-[#0F1E3D]/10 rounded-full w-16" />
          <div className="h-3 bg-[#0F1E3D]/10 rounded-full w-16" />
          <div className="h-3 bg-[#0F1E3D]/10 rounded-full w-12" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="h-9 bg-[#0F1E3D]/15 rounded-xl flex-1" />
          <div className="h-9 bg-[#0F1E3D]/10 rounded-xl flex-1" />
        </div>
      </div>
    </div>
  );
}

function PropertyCard({
  property,
  index,
}: { property: Property; index: number }) {
  const coachingText = getCoachingText(property.nearbyCoaching);
  const waText = encodeURIComponent(
    `Hi, I'm interested in: ${property.title} at ${property.price}. Please share details.`,
  );
  const gradient =
    TYPE_GRADIENTS[property.propertyType] ??
    "linear-gradient(135deg,#0F1E3D 0%,#1A4FBF 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.018 }}
      className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.28)] group cursor-pointer flex flex-col"
      style={{ background: "rgba(255,255,255,0.05)" }}
      data-ocid={`properties.item.${index + 1}`}
    >
      {/* Image / placeholder */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        {property.imageUrl &&
        property.imageUrl !== "/assets/images/placeholder.svg" ? (
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{ background: gradient }}
          >
            <Building2 size={40} className="text-white/30 mb-2" />
            <span className="text-white/50 text-sm font-medium">
              {property.propertyType}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Verified badge */}
        {property.verified && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#22c55e] text-white rounded-full px-2.5 py-1 text-[11px] font-bold shadow-lg">
            <CheckCircle2 size={11} />
            Verified
          </div>
        )}

        {/* Property type badge */}
        <Badge
          className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full border-0"
          style={{ background: "rgba(245,158,11,0.92)", color: "#0F1E3D" }}
        >
          {property.propertyType}
        </Badge>

        {/* Student friendly tag bottom */}
        {property.studentFriendly && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-[#1A4FBF]/90 text-white rounded-full px-2.5 py-1 text-[11px] font-semibold">
            <GraduationCap size={11} />
            Student Friendly
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-base leading-snug mb-1 truncate">
          {property.title}
        </h3>

        {/* Price */}
        <div className="text-2xl font-display font-extrabold text-[#F59E0B] mb-2">
          {property.price}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-white/55 text-xs mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {property.location}
          </span>
          <span className="flex items-center gap-1">
            <Building2 size={11} />
            {property.propertyType}
          </span>
        </div>

        {/* Amenities */}
        {property.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {property.amenities.slice(0, 3).map((am) => (
              <span
                key={am}
                className="flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full text-white/70"
                style={{ background: "rgba(255,255,255,0.09)" }}
              >
                <Wifi size={9} />
                {am}
              </span>
            ))}
          </div>
        )}

        {/* Coaching info */}
        {coachingText && (
          <div className="text-[11px] text-[#F59E0B]/80 mb-3 flex items-center gap-1 truncate">
            <GraduationCap size={11} />
            Near: {coachingText}
          </div>
        )}

        {/* CTAs */}
        <div className="flex gap-2 mt-auto pt-1">
          <Button
            type="button"
            onClick={() =>
              window.open(`https://wa.me/${WA_NUMBER}?text=${waText}`, "_blank")
            }
            className="flex-1 flex items-center justify-center gap-1.5 text-white text-xs font-bold py-2 h-auto rounded-xl border-0 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_16px_rgba(34,197,94,0.5)] active:scale-95"
            style={{ background: "#22c55e" }}
            data-ocid={`properties.whatsapp_button.${index + 1}`}
          >
            <MessageCircle size={13} />
            WhatsApp
          </Button>
          <Button
            type="button"
            onClick={() =>
              window.open(`https://wa.me/${WA_NUMBER}?text=${waText}`, "_blank")
            }
            className="flex-1 flex items-center justify-center gap-1.5 text-white text-xs font-bold py-2 h-auto rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
            data-ocid={`properties.view_button.${index + 1}`}
          >
            Get Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProperties() {
  const { data: properties = [], isLoading } = useProperties();
  const {
    location,
    budget,
    propertyType,
    studentFriendly,
    furnished,
    nearbyCoaching,
  } = useFilterStore();
  const { resetFilters } = useFilterStore();

  const filtered = properties.filter((p) => {
    if (location && !p.location.toLowerCase().includes(location.toLowerCase()))
      return false;
    if (propertyType && p.propertyType !== propertyType) return false;
    if (studentFriendly && !p.studentFriendly) return false;
    if (furnished === "Furnished" && !p.furnished) return false;
    if (furnished === "Unfurnished" && p.furnished) return false;
    if (!parseBudgetFilter(budget, p.price)) return false;
    if (!matchesCoaching(p.nearbyCoaching, nearbyCoaching)) return false;
    return true;
  });

  return (
    <section
      id="properties"
      className="py-16 px-4"
      style={{
        background: "linear-gradient(180deg, #0F1E3D 0%, #0a1628 100%)",
      }}
      data-ocid="properties.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-3 bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-4 py-1.5 rounded-full">
            <Building2 size={13} />
            Verified Listings
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
            Featured Properties{" "}
            <span
              className=""
              style={{
                background: "linear-gradient(90deg, #F59E0B, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              in Kota
            </span>
          </h2>
          <p className="text-white/50 mt-2.5 text-base">
            {isLoading
              ? "Loading verified properties…"
              : `${filtered.length} verified propert${
                  filtered.length === 1 ? "y" : "ies"
                } available`}
          </p>
        </motion.div>

        {/* Loading state */}
        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="properties.loading_state"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SkeletonCard key={n} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
            data-ocid="properties.empty_state"
          >
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-5"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <Building2 size={36} className="text-white/25" />
            </div>
            <h3 className="text-white/80 text-xl font-bold mb-2">
              No properties found
            </h3>
            <p className="text-white/40 text-sm mb-6 max-w-xs mx-auto">
              No listings match your current filters. Try adjusting or clearing
              your search criteria.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#0F1E3D] transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "#F59E0B" }}
              data-ocid="properties.reset_filters_button"
            >
              <RefreshCw size={14} />
              Reset Filters
            </button>
          </motion.div>
        ) : (
          /* Property grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <PropertyCard key={String(p.id)} property={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
