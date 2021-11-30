import React from "react";
import styled from "styled-components";

type NoKeysHeaderProps = {
  text?: string;
};

const Header = styled.h2`
  margin: auto;
  color: #84a98c;
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
  text-align: center;
`;

const NoKeysHeader = ({ text }: NoKeysHeaderProps): JSX.Element => (
  <Header>{text || "No private keys found"}</Header>
);

export default NoKeysHeader;
