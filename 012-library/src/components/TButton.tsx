import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<any> {
  children: React.ReactNode;
}

const TButton = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default TButton;

const StyledButton = styled.button`
  width: 200px;
  font-weight: bold;
  background-color: #8a2b06;
`;
