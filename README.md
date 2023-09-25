# monorepo-lerna-storybook-react

A small POC to test how to use Storybook in a Lerna Monorepo Project

# Important

- node 14.17.0
- playwright needs to be installed: `npm init playwright@latest`
- each package has a uniqe storybook port which is configured in the package.json of the package

# Root storybook

To build a static root storybook page from where all storybooks of all packages are reachable, run it in the root
`npm run build-storybooks`

# Create new components

Use the in the root of the project `npm run create-component` and follow the steps.

# Link Figma Design in Story

Option one: Use the global story paramters like this:

```
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@lueddy/ui";

import Component from "./index";

export default {
  title: "Components/Component",
  component: Component,
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "LINK TO FIGMA DESIGN",
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {};

```

Option two: Define for each story the linked disign via the story.paramters

```
export const Default = Template.bind({});
Default.args = {};
Default.paramters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/VwIAD7kNluCAsDEnfI4DPA/HQ-Revenue---Design-System-Revamp?type=design&node-id=2412%3A76168&mode=design&t=BaIbrVL4SQDpeQL0-1",
    },
  }
```
