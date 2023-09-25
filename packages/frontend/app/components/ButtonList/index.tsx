import { Button } from "@lueddy/ui";
import React, { ButtonHTMLAttributes, useState } from "react";
import { Input, Label, Wrapper } from "./styled";

type ButtonType = {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
};

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttons: ButtonType[];
  onButtonClick: (label: ButtonType["label"]) => void;
}

const ButtonList = ({ buttons, onButtonClick, ...props }: Props) => {
  const [search, setSearch] = useState<string>("");

  function handleButtonClick(label: ButtonType["label"]) {
    if (onButtonClick) onButtonClick(label);
  }

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <Wrapper {...props}>
      <Label htmlFor="search">
        <span>search</span>
        <Input
          value={search}
          placeholder={"search for a button..."}
          type="text"
          name="search"
          id="search"
          onChange={handleSearch}
          data-testid="search"
        />
      </Label>

      {buttons
        .filter((btn) => btn.label.includes(search))
        .map((btn, key) => {
          return (
            <Button
              key={key}
              variant={btn.variant}
              size="large"
              onClick={() => handleButtonClick(btn.label)}
            >
              {btn.label}
            </Button>
          );
        })}
    </Wrapper>
  );
};

export default ButtonList;
