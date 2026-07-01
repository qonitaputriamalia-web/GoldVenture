import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero_section";
import WhyUs from "./components/why_us";
import PaketPendakian from "./components/PaketPendakian";
import PaketDetail from "./components/PaketDetail";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/paket"
        element={
          <>
            <Header />
            <PaketPendakian />
          </>
        }
      />

      <Route
        path="/paket/:id"
        element={
          <>
            <Header />
            <PaketDetail />
          </>
        }
      />
    </Routes>
  );
}