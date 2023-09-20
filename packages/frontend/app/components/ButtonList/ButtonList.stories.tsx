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
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/VwIAD7kNluCAsDEnfI4DPA/HQ-Revenue---Design-System-Revamp?type=design&node-id=2412%3A76168&mode=design&t=BaIbrVL4SQDpeQL0-1",
    },
  },
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
