import Wrapper from "../../shared/Wrapper";
import Bio from "./Bio";
import Greeting from "./Greeting";
import TechStack from "./TechStack";

function Introduction() {
  return (
    <Wrapper as={"header"}>
      <Greeting />
      <Bio />
      <TechStack />
    </Wrapper>
  );
}

export default Introduction;
