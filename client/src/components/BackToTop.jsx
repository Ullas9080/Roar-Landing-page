import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 8px 24px rgba(255,107,53,0.25)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50
            w-12 h-12 bg-white border border-gray-200
            text-gray-700 hover:text-[#FF6B35] hover:border-orange-300
            rounded-full flex items-center justify-center
            shadow-lg shadow-gray-200/80
            group transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 relative z-10 transition-colors duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
