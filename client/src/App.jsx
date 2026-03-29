import { createContext, useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home     from "./pages/Home.jsx";
import About    from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Team     from "./pages/Team.jsx";
import Contact  from "./pages/Contact.jsx";
import Events   from "./pages/Events.jsx";

/* ─── Theme Context ──────────────────────── */
export const ThemeContext = createContext({ theme: "dark", toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("roar-theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme"); // :root is light theme by default
    }
    localStorage.setItem("roar-theme", theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ─── App ───────────────────────────────── */
const App = () => {
  const location = useLocation();
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/services"element={<Services />} />
          <Route path="/events"  element={<Events />} />
          <Route path="/team"    element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"        element={<Home />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
