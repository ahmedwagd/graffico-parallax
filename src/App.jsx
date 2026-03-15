import Lenis from "lenis";
import { useEffect, useState } from "react";

import Contact from "./components/Contact";
import DigitalSolutions from "./components/DigitalSolutions";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import MoreSpecific from "./components/MoreSpecific";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScaleSection from "./components/ScaleSection";
import Team from "./components/Team";
import VerticalProgressBar from "./components/VerticalProgressBar";
import { connectLenis } from "./lib/gsap";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    window.lenis = lenis;
    loadingComplete ? lenis.start() : lenis.stop();

    connectLenis(lenis);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, [loadingComplete]);

  return (
    <main className="relative bg-(--color-brand-bg) min-h-screen text-white">
      {!loadingComplete && (
        <LoadingScreen onLoaded={() => setLoadingComplete(true)} />
      )}
      <Navbar />
      <Hero />
      <VerticalProgressBar />
      <ScaleSection />
      <DigitalSolutions />
      <MoreSpecific />
      <Projects />
      <Team />
      <Contact />
    </main>
  );
}

export default App;
