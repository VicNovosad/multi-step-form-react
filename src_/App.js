import "./styles.css";

import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
}
