import Wrapper from "../../shared/Wrapper";
import Bio from "./bio/Bio";
import Greeting from "./greeting/Greeting";

const Introduction = (): React.JSX.Element => {
  return (
    <Wrapper as={"header"}>
      <Greeting />
      <Bio />
    </Wrapper>
  );
};

export default Introduction;
