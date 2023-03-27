import React from "react";
import Modal from "react-modal";
import { withTheme } from "styled-components";

import { CloseButton, modalStyles } from "./styled";

const ModalWindow = ({ isOpen = true, setIsOpen = () => {}, children }) => {
  return (
    <Modal
      style={{
        content: { ...modalStyles.content },
        overlay: { ...modalStyles.overlay },
      }}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsOpen(false)}
    >
      <CloseButton onClick={() => setIsOpen(false)} />
      {children}
    </Modal>
  );
};

Modal.setAppElement("body");

export default withTheme(ModalWindow);
