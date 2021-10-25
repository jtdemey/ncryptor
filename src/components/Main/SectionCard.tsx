import React from "react";
import styled from "styled-components";

type SectionCardProps = {
  children: React.ReactNode;
};

const Container = styled.div`
	margin: 1rem;
  padding: 1rem;
`;
//background: linear-gradient(45deg, hsla(195, 20%, 8%, 0.9), hsla(196, 19%, 15%, 0.75));

const SectionCard = ({ children }: SectionCardProps): JSX.Element => (
  <Container>{children}</Container>
);

export default SectionCard;