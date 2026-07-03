import { useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero_section";
import WhyUs from "../components/why_us";
import HowToRental from "../components/howToRental";
import FooterSection from "../components/footer";
import LoginModal from "../components/login";

const LandingPage = ({ setUser }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginSuccess = (userData) => {
    localStorage.setItem("goldventure_user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <section className="overflow-hidden">
      <Header onLoginOpen={() => setLoginOpen(true)} isLoggedIn={false} />
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />
      <Hero />
      <WhyUs />
      <HowToRental onOpenLogin={() => setLoginOpen(true)} />
      <FooterSection />
    </section>
  );
};

export default LandingPage;