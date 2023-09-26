import React from "react";
import ButtonList, { ButtonType } from "./components/ButtonList/index";

const buttons: ButtonType[] = [
  {
    label: "one",
    variant: "primary",
  },
  {
    label: "two",
    variant: "secondary",
  },
  {
    label: "three",
    variant: "primary",
  },
  {
    label: "🍍",
    variant: "secondary",
  },
];

const App = () => {
  return (
    <ButtonList
      buttons={buttons}
      onButtonClick={(label: string) => alert(label)}
    />
  );
};

export default App;
