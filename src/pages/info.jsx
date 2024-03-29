import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";

const StyledList = styled.ul`
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-items: center;
  flex: inherit;
  gap: 1rem;
  list-style: square;
`;

const InfoPage = () => {
  return (
    <DefaultTemplate>
      <StyledList type="A">
        <li>Developing applications</li>
        <li>Leading courses in ITIS</li>
        <li>We have many satisfied customers</li>
      </StyledList>
      <Button label="Follow us" />
    </DefaultTemplate>
  );
};

export default InfoPage;
