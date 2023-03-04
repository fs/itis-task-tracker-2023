import styled from "styled-components";

const COPYRIGHT_TEXT = "© 2023 Stackers team";

const Wrapper = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 52px;

  padding: 1rem;
  background-color: #3a74f7;
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return <Wrapper>{COPYRIGHT_TEXT}</Wrapper>;
};

export default Footer;
