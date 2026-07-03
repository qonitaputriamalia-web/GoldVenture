import { useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero_section";
import WhyUs from "../components/why_us";
import HowToRental from "../components/howToRental";
import FooterSection from "../components/footer";

import AuthModal from "../components/AuthModal"; 

const LandingPage = ({ setUser }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleAuthSuccess = (userData) => {
    setUser(userData); 
  };

  const openLogin = () => {
    setAuthMode("login");
    setAuthOpen(true);
  };

  const openRegister = () => {
    setAuthMode("register");
    setAuthOpen(true);
  };

  return (
    <section className="overflow-hidden">
      <Header onLoginOpen={openLogin} onRegisterOpen={openRegister} isLoggedIn={false} />
      
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        initialMode={authMode}
        onSuccess={handleAuthSuccess} 
      />
      
      <Hero />
      <WhyUs />
      
      <HowToRental onOpenLogin={openLogin} />
      
      <FooterSection />
    </section>
  );
};

export default LandingPage;