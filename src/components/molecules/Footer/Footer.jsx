import styled from "styled-components";
import { Link } from "react-router-dom";

const COPYRIGHT_TEXT = "© 2023 Stackers team";

const Wrapper = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 52px;

  padding: 1rem;
  background-color: #3a74f7;
  color: white;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledLink to="/info">{COPYRIGHT_TEXT}</StyledLink>
    </Wrapper>
  );
};

export default Footer;
