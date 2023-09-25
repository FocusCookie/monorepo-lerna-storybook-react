---
to: "<%= package === 'ui' ? `packages/${package}/src/${component}/${component}.stories.tsx` : `packages/${package}/app/components/${component}/${component}.stories.tsx` %>"
---
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import <%= component %> from "./index";

export default {
  title: "Components/<%= component %>",
  component: <%= component %>,
  args: {
    // global args for all stories
  },
  parameters: { <%- !!figma ? `
  decorators: [],
    design: {
      type: "figma",
      url: "${figma}",
    },` : "" %>
  },
} as ComponentMeta<typeof <%= component %>>;

const Template: ComponentStory<typeof <%= component %>> = (args) => (
  <<%= component %> {...args} />
);

export const Default = Template.bind({});
Default.args = {};
