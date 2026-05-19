import { MessageCircle, Phone } from "lucide-react";

const WA_LINK =
  "https://wa.me/919999999999?text=Hi%20I%20am%20looking%20for%20rental%20property%20in%20Kota";

export default function MobileBottomCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[45] lg:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
      data-ocid="mobile_cta.bar"
    >
      {/* Gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(15,30,61,1) 60%, rgba(15,30,61,0.85) 85%, transparent 100%)",
        }}
      />

      <div className="relative flex gap-3 px-4 pt-3 pb-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
        {/* Call Now */}
        <a
          href="tel:+919999999999"
          data-ocid="mobile_cta.call_button"
          className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3.5 min-h-[52px] rounded-2xl text-white border border-white/20 transition-all active:scale-95"
          style={{ background: "linear-gradient(135deg, #0F1E3D, #1A4FBF)" }}
        >
          <Phone size={17} />
          Call Now
        </a>

        {/* WhatsApp Expert */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          data-ocid="mobile_cta.whatsapp_button"
          className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3.5 min-h-[52px] rounded-2xl text-white shadow-lg transition-all active:scale-95"
          style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}
        >
          <MessageCircle size={17} className="fill-white" />
          WhatsApp Expert
        </a>
      </div>
    </div>
  );
}
