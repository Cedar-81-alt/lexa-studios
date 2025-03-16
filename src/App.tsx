import "./styles/index.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ContactPage from "./contactPage-emmeax/ContactPage";
import AboutUs from "./aboutPage-emmeax/AboutUs";
import Footer from "./Footer";

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
    <div className="min-h-screen flex flex-col">
      {/* Pass darkMode state to Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Entire Page follows Dark Mode */}
      <main className="flex-1 bg-white dark:bg-gray-900 text-black dark:text-white">
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
