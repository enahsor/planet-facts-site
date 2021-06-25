import Nav from "components/nav";
import ExtraNav from "components/extra-nav";
import Content from "components/content";
import { data, particlesConfig, sections } from "config";
import Particles from "react-particles-js";
import { useState, useLayoutEffect } from "react";

export default function App() {
  const [planet, setPlanet] = useState(() => data[0]); // first planet is our initial state
  const [activeSection, setActiveSection] = useState(() => sections[0]);

  /*useLayoutEffect(() => {
    data.forEach((planet) => {
      Object.keys(planet.images).forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    });
  }, []);*/

  return (
    <div>
      <Particles
        params={particlesConfig}
        style={{ position: "absolute", zIndex: "-1", minHeight: "100%" }}
      />
      <Nav setPlanet={setPlanet} />
      <ExtraNav
        activeSection={activeSection.id}
        setActiveSection={setActiveSection}
      />
      <Content activePlanet={planet} activeSection={activeSection} />
    </div>
  );
}
