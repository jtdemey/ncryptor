import React from "react";
import styled from "styled-components";

type KeyPropertyLabelProps = {
  text: string;
};

const Label = styled.h6`
	margin: 0;
`;

const KeyPropertyLabel = ({ text }: KeyPropertyLabelProps): JSX.Element => (
  <Label>{text}</Label>
);

export default KeyPropertyLabel;
