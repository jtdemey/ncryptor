import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { PrivateKey } from "./KeyringView";

type KeyringProps = {
  privateKeys: PrivateKey[];
};

const Container = styled.article`
  display: flex;
	position: relative;
  width: 100%;
  justify-content: center;
  padding: 0.25rem;
`;

const Ring = styled.div`
  min-width: 6rem;
  min-height: 3rem;
	margin-bottom: 2.5rem;
  border: 0.5rem solid #222;
  border-radius: 0 0 6rem 6rem;
  transform: translateY(-1rem);
  z-index: -1;
`;

const KeyContainer = styled.div`
  position: absolute;
`;

const KeyXPositions: number[] = [0, 2.25, 2.25];

const getXPosition = (index: number): number | string => {
	const xPos = KeyXPositions[index];
};

const Keyring = ({ privateKeys }: KeyringProps): JSX.Element => {
  return (
    <Container>
      <Ring />
			{privateKeys.map((privateKey: PrivateKey, i: number) => (
				<KeyContainer style={{ top: `2.5rem` }}>
					<FontAwesomeIcon
						icon={faKey}
						color={privateKey.color}
						style={{
							transform: `rotate(-45deg)`
						}}
						width="3.5rem"
					/>
				</KeyContainer>
			))}
    </Container>
  );
};

export default Keyring;