import React from "react";
import ButtonList from "./components/ButtonList/index";
import { Button } from "@lueddy/ui";

const App = () => {
  return (
    <ButtonList>
      <Button size="base" variant="primary">
        button
      </Button>
      <Button size="large" variant="primary">
        button
      </Button>
      <Button size="base" variant="secondary">
        button
      </Button>
      <Button size="large" variant="secondary">
        button
      </Button>
    </ButtonList>
  );
};

export default App;
