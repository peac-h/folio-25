import Wrapper from "../../../shared/Wrapper";
import Hobbies from "./hobbies/Hobbies";
import Track from "./track/Track";

const Interests = (): React.JSX.Element => {
  return (
    <Wrapper as={"section"}>
      <Track />
      <Hobbies />
    </Wrapper>
  );
};

export default Interests;
