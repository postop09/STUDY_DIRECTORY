import React, { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<any> {
    children: React.ReactNode;
}
declare const TButton: ({ children, ...props }: Props) => React.JSX.Element;
export default TButton;
