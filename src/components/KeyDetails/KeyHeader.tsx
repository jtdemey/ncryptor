import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shiftLightness } from "../../utils/ColorUtils";

type KeyHeaderProps = {
  color: string;
  fingerprint: string;
};

const Container = styled.div`
  display: flex;
	position: relative;
`;

const Text = styled(motion.h1)`
  position: absolute;
  top: 38px;
  left: 30px;
  margin: 0.75rem;
  padding-left: 1.25rem;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
`;

const KeyHeader = ({ color, fingerprint }: KeyHeaderProps): JSX.Element => (
  <Container>
    <FontAwesomeIcon
      color={shiftLightness(color, 10)}
      icon={faKey}
      style={{
        transform: `rotate(-45deg) scale(-1, 1) translate(-20px, -5px)`
      }}
      width="160px"
    />
    <Text
      animate={{ opacity: [0, 1], y: [8, 0] }}
      transition={{ delay: 0.75, duration: 0.45, ease: "easeOut" }}
    >
      {fingerprint.substring(fingerprint.length - 8, fingerprint.length)}
    </Text>
  </Container>
);

export default KeyHeader;