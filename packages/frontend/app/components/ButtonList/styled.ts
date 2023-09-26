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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

  &:hover {
    outline-color: slategrey;
  }

  &:focus {
    outline-color: hotpink;
  }

  &::placeholder {
    font-style: italic;
    opacity: 0.5;
  }
`;
