import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero_section";
import WhyUs from "./components/why_us";
import TripPlanner from "./components/tripplanner";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <TripPlanner />
    </>
  );
}

export default App;