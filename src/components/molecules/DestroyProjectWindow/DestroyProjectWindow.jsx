import React, { useContext } from "react";
import styled from "styled-components";
import ModalWindow from "../../atoms/ModalWindow";
import Button from "../../atoms/Button";
import NotifierContext from "../../../context/NotifierContext";

const ButtonsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  column-gap: 8px;
`;

const DestroyProjectWindow = ({ isOpen, setIsOpen, projectName }) => {
  const { setMessage } = useContext(NotifierContext);

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>Вы уверены что хотите удалить проект {projectName}?</div>
      <ButtonsWrapper>
        <Button label="Да" onClick={() => setMessage("Проект удален")} />
        <Button label="Нет" color="#D16684" onClick={() => setIsOpen(false)} />
      </ButtonsWrapper>
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
