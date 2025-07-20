import Wrapper from "../../../shared/Wrapper";
import Languages from "./languages/Languages";
import Vision from "./vision/Vision";

const Collaboration = (): React.JSX.Element => {
  return (
    <Wrapper as={"section"}>
      <Languages />
      <Vision />
    </Wrapper>
  );
};

export default Collaboration;
