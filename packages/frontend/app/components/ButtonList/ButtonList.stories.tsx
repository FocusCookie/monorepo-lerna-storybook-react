import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import ButtonList from "./index";

export default {
  title: "Components/ButtonList",
  component: ButtonList,
  args: {
    buttons: [
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
    ],
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

export const Hovered = Template.bind({});
Hovered.args = {};
Hovered.parameters = { pseudo: { hover: true } };

export const FilteredForOne = Template.bind({});
FilteredForOne.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getAllByRole("button").length).toBe(4);

  await userEvent.type(canvas.getByTestId("search"), "o");

  await expect(canvas.getAllByRole("button").length).toBe(2);
  await expect(canvas.getAllByRole("button")[0].innerText).toBe("one");
  await expect(canvas.getAllByRole("button")[1].innerText).toBe("two");

  await userEvent.type(canvas.getByTestId("search"), "ne");

  await expect(canvas.getAllByRole("button").length).toBe(1);
  await expect(canvas.getByRole("button").innerText).toBe("one");
};
