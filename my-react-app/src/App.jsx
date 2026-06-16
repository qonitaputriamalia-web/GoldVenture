import { useState } from "react";

import Header from "./components/header";
import Hero from "./components/hero_section";
import WhyUs from "./components/why_us";
import LoginModal from "./components/login";
// import RegisterModal from "./components/RegisterModal";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <Header
        onLoginOpen={() => setLoginOpen(true)}
        onRegisterOpen={() => setRegisterOpen(true)}
      />

      <Hero />
      <WhyUs />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />

      {/* <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      /> */}
    </>
  );
}

export default App;