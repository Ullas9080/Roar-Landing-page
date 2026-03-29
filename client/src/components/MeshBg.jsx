import { useTheme } from "../App";

export default function MeshBg() {
  const { theme } = useTheme();
  
  // Entirely stripped down to an ultra-clean, very subtle ambient fade at the top,
  // providing exactly the distraction-free canvas requested.
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full bg-[var(--bg)]">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--bg-1)] to-transparent opacity-50" />
    </div>
  );
}
