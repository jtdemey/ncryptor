import React from "react";
import styled from "styled-components";
import BackBtn from "../Main/BackBtn";
import SectionCard from "../Main/SectionCard";
import KeyDetailsGroup from "./KeyDetailsGroup";
import KeyHeader from "./KeyHeader";
import { AppViews } from "../../data/AppViews";
import { PrivateKey } from "../Main/NcryptorApp";

type KeyDetailsViewProps = {
  privateKey: PrivateKey;
  setView: Function;
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

const KeyDetailsView = ({
  privateKey,
  setView
}: KeyDetailsViewProps): JSX.Element => (
  <Container>
    <SectionCard>
      <BackBtn clickFunc={() => setView(AppViews.Keyring)} />
      <KeyHeader
        color={privateKey.color}
        fingerprint={privateKey.fingerprint}
      />
      <DetailsContainer>
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="User ID"
          showCopyBtn={true}
          valueText={privateKey.userId}
        />
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="Fingerprint"
          showCopyBtn={true}
          valueText={privateKey.fingerprint}
        />
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="Created Date"
          valueText={privateKey.createdDate}
        />
        <KeyDetailsGroup
          color={privateKey.color}
          labelText="Expiration Date"
          valueText={privateKey.expirationDate ?? "Never"}
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
