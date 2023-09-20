---
to: "<%= package === 'ui' ? `packages/${package}/src/${h.inflection.camelize(component)}/index.tsx` : `packages/${package}/app/components/${h.inflection.camelize(component)}/index.tsx` %>"
---
import React from "react";
import { Wrapper } from "./styled"

export interface Props {

}

const <%= component %> = ({
  ...props
}: Props) => {
  
  return (
    <Wrapper {...props}>
        <%= component %>
    </Wrapper>
  );
};

export default <%= component %>;


