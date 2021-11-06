import React from "react";
import styled from "styled-components";

const Container = styled.article`
	display: flex;
	width: 100%;
	justify-content: center;
	padding: 0.25rem;
`;

const Ring = styled.div`
	min-width: 6rem;
	min-height: 3rem;
	border: 0.5rem solid #222;
	border-radius: 0 0 6rem 6rem;
	transform: translateY(-1rem);
	z-index: -1;
`;

const Keyring = (): JSX.Element => {
  return (
    <Container>
			<Ring />
		</Container>
  );
};

export default Keyring;