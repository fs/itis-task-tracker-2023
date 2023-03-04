import styled from "styled-components";
import logoIcon from "../../icons/stackers.svg";

const HEADER_TEXT = "Task tracker";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: #3a74f7;
  color: white;
  font-size: 20px;

  position: sticky;
  height: 62px;
  top: 0;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  background-color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      {HEADER_TEXT}
      <Logo src={logoIcon} alt="logo" />
    </Wrapper>
  );
};

export default Header;
