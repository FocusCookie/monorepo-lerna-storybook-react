---
to: "<%= package === 'ui' ? `packages/${package}/src/${component}/styled.tsx` : `packages/${package}/app/components/${component}/styled.tsx` %>"
---
import styled from "styled-components";

interface Props {
  
}

export const Wrapper = styled.div<Props>`
    border: 2px red solid
`;
