import React from "react";
import styled from "styled-components";
import CopyBtn from "./CopyBtn";

type KeyPropertyValueProps = {
  color: string;
  text: string;
};

const Value = styled.h6`
  font-family: "Lora", serif;
  font-size: 1.5rem;
  line-break: anywhere;
  margin: 0.25rem 0 1.5rem;
`;

const KeyPropertyValue = ({
  color,
  text
}: KeyPropertyValueProps): JSX.Element => (
  <Value>
    {text}
    <CopyBtn color={color} value={text} />
  </Value>
);

export default KeyPropertyValue;