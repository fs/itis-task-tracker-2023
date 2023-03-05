import styled from "styled-components";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - 52px - 62px);
  flex-grow: 1;
  padding: 1rem;
`;

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
