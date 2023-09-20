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

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  variant: "primary",
};

export const VariantSecondary = Template.bind({});
VariantSecondary.args = {
  variant: "secondary",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  size: "large",
};

export const SizeBase = Template.bind({});
SizeBase.args = {
  size: "base",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: "primary",
  size: "large",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: "primary",
  size: "base",
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  variant: "secondary",
  size: "large",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  variant: "secondary",
  size: "base",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: "primary",
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: "secondary",
  disabled: true,
};

export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  variant: "primary",
  size: "large",
  disabled: true,
};

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  variant: "secondary",
  size: "large",
  disabled: true,
};

export const PrimaryDisabledLoading = Template.bind({});
PrimaryDisabledLoading.args = {
  variant: "primary",
  disabled: true,
  loading: true,
};

export const SecondaryDisabledLoading = Template.bind({});
SecondaryDisabledLoading.args = {
  variant: "secondary",
  disabled: true,
  loading: true,
};

export const PrimaryDisabledLoadingLarge = Template.bind({});
PrimaryDisabledLoadingLarge.args = {
  variant: "primary",
  size: "large",
  disabled: true,
  loading: true,
};

export const SecondaryDisabledLoadingLarge = Template.bind({});
SecondaryDisabledLoadingLarge.args = {
  variant: "secondary",
  size: "large",
  disabled: true,
  loading: true,
};
