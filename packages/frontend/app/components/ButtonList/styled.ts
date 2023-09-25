import styled from "styled-components";

interface Props {
  isPrimary?: boolean;
  isDisabled?: boolean;
  noBackground?: boolean;
  useDynamicWidth?: boolean;
  isCentered?: boolean;
  isIcon?: boolean;
  isBig?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  box-shadow: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);

  &:focus {
    box-shadow: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
  }

  &:hover {
    box-shadow: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
  }
`;

export const Label = styled.label<Props>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: lightslategrey;
  font-weight: bold;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 0.75rem;
`;

export const Input = styled.input<Props>`
  border: 1px solid lightslategrey;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:focus {
    outline-color: hotpink;
  }

  &::placeholder {
    font-style: italic;
    opacity: 0.5;
  }
`;
