import React from "react";
import styled from "styled-components";

import Button from "src/components/atoms/Button";
import ModalWindow from "src/components/atoms/ModalWindow";

import { useDestroyProject } from "src/lib/hooks/actions/destroyProject";

const ButtonsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  column-gap: 8px;
`;

const DestroyProjectWindow = ({ isOpen, setIsOpen, projectName, id }) => {
  const [destroyProject] = useDestroyProject({ onSubmit: () => setIsOpen(!isOpen)});

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>Вы уверены что хотите удалить проект {projectName}?</div>
      <ButtonsWrapper>
        <Button label="Да" onClick={() => destroyProject({ id })} />
        <Button label="Нет" color="#D16684" onClick={() => setIsOpen(!isOpen)} />
      </ButtonsWrapper>
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
