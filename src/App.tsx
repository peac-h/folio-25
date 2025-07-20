import styled from "styled-components";

import Introduction from "./components/introduction/Introduction";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";

import GlobalStyles from "./shared/GlobalStyles";

const StyledApp = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

const App = (): React.JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Introduction />
        <Profile />
        <Contact />
      </StyledApp>
    </>
  );
};

export default App;
