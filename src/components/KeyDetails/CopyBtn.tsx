import React from "react";
import styled from "styled-components";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shiftLightness } from "../../utils/ColorUtils";

type CopyBtnProps = {
  color?: string;
  value: string;
};

const Container = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0 0.25rem 0;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.45);
`;

let copiedInterval: any = undefined;

const CopyBtn = ({ color, value }: CopyBtnProps): JSX.Element => {
  const [copied, setCopied] = React.useState(false);
  const btnColor = color ?? "hsl(0, 0%, 5%)"
  React.useEffect(() => {
		if(copied) {
			copiedInterval = setTimeout(() => {
				setCopied(false);
				clearInterval(copiedInterval);
			}, 2000);
		}
	});
  return (
    <Container
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
      }}
      style={{ background: shiftLightness(btnColor, -10) }}
    >
      <FontAwesomeIcon
        color={shiftLightness(btnColor, 30)}
        icon={copied ? faCheck : faCopy}
        style={{ transform: "translateY(2px)" }}
        width="18px"
      />
    </Container>
  );
};

export default CopyBtn;
