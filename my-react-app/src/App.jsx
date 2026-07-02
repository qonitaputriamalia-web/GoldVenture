import Header from "./components/header";
import Hero from "./components/hero_section";
import WhyUs from "./components/why_us";
import HowToRental from "./components/howToRental";
import FooterSection from "./components/footer";
import LoginModal from "./components/login";


function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  // const [registerOpen, setRegisterOpen] = useState(false);
  return (
    <section>
      <Header
        onLoginOpen={() => setLoginOpen(true)}
        // onRegisterOpen={() => setRegisterOpen(true)}
      />
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
      <Hero />
      <WhyUs />
      <HowToRental />
      <FooterSection />
    </section>
  );
}

export default App;