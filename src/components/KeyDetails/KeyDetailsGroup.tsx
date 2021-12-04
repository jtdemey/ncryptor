import React from "react";
import KeyPropertyLabel from "./KeyPropertyLabel";
import KeyPropertyValue from "./KeyPropertyValue";

type KeyDetailsGroupProps = {
  color: string;
  labelText: string;
  showCopyBtn?: boolean;
  valueText: string;
};

const KeyDetailsGroup = ({
  color,
  labelText,
  showCopyBtn,
  valueText
}: KeyDetailsGroupProps): JSX.Element => (
  <article>
    <KeyPropertyLabel text={labelText} />
    <KeyPropertyValue color={color} showCopyBtn={showCopyBtn} text={valueText} />
  </article>
);

export default KeyDetailsGroup;
