import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Events from "./pages/Events.jsx";
import BackToTop from "./components/BackToTop.jsx";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <BackToTop />
    </>
  );
};

export default App;
