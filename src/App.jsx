import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <H1>The wild oasis</H1>
    </Fragment>
  );
}

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export default App;
