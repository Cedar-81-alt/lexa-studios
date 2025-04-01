import "./styles/index.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ContactPage from "./contactPage-emmeax/ContactPage";
import AboutUs from "./aboutPage-emmeax/AboutUs";
import Footer from "./Footer";
import Home from "./homePage/home";
import Services from "./servicesPage/service";
import Works from "./worksPage/works";
import Gallery from "./galleryPage/gallery";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="dark:bg-dark-violet m-0 min-h-screen border border-transparent">
      <div className="flex flex-col border-x border-t px-10 rounded-b-none border-neon-pink mx-5 rounded-md overflow-clip mt-5">
        {/* Pass darkMode state to Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Entire Page follows Dark Mode */}
        <main className="flex-1 bg-white leading-snug dark:bg-dark-violet text-black dark:text-white">
          <Routes>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/works" element={<Works />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
