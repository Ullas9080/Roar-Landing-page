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
          whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(249,115,22,0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50
            w-12 h-12 bg-[var(--card-bg)] border border-[var(--border)]
            text-[var(--text-muted)] hover:text-[var(--orange)] hover:border-[var(--orange)]
            rounded-full flex items-center justify-center
            shadow-sm group transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 relative z-10 transition-colors duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
