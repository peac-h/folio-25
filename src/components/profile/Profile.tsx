import Wrapper from "../../shared/Wrapper";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import Track from "./Track";

function Profile() {
  return (
    <Wrapper as={"section"}>
      <h3>My kind of things:</h3>
      <Track />
      <Hobbies />
      <Languages />
    </Wrapper>
  );
}

export default Profile;
