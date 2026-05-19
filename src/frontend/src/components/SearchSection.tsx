import { Button } from "@/components/ui/button";
import { useFilterStore } from "@/store/filterStore";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";

const LOCATIONS = [
  { label: "All Areas", value: "" },
  { label: "Talwandi", value: "Talwandi" },
  { label: "Vigyan Nagar", value: "Vigyan Nagar" },
  { label: "Rajeev Gandhi Nagar", value: "Rajeev Gandhi Nagar" },
  { label: "Nayapura", value: "Nayapura" },
  { label: "Mahaveer Nagar", value: "Mahaveer Nagar" },
  { label: "IPIA", value: "IPIA" },
];

const BUDGETS = [
  { label: "Any Budget", value: "" },
  { label: "Under ₹5K", value: "Under ₹5K" },
  { label: "₹5K–₹10K", value: "₹5K–₹10K" },
  { label: "₹10K–₹20K", value: "₹10K–₹20K" },
  { label: "Above ₹20K", value: "Above ₹20K" },
];

const TYPES = [
  { label: "All Types", value: "" },
  { label: "Room", value: "Room" },
  { label: "Flat", value: "Flat" },
  { label: "PG", value: "PG" },
  { label: "Hostel", value: "Hostel" },
  { label: "Apartment", value: "Apartment" },
];

const COACHING = [
  { label: "All Coaching", value: "" },
  { label: "Allen", value: "Allen" },
  { label: "Resonance", value: "Resonance" },
  { label: "FIITJEE", value: "FIITJEE" },
  { label: "Bansal", value: "Bansal" },
  { label: "Vibrant", value: "Vibrant" },
];

const selectClass =
  "w-full border border-[#e2e8f0] rounded-xl px-3 py-2.5 text-sm bg-white text-[#0F1E3D] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/40 focus:border-[#1A4FBF] transition-all duration-200 cursor-pointer hover:border-[#1A4FBF]/50 shadow-sm appearance-none min-h-[44px]";

const labelClass =
  "block text-xs sm:text-xs font-bold text-[#0F1E3D]/70 uppercase tracking-wider mb-1.5";

