import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Features from "./components/features/Features.jsx";
import Workflow from "./components/workflow/Workflow.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Cta from "./components/cta/Cta.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
