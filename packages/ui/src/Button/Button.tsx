import React, { ButtonHTMLAttributes } from "react";

interface OwnProps {
  variant: "primary" | "secondary";
  size: "base" | "large";
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & OwnProps;

const Button = ({ variant = "primary", size = "base", ...props }: Props) => (
  <button
    type="button"
    data-testid="button"
    style={{
      backgroundColor: variant === "primary" ? "hotpink" : "skyblue",
      padding: size === "base" ? "0.5rem 0.25rem" : "1rem 0.5rem",
      fontSize: size === "base" ? "1rem" : "1.5rem",
    }}
    {...props}
  />
);

export default Button;
