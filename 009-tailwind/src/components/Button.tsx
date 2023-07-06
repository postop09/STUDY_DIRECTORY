import React from "react";
import tw from "tailwind-styled-components";

interface Props {
  children: React.ReactNode;
  color?: "t-dark" | "t-red" | "t-blue";
  onClick?: () => void;
}

const Button = ({ children, color = "t-blue", onClick }: Props) => {
  return (
    <ButtonForm type="button" color={color} onClick={onClick}>
      {children}
    </ButtonForm>
  );
};

export default Button;

const ButtonForm = tw.button`
  ${(props) => props.color}
  rounded
  min-w-200
  h-10
  px-2
  py-1
  text-xs
  font-semibold
  text-white
  shadow-sm
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-indigo-600
`;
