import styled from "styled-components";

import Introduction from "./components/introduction/Introduction";
import Projects from "./components/projects/Projects";
import Profile from "./components/profile/Profile";
import Vision from "./components/vision/Vision";
import Contact from "./components/contact/Contact";

import GlobalStyles from "./shared/GlobalStyles";

const StyledApp = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Introduction />
        <Projects />
        <Profile />
        <Vision />
        <Contact />
      </StyledApp>
    </>
  );
}

export default App;
