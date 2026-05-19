import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSubmitInquiry } from "@/hooks/useProperties";
import type { InquiryInput } from "@/types";
import {
  Building2,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const PROPERTY_TYPES = [
  { value: "Room", label: "Single Room" },
  { value: "Flat", label: "Flat / Apartment" },
  { value: "PG", label: "PG (Paying Guest)" },
  { value: "Hostel", label: "Hostel" },
  { value: "Apartment", label: "3 BHK / Family Apartment" },
];

const WA_NUMBER = "919999999999";

const CONTACT_ITEMS = [
  {
    id: "phone",
    icon: Phone,
    color: "#F59E0B",
    label: "Call Us Directly",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    color: "#25D366",
    label: "WhatsApp",
    value: "Instant response",
    href: `https://wa.me/${WA_NUMBER}?text=Hi%20I%20need%20rental%20assistance%20in%20Kota`,
  },
  {
    id: "location",
    icon: MapPin,
    color: "#1A4FBF",
    label: "Office Location",
    value: "Kota, Rajasthan 324001",
    href: null,
  },
  {
    id: "hours",
    icon: Clock,
    color: "#10B981",
    label: "Office Hours",
    value: "9 AM – 9 PM, 7 days/week",
    href: null,
  },
];

const TRUST_BADGES = [
  "Free consultation, no fees",
  "Curated verified property list",
  "Same-day property visits",
  "Transparent rental agreements",
  "No hidden charges ever",
];

export default function InquirySection() {
  const { mutate, isPending } = useSubmitInquiry();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryInput>();

  const onSubmit = (data: InquiryInput) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Inquiry sent! We'll contact you within 30 minutes.");
        setSubmitted(true);
        reset();
      },
      onError: () =>
        toast.error("Something went wrong. Please WhatsApp us directly."),
    });
  };

  return (
    <section
      id="contact"
      data-ocid="inquiry.section"
      className="py-12 sm:py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0F1E3D 0%, #0d1b38 50%, #111b3a 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(26,79,191,0.15), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #F59E0B, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">
            <Shield size={12} />
            Verified Assistance
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Get Verified Rental Assistance Today
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Share your requirements and our local experts will send you a
            curated verified property list within 30 minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-7 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  data-ocid="inquiry.success_state"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-verifiedGreen/20">
                    <CheckCircle2 size={36} className="text-verifiedGreen" />
                  </div>
                  <h3 className="text-white font-display font-bold text-xl">
                    Inquiry Received!
                  </h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Our property expert will call or WhatsApp you within 30
                    minutes with verified options.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    type="button"
                    className="text-gold text-sm font-semibold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="inq-name"
                        className="text-white/80 text-sm font-semibold"
                      >
                        Your Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="inq-name"
                        placeholder="Rahul Sharma"
                        {...register("name", { required: "Name is required" })}
                        className="rounded-xl bg-white/15 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-gold focus-visible:border-gold min-h-[44px]"
                        data-ocid="inquiry.name_input"
                      />
                      {errors.name && (
                        <p
                          className="text-red-400 text-xs"
                          data-ocid="inquiry.name.field_error"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="inq-phone"
                        className="text-white/80 text-sm font-semibold"
                      >
                        Phone / WhatsApp <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="inq-phone"
                        placeholder="+91 98765 43210"
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9+\s-]{10,15}$/,
                            message: "Enter a valid phone number",
                          },
                        })}
                        className="rounded-xl bg-white/15 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-gold focus-visible:border-gold min-h-[44px]"
                        data-ocid="inquiry.phone_input"
                      />
                      {errors.phone && (
                        <p
                          className="text-red-400 text-xs"
                          data-ocid="inquiry.phone.field_error"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="inq-type"
                      className="text-white/80 text-sm font-semibold"
                    >
                      Property Type
                    </Label>
                    <select
                      id="inq-type"
                      {...register("propertyType")}
                      className="w-full rounded-xl px-3 py-2.5 text-sm border text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                      data-ocid="inquiry.type_select"
                    >
                      <option value="" style={{ background: "#0F1E3D" }}>
                        Select property type…
                      </option>
                      {PROPERTY_TYPES.map((t) => (
                        <option
                          key={t.value}
                          value={t.value}
                          style={{ background: "#0F1E3D" }}
                        >
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="inq-message"
                      className="text-white/80 text-sm font-semibold"
                    >
                      Message{" "}
                      <span className="text-white/40 font-normal">
                        (optional)
                      </span>
                    </Label>
                    <textarea
                      id="inq-message"
                      {...register("message")}
                      placeholder="Budget, preferred area, furnishing preference, move-in date…"
                      rows={3}
                      className="w-full rounded-xl px-3 py-2.5 text-sm border text-white placeholder:text-white/30 resize-none focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                      data-ocid="inquiry.message_textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full font-bold py-3 h-auto rounded-xl flex items-center justify-center gap-2 text-navy border-0 hover:scale-[1.01] active:scale-[0.99] transition-transform duration-150"
                    style={{
                      background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
                    }}
                    data-ocid="inquiry.submit_button"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <MessageCircle size={16} />
                        Send Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-white/30 text-xs text-center">
                    No spam. We'll respond within 30 minutes during office
                    hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact cards */}
            <div className="space-y-3">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:bg-white/10"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                    data-ocid={`inquiry.contact_${item.id}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}20` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white/50 text-xs">{item.label}</div>
                      <div className="text-white font-semibold text-sm truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.id}>{inner}</div>
                );
              })}
            </div>

            {/* Large WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hi%20I%20need%20rental%20assistance%20in%20Kota`}
              target="_blank"
              rel="noreferrer"
              data-ocid="inquiry.whatsapp_cta_button"
              className="flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              style={{
                background: "linear-gradient(135deg, #128C7E, #25D366)",
              }}
            >
              <MessageCircle size={22} className="fill-white" />
              Chat on WhatsApp Now
            </a>

            {/* Trust badges */}
            <div
              className="rounded-xl p-5 border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider mb-3">
                <Shield size={12} className="text-gold" />
                Why Contact Us?
              </div>
              <ul className="space-y-2">
                {TRUST_BADGES.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-verifiedGreen shrink-0"
                    />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Building icon trust note */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gold/10 border border-gold/20">
              <Building2 size={20} className="text-gold shrink-0" />
              <p className="text-white/70 text-xs leading-relaxed">
                Trusted by{" "}
                <span className="text-white font-bold">500+ families</span>{" "}
                across Kota since 2018. All properties personally verified.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
