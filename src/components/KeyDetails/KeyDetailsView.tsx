import React from "react";
import styled from "styled-components";
import { PrivateKey } from "../Main/NcryptorApp";
import SectionCard from "../Main/SectionCard";
import KeyDetailsGroup from "./KeyDetailsGroup";
import KeyHeader from "./KeyHeader";

type KeyDetailsViewProps = {
  privateKey: PrivateKey;
};

const Container = styled.section`
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  overflow-y: scroll;
`;

const DetailsContainer = styled.section`
  transform: translateY(-1.5rem);
`;

const KeyDetailsView = ({ privateKey }: KeyDetailsViewProps): JSX.Element => (
  <Container>
    <SectionCard backgroundColor={privateKey.color}>
      <KeyHeader
        color={privateKey.color}
        fingerprint={privateKey.fingerprint}
      />
      <DetailsContainer>
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="User ID"
          valueText={privateKey.userId}
        />
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="Fingerprint"
          valueText={privateKey.fingerprint}
        />
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="Created Date"
          valueText={privateKey.createdDate}
        />
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="Key Type"
          valueText={privateKey.keyType}
        />
      </DetailsContainer>
    </SectionCard>
  </Container>
);

export default KeyDetailsView;