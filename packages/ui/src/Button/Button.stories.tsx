import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "click me",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Variants: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "fit-content",
    }}
  >
    <Button {...args} variant="primary" />
    <Button {...args} variant="secondary" />
  </div>
);

export const Sizes: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "fit-content",
    }}
  >
    <Button {...args} size="base" />
    <Button {...args} size="large" />
  </div>
);
