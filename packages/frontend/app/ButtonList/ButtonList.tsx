import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Wrapper } from "./styled";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
