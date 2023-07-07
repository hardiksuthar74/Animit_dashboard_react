import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Fragment } from "react";
import Heading from "./ui/Heading";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">The wild Oasis</Heading>
        <Heading type="h2">The wild Oasis</Heading>
        <Heading type="h3">The wild Oasis</Heading>
      </StyledApp>
    </Fragment>
  );
}

const StyledApp = styled.main`
  background-color: grey;
`;

export default App;
