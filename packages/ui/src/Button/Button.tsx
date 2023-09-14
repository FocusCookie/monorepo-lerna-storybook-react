import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size: "base" | "large";
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  size = "base",
  children,
  onClick,
  ...props
}: Props) => {
  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      data-testid="button"
      style={{
        backgroundColor: variant === "primary" ? "hotpink" : "skyblue",
        padding: size === "base" ? "0.5rem 0.25rem" : "1rem 0.5rem",
        fontSize: size === "base" ? "1rem" : "1.5rem",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
