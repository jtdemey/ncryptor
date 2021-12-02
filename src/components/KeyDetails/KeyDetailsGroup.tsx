import React from "react";
import KeyPropertyLabel from "./KeyPropertyLabel";
import KeyPropertyValue from "./KeyPropertyValue";

type KeyDetailsGroupProps = {
	color: string;
  labelText: string;
	valueText: string;
};

const KeyDetailsGroup = ({ color, labelText, valueText }: KeyDetailsGroupProps): JSX.Element => (
  <article>
		<KeyPropertyLabel text={labelText} />
		<KeyPropertyValue color={color} text={valueText} />
	</article>
);

export default KeyDetailsGroup;
