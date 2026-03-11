import React from "react";

// Reusable mesh background used across multiple pages.  
// Accepts `prominent` prop for stronger opacity (e.g. on homepage hero).
export default function MeshBg({ prominent = false }) {
  const opacity = prominent ? 0.22 : 0.14;
  const dotOpacity = prominent ? 0.6 : 0.4;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Blob 1 — indigo top-left */}
      <div
        className="aurora-1 absolute rounded-full"
        style={{
          width: "680px",
          height: "680px",
          top: "-180px",
          left: "-100px",
          background: `radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)`,
          opacity,
        }}
      />
      {/* Blob 2 — cyan/teal top-right */}
      <div
        className="aurora-2 absolute rounded-full"
        style={{
          width: "520px",
          height: "520px",
          top: "0px",
          right: "-80px",
          background: `radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)`,
          opacity: opacity * 0.75,
        }}
      />
      {/* Blob 3 — violet center-bottom */}
      <div
        className="aurora-3 absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-80px",
          left: "40%",
          background: `radial-gradient(circle, rgba(167,139,250,1) 0%, transparent 70%)`,
          opacity: opacity * 0.9,
        }}
      />
      {/* Blob 4 — rose accent bottom-right */}
      <div
        className="aurora-1 absolute rounded-full"
        style={{
          width: "380px",
          height: "380px",
          bottom: "10%",
          right: "5%",
          background: `radial-gradient(circle, rgba(244,114,182,1) 0%, transparent 70%)`,
          opacity: opacity * 0.5,
          animationDelay: "4s",
        }}
      />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid" style={{ opacity: dotOpacity }} />
    </div>
  );
}
