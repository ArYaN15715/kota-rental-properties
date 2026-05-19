import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const WA_LINK =
  "https://wa.me/919999999999?text=Hi%20I%20am%20looking%20for%20rental%20property%20in%20Kota";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="fixed bottom-[5.5rem] right-4 z-40 lg:bottom-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 220, damping: 16 }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 8, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 8 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-white/10 pointer-events-none"
        >
          Chat with us on WhatsApp
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-navy border-r border-t border-white/10 rotate-45" />
        </motion.div>
      )}

      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl animate-glow-pulse after:absolute after:inset-0 after:rounded-full after:bg-green-500 after:opacity-[0.08] after:scale-150 after:pointer-events-none"
        style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}
        data-ocid="whatsapp.float_button"
      >
        <MessageCircle size={28} className="text-white fill-white" />
      </motion.a>
    </motion.div>
  );
}
