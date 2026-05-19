import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Parent",
    location: "From Patna, Bihar",
    rating: 5,
    review:
      "Finding accommodation for my son was incredibly stressful until we contacted Kota Rental & Properties. They found us a verified flat near Allen in just 2 days — no fake listings, no hidden charges.",
  },
  {
    id: "t2",
    name: "Rahul Gupta",
    role: "Student",
    location: "From Lucknow, UP",
    rating: 5,
    review:
      "I needed a PG near Vigyan Nagar coaching centers urgently. The team showed me 4 verified options in one afternoon. The property was exactly as described — safe and student-friendly.",
  },
  {
    id: "t3",
    name: "Kavita Mehta",
    role: "Working Professional",
    location: "From Jaipur, Rajasthan",
    rating: 5,
    review:
      "Relocated from Jaipur to Kota for work. The team helped me find a furnished 2 BHK in Mahaveer Nagar within 3 days. The rental agreement process was completely transparent and smooth.",
  },
  {
    id: "t4",
    name: "Suresh Agarwal",
    role: "Parent",
    location: "From Darbhanga, Bihar",
    rating: 5,
    review:
      "We came from Bihar specifically to find accommodation for our daughter. The team was patient, honest, and understood our budget. Found a safe, verified place near her coaching center.",
  },
  {
    id: "t5",
    name: "Anita Verma",
    role: "Working Professional",
    location: "From Delhi, NCR",
    rating: 5,
    review:
      "Excellent service! Got a beautiful 3 BHK in Talwandi at a fair price. The team negotiated the rent and ensured everything was in order before move-in. Highly professional.",
  },
  {
    id: "t6",
    name: "Deepak Joshi",
    role: "Family",
    location: "From Ajmer, Rajasthan",
    rating: 5,
    review:
      "We were searching for a family flat in Rajeev Gandhi Nagar. Within 48 hours, we had three verified options. The team understood our requirements perfectly and made relocation stress-free.",
  },
  {
    id: "t7",
    name: "Meera Patel",
    role: "Student",
    location: "From Ahmedabad, Gujarat",
    rating: 5,
    review:
      "As a girl student from out of state, safety was my top priority. Kota Rental helped me find a girls PG in Vigyan Nagar that was verified, furnished, and near my coaching. Parents were relieved!",
  },
];

const ROLE_COLORS: Record<string, string> = {
  Student: "bg-royalBlue/10 text-royalBlue",
  Parent: "bg-gold/10 text-gold",
  "Working Professional": "bg-verifiedGreen/10 text-verifiedGreen",
  Family: "bg-navy/10 text-navy",
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % TESTIMONIALS.length),
    [],
  );
  const prev = useCallback(
    () =>
      setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isHovered]);

  // Responsive visible count
  const getVisible = () => {
    // Always render 3 max; CSS hides on smaller screens
    return [
      TESTIMONIALS[current % TESTIMONIALS.length],
      TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
      TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
    ];
  };
  const visible = getVisible();

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 px-4"
      style={{ background: "#f8fafc" }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-royalBlue text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-royalBlue/10">
            <Star size={12} className="fill-royalBlue" />
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-3">
            What Our Clients{" "}
            <span className="relative">
              Say
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gold/60 rounded-full" />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real experiences from students, parents, and families who found
            their ideal rental across Kota.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  i === 1 ? "" : i === 2 ? "hidden lg:flex" : ""
                }`}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={`star-${t.id}-${j}`}
                      size={15}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-slate-700 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #1A4FBF, #0F1E3D)",
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold text-navy text-sm truncate">
                      {t.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          ROLE_COLORS[t.role] ?? "bg-navy/10 text-navy"
                        }`}
                      >
                        {t.role}
                      </span>
                      <span className="flex items-center gap-0.5 text-slate-500 text-xs">
                        <MapPin size={10} />
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            type="button"
            aria-label="Previous testimonials"
            data-ocid="testimonials.prev_button"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-navy hover:border-royalBlue hover:text-royalBlue transition-all duration-200 hidden sm:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            type="button"
            aria-label="Next testimonials"
            data-ocid="testimonials.next_button"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-navy hover:border-royalBlue hover:text-royalBlue transition-all duration-200 hidden sm:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile arrows (below) */}
        <div className="flex sm:hidden justify-center gap-3 mt-5">
          <button
            onClick={prev}
            type="button"
            aria-label="Previous testimonials"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center text-navy"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            type="button"
            aria-label="Next testimonials"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center text-navy"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setCurrent(i)}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              data-ocid={`testimonials.dot.${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-navy"
                  : "w-2 h-2 bg-slate-300 hover:bg-royalBlue/50"
              }`}
            />
          ))}
        </div>

        {/* Glass strip CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-8 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F1E3D 0%, #1A4FBF 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, #F59E0B, transparent 60%)",
            }}
          />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white/70 text-sm mb-1">
                Trusted by 500+ families
              </p>
              <h3 className="text-white font-display font-bold text-xl">
                Ready to find your verified rental in Kota?
              </h3>
            </div>
            <a
              href="https://wa.me/919999999999?text=Hi%20I%20am%20looking%20for%20rental%20property%20in%20Kota"
              target="_blank"
              rel="noreferrer"
              data-ocid="testimonials.cta_button"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-navy text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(90deg, #F59E0B, #FBBF24)" }}
            >
              <Star size={16} className="fill-navy" />
              Talk to Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
