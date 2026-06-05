import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_RAW } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-500/40"
        aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        href={`tel:${PHONE_RAW}`}
        className="h-14 w-14 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-brand"
        aria-label="Call">
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
