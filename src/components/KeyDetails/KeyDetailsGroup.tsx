import React from "react";
import styled from "styled-components";
import CopyBtn from "./CopyBtn";
import KeyPropertyLabel from "./KeyPropertyLabel";
import KeyPropertyValue from "./KeyPropertyValue";

type KeyDetailsGroupProps = {
	color: string;
  labelText: string;
	valueText: string;
};

const Container = styled.article`

`;

const KeyDetailsGroup = ({ color, labelText, valueText }: KeyDetailsGroupProps): JSX.Element => (
  <Container>
		<KeyPropertyLabel text={labelText} />
		<KeyPropertyValue color={color} text={valueText} />
	</Container>
);

export default KeyDetailsGroup;