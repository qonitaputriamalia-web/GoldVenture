import { useState } from 'react'
import Header from "./components/header";
import Hero from "./components/hero_section";
import WhyUs from "./components/why_us";
import Register from "./components/Register";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <div>
      <Header
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
      <Hero />
      <WhyUs />
    </div>
  );
}

export default App;
