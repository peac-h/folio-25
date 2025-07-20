import Collaboration from "./collaboration/Collaboration";
import Interests from "./interests/Interests";
import Projects from "./projects/Projects";

const Profile = (): React.JSX.Element => {
  return (
    <main>
      <Projects />
      <Interests />
      <Collaboration />
    </main>
  );
};

export default Profile;
