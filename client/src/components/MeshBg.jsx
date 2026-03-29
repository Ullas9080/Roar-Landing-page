import { motion } from "framer-motion";
import { useTheme } from "../App";

export default function MeshBg() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full bg-[var(--bg)]">
      {/* 
        Ultra-modern liquid mesh gradient background 
        Using three large, heavily blurred, slow-moving blobs blending Orange, Rose, and Violet
      */}
      
      {/* Blob 1: Top Left (Rose/Purple) */}
      <motion.div
        animate={{
          x: [0, 50, 0, -30, 0],
          y: [0, 30, -20, 10, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full mix-blend-multiply blur-[120px] opacity-40 md:opacity-50"
        style={{
          background: theme === "dark" ? "radial-gradient(circle, #E11D48 0%, transparent 70%)" : "radial-gradient(circle, #FDA4AF 0%, transparent 70%)",
        }}
      />

      {/* Blob 2: Middle Right (Brand Orange) */}
      <motion.div
        animate={{
          x: [0, -60, 20, -10, 0],
          y: [0, -40, 50, -20, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full mix-blend-multiply blur-[120px] opacity-40 md:opacity-50"
        style={{
          background: theme === "dark" ? "radial-gradient(circle, #EA580C 0%, transparent 70%)" : "radial-gradient(circle, #FDBA74 0%, transparent 70%)",
        }}
      />

      {/* Blob 3: Bottom Left (Vibrant Violet) */}
      <motion.div
        animate={{
          x: [0, 40, -40, 20, 0],
          y: [0, -60, 20, -30, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] left-[10%] w-[60%] h-[60%] rounded-full mix-blend-multiply blur-[120px] opacity-40 md:opacity-50"
        style={{
          background: theme === "dark" ? "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" : "radial-gradient(circle, #D8B4FE 0%, transparent 70%)",
        }}
      />

      {/* Noise Texture Overlay for Premium Film Grain Feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}
