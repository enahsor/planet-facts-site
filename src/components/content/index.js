import { Container } from "./lib";
import { details } from "config/index";
import { useRef, useEffect, useState } from "react";
import { animated, config, useSpring, useTransition } from "react-spring";

const Content = ({ activePlanet, activeSection }) => {
  const previousPlanetRef = useRef(activePlanet.name);
  const [imgSrc, setImgSrc] = useState("");

  import(activePlanet.images[activeSection.name]).then((src) => {
    setImgSrc(src.default);
  });

  useEffect(() => {
    previousPlanetRef.current = activePlanet.name;
  }, [activePlanet.name]);

  const isPlanetDifferent = previousPlanetRef.current !== activePlanet.name;

  const transition = useTransition(isPlanetDifferent, {
    from: {
      transform: "translateX(200px)"
    },
    enter: {
      transform: "translateX(0px)"
    },
    leave: {
      transform: "translateX(200px)"
    }
  });

  function getContent() {
    return activePlanet[activeSection.name].content;
  }

  return (
    <Container>
      <div>
        {transition((styles, item) => {
          return (
            !item && (
              <animated.div style={styles} key={activePlanet.name}>
                <img alt={activePlanet.name} src={imgSrc} />
              </animated.div>
            )
          );
        })}
      </div>
      <section>
        <h1>{activePlanet.name}</h1>
        <p>{getContent()}</p>
      </section>
      <aside>
        <ul>
          {details.map((detail) => {
            return (
              <li key={detail.name}>
                <h2>{detail.displayName}</h2>
                <span>{activePlanet[detail.name]}</span>
              </li>
            );
          })}
        </ul>
      </aside>
    </Container>
  );
};

export default Content;
