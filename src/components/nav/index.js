import { useState, useRef, useEffect } from "react";
import { getPlanetNames, getPlanetDataByName } from "utils";
import { Container, HiddenMenu } from "./lib";
import { useTransition } from "react-spring";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Nav = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // refers to mobile menu

  const menuTransition = useTransition(isMenuVisible, {
    from: {
      right: "-100px",
      width: "0px"
    },
    enter: { right: "0px", width: "200px" },
    leave: { right: "-100px", width: "0px" }
  });

  const planetNames = getPlanetNames();

  function handleItemClick(name) {
    const planetData = getPlanetDataByName(name);
    props.setPlanet(planetData);
    setIsMenuVisible(false);
  }

  function getMenuItems() {
    return planetNames.map((name) => (
      <li key={name} onClick={() => handleItemClick(name)}>
        {name}
      </li>
    ));
  }

  return (
    <Container>
      <nav>
        <ul>
          <li>The Planets</li>
          <span>
            {getMenuItems()}
            <span>
              <GiHamburgerMenu
                size="22"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuVisible(true);
                }}
              />
              {menuTransition((style, item) => {
                return item ? (
                  <HiddenMenu tabIndex="0" style={style}>
                    {getMenuItems()}
                  </HiddenMenu>
                ) : null;
              })}
            </span>
          </span>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
