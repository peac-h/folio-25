import TextStyled from "../../../shared/TextStyled";
import Wrapper from "../../../shared/Wrapper";

const Projects = (): React.JSX.Element => {
  return (
    <Wrapper as={"section"}>
      <p>
        I build software the same way I live — precise, curious, a little
        obsessive, and always chasing the cleanest possible line.
      </p>
      <p>
        Most of what I work on lives behind closed doors (NDA life) — <br />{" "}
        <TextStyled $italic>device networks</TextStyled>, <br />{" "}
        <TextStyled $italic>digital displays</TextStyled>, <br />{" "}
        <TextStyled $italic>risk tools</TextStyled>, <br />{" "}
        <TextStyled $italic>compliance intelligence</TextStyled>, <br />{" "}
        <TextStyled $italic>survey analytics</TextStyled> <br /> — systems
        delivered through dashboards, managers, and settings panels, with
        AI-powered insights used by businesses every day.
      </p>
    </Wrapper>
  );
};

export default Projects;
