import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@lueddy/ui";

import ButtonList from "./index";

export default {
  title: "Components/ButtonList",
  component: ButtonList,
  args: {
    children: (
      <>
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
      </>
    ),
  },
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
