import Nav from "components/nav";
import ExtraNav from "components/extra-nav";
import Content from "components/content";
import { data, particlesConfig, sections } from "config";
import Particles from "react-particles-js";
import { useState } from "react";
import * as colors from "styles/colors"

export default function App() {
  const [planet, setPlanet] = useState(() => data[0]); // first planet is our initial state
  const [activeSection, setActiveSection] = useState(() => sections[0]);
  const [accentColor, setAccentColor] = useState(colors.primaryColor)

  return (
    <div>
      <Particles
        params={particlesConfig}
        style={{ position: "absolute", zIndex: "-1", height: "100%", width: "100%" }}
      />
      <Nav setPlanet={setPlanet} accent={accentColor} planetName={planet.name}/>
      <ExtraNav
        activeSection={activeSection.id}
        setActiveSection={setActiveSection}
        accent={accentColor}
      />
      <Content activePlanet={planet} activeSection={activeSection} setAccentColor={setAccentColor} setActiveSection={setActiveSection} accent={accentColor}/>
    </div>
  );
}
