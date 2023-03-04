import styled from "styled-components";

const COPYRIGHT_TEXT = "© 2023 Stackers team";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 52px;

  padding: 1rem;
  background-color: #3a74f7;
  color: white;
  font-size: 20px;
`;

const Footer = () => {
  return <Wrapper>{COPYRIGHT_TEXT}</Wrapper>;
};

export default Footer;
