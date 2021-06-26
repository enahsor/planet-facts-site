import { Container, Section } from "./lib";
import { sections } from "config/index";

const ExtraNav = (props) => {

  return (
    <Container>
      {sections.map((section) => {
        return (
          <Section
            $isActive={props.activeSection === section.id}
            $accent={props.accent}
            key={section.id}
            onClick={() => props.setActiveSection(section)}
            
          >
            {section.name}
          </Section>
        );
      })}
    </Container>
  );
};

export default ExtraNav;