export default function SearchSection() {
  const {
    location,
    budget,
    propertyType,
    studentFriendly,
    furnished,
    nearbyCoaching,
    setLocation,
    setBudget,
    setPropertyType,
    setStudentFriendly,
    setFurnished,
    setNearbyCoaching,
    resetFilters,
  } = useFilterStore();

  const hasFilters =
    !!location ||
    !!budget ||
    !!propertyType ||
    studentFriendly ||
    !!furnished ||
    !!nearbyCoaching;

  const handleSearch = () => {
    document
      .getElementById("properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="search"
      className="py-10 sm:py-14 px-4"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #f1f5fd 100%)",
      }}
      data-ocid="search.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-[#1A4FBF] text-xs font-bold uppercase tracking-widest mb-3 bg-[#1A4FBF]/8 px-4 py-1.5 rounded-full">
            <SlidersHorizontal size={13} />
            Smart Property Search
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F1E3D] leading-tight">
            Find Your Perfect{" "}
            <span className="text-[#1A4FBF]">Rental in Kota</span>
          </h2>
          <p className="text-[#0F1E3D]/55 mt-2.5 text-base max-w-xl mx-auto">
            Use filters below to discover verified rooms, flats, PGs, and
            apartments across all major Kota areas.
          </p>
        </motion.div>

        {/* Filter card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-[0_4px_32px_rgba(15,30,61,0.10)] border border-[#e2e8f0] p-6"
        >
          {/* Row 1: 3 selects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="s-location" className={labelClass}>
                Location
              </label>
              <div className="relative">
                <select
                  id="s-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={selectClass}
                  data-ocid="search.location_select"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l.value} value={l.value}>
                      {l.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A4FBF]/50">
                  ▾
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="s-budget" className={labelClass}>
                Budget
              </label>
              <div className="relative">
                <select
                  id="s-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={selectClass}
                  data-ocid="search.budget_select"
                >
                  {BUDGETS.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A4FBF]/50">
                  ▾
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="s-type" className={labelClass}>
                Property Type
              </label>
              <div className="relative">
                <select
                  id="s-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className={selectClass}
                  data-ocid="search.type_select"
                >
                  {TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A4FBF]/50">
                  ▾
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: coaching select + furnished select + checkboxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <label htmlFor="s-coaching" className={labelClass}>
                Near Coaching
              </label>
              <div className="relative">
                <select
                  id="s-coaching"
                  value={nearbyCoaching}
                  onChange={(e) => setNearbyCoaching(e.target.value)}
                  className={selectClass}
                  data-ocid="search.coaching_select"
                >
                  {COACHING.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A4FBF]/50">
                  ▾
                </span>
              </div>
            </div>

            {/* Student Friendly toggle */}
            <div className="flex flex-col justify-end">
              <span className="block text-xs font-bold text-[#0F1E3D]/60 uppercase tracking-wider mb-1.5">
                Student Friendly
              </span>
              <label
                className="flex items-center gap-3 cursor-pointer bg-[#f8faff] border border-[#e2e8f0] rounded-xl px-4 py-2.5 hover:border-[#1A4FBF]/50 transition-all duration-200 select-none"
                data-ocid="search.student_friendly_checkbox"
              >
                <span
                  className={`relative inline-block w-10 h-5 rounded-full transition-colors duration-200 ${
                    studentFriendly ? "bg-[#1A4FBF]" : "bg-[#e2e8f0]"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                      studentFriendly ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                  <input
                    type="checkbox"
                    checked={studentFriendly}
                    onChange={(e) => setStudentFriendly(e.target.checked)}
                    className="sr-only"
                  />
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    studentFriendly ? "text-[#1A4FBF]" : "text-[#0F1E3D]/55"
                  }`}
                >
                  {studentFriendly ? "Yes — Student Friendly" : "Show all"}
                </span>
              </label>
            </div>

            {/* Furnished toggle */}
            <div className="flex flex-col justify-end">
              <span className="block text-xs font-bold text-[#0F1E3D]/60 uppercase tracking-wider mb-1.5">
                Furnished
              </span>
              <label
                className="flex items-center gap-3 cursor-pointer bg-[#f8faff] border border-[#e2e8f0] rounded-xl px-4 py-2.5 hover:border-[#1A4FBF]/50 transition-all duration-200 select-none"
                data-ocid="search.furnished_checkbox"
              >
                <span
                  className={`relative inline-block w-10 h-5 rounded-full transition-colors duration-200 ${
                    furnished === "Furnished" ? "bg-[#F59E0B]" : "bg-[#e2e8f0]"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                      furnished === "Furnished"
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                  <input
                    type="checkbox"
                    checked={furnished === "Furnished"}
                    onChange={(e) =>
                      setFurnished(e.target.checked ? "Furnished" : "")
                    }
                    className="sr-only"
                  />
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    furnished === "Furnished"
                      ? "text-[#F59E0B]"
                      : "text-[#0F1E3D]/55"
                  }`}
                >
                  {furnished === "Furnished"
                    ? "Furnished Only"
                    : "Any Furnishing"}
                </span>
              </label>
            </div>
          </div>

          {/* Action row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#e2e8f0]">
            {hasFilters ? (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-sm text-[#0F1E3D]/45 hover:text-[#0F1E3D]/80 transition-colors duration-200"
                data-ocid="search.reset_button"
              >
                <X size={14} />
                Clear all filters
              </button>
            ) : (
              <span className="text-xs text-[#0F1E3D]/35">
                Use filters above to narrow results
              </span>
            )}
            <Button
              type="button"
              onClick={handleSearch}
              className="flex items-center gap-2 text-white font-bold px-8 py-3 h-auto rounded-xl border-0 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(26,79,191,0.4)] active:scale-95 text-sm"
              style={{
                background:
                  "linear-gradient(135deg, #0F1E3D 0%, #1A4FBF 70%, #F59E0B 100%)",
              }}
              data-ocid="search.search_button"
            >
              <Search size={15} />
              Search Properties
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
