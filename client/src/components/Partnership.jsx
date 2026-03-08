import A from "../../public/Partnership/A.jpg";
import acts from "../../public/Partnership/acts.png";
import Bahumukhi from "../../public/Partnership/Bahumukhi.jpg";
import GraceTech from "../../public/Partnership/Grace Tech.jpg";
import Koncept from "../../public/Partnership/Koncept.png";
import Kgen from "../../public/Partnership/Kgen.png";
import Naaraa from "../../public/Partnership/Naaraa.jpg";
import Noizz from "../../public/Partnership/Noizz.jpg";
import Panda from "../../public/Partnership/Panda.jpg";
import rar from "../../public/Partnership/rar.png";
import raze from "../../public/Partnership/raze.jpg";
import Trt from "../../public/Partnership/Trt.png";

const logos = [
  A,
  acts,
  Bahumukhi,
  GraceTech,
  Koncept,
  Kgen,
  Naaraa,
  Noizz,
  Panda,
  rar,
  raze,
  Trt,
];

const Partnership = () => {
  return (
    <section className="relative py-10 bg-gradient-to-br from-[#fff7ed] via-white to-[#ffedd5] overflow-hidden">

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-24">
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-orange-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute top-40 right-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-[140px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">

        <h2 className="text-4xl md:text-6xl font-black text-gray-900">
          Our <span className="text-orange-500">Partnerships</span>
        </h2>

        <p className="text-gray-600 mt-4">
          Brands and communities that trust ROAR ENT
        </p>

      </div>

      {/* Scroll Container */}
      <div className="logo-container relative z-10">

        {/* Edge Fade */}
        <div className="fade-left"></div>
        <div className="fade-right"></div>

        <div className="logo-track">

          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="logo-card">
              <img src={logo} alt="partner" className="logo" />
            </div>
          ))}

        </div>

      </div>

      <style jsx>{`

        .logo-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .logo-track {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: scroll 25s linear infinite;
          align-items: center;
        }

        .logo-card {
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .logo-card:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 20px 40px rgba(249,115,22,0.25);
        }

        .logo {
          height: 45px;
          width: auto;
          object-fit: contain;
        }

        /* Smooth edge fade */

        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #fff7ed, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #fff7ed, transparent);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

      `}</style>

    </section>
  );
};

export default Partnership;