import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ color }) => css`
      background: ${color};
      width: 160px;
      text-align: center;
      cursor: pointer;
      color: white;
      border: none;
      height: 32px;
    }
  `,
);

const Button = ({ label, onClick = () => {}, disabled = false, color = "#3a74f7", type }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} color={color} type={type}>
      {label}
    </StyledButton>
  );
};

export default Button;
