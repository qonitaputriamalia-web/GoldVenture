import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/header";
import Hero from "./components/hero_section";
import WhyUs from "./components/why_us";
import HowToRental from "./components/howToRental";
import FooterSection from "./components/footer";
import LoginModal from "./components/login";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (800ms = transisi lembut/elegan)
      once: true,    // Animasi cuma jalan sekali pas di-scroll ke bawah (nggak ngulang-ngulang)
      easing: "ease-out-cubic", // Efek pergerakan yang mulus banget
      offset: 100,   // Jarak scroll sebelum animasi mulai
    });
  }, []);

  return (
    <section className="overflow-hidden">

      <Header onLoginOpen={() => setLoginOpen(true)} />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />

      {/* Komponen-komponen di bawah ini nanti tinggal lu kasih atribut data-aos */}
      <Hero />
      <WhyUs />
      <HowToRental />
      <FooterSection />
    </section>
  );
}

export default App;