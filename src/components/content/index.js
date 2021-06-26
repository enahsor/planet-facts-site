import { Container, Section } from "./lib";
import {FaExternalLinkSquareAlt} from "react-icons/fa"
import { details, sections} from "config/index";
import { useRef, useEffect} from "react";
import { animated, useTransition } from "react-spring";
import ColorGetter from "fast-average-color"

const Content = ({ activePlanet, activeSection, accent, setAccentColor, setActiveSection }) => {
  const previousPlanetRef = useRef(activePlanet.name);
  const planetImgRef = useRef()
  
  const imgSrc = require("../../"+activePlanet.images[activeSection.name])
  
  useEffect(() => {
    previousPlanetRef.current = activePlanet.name;
  }, [activePlanet.name]);

  useEffect(() => {
    const img = planetImgRef.current

    const colorGetter = new ColorGetter()

    colorGetter.getColorAsync(img).then(color => {
      setAccentColor(color.hex)
    })

    return () => colorGetter.destroy()
    
  }, [activePlanet.name])

  const isPlanetDifferent = previousPlanetRef.current !== activePlanet.name;

  const transition = useTransition(isPlanetDifferent, {
    from: {
      opacity: 0,
    
    },
    enter: {
      opacity: 1,
      
    },
    leave: {
      opacity: 0
    }
  });

  function getContent() {
    return activePlanet[activeSection.name].content;
  }

  function getSource(){
    return activePlanet[activeSection.name].source
  }

  return (
    <Container>
      <div>
        {transition((styles, item) => {
          return (
            !item && (
              <animated.div style={styles} key={activePlanet.name}>
                <img alt={activePlanet.name} src={imgSrc.default} ref={planetImgRef}/>
              </animated.div>
            )
          );
        })}
      </div>
      <section>
        <figure>
          <h1>{activePlanet.name}</h1>
          <p>{getContent()}</p>
          <figcaption>
            <span>
              Source&emsp;:&emsp;
            </span> 
            <cite>
              <a href={getSource()} target="_blank">Wikipedia</a>
              <FaExternalLinkSquareAlt/>
            </cite>
          </figcaption>
        </figure>
      </section>
      <ul>{
        sections.map(section => {
          return <Section $isActive={activeSection.id === section.id} $accent={accent} key={section.id} onClick={() => setActiveSection(section)}>{section.alias}</Section>
        })
      }</ul>
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
