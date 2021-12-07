import React from "react";
import styled from "styled-components";
import { PublicKey } from "../Main/NcryptorApp";
import SectionCard from "../Main/SectionCard";
import NoKeysHeader from "../Keyring/NoKeysHeader";
import ContactsList from "./ContactsList";
import RefreshKeysBtn from "../Keyring/RefreshKeysBtn";
import AddContactBtn from "./AddContactBtn";
import LoadingIndicator from "../Main/LoadingIndicator";

type ContactsViewProps = {
  publicKeys: PublicKey[];
  refreshContacts: Function;
  selectContact: Function;
  setView: Function;
};

const BtnBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const renderContent = (
  loading: boolean,
  publicKeys: PublicKey[],
  selectContact: Function
) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (publicKeys.length < 1) {
    return <NoKeysHeader />;
  }
  return <ContactsList contacts={publicKeys} selectContact={selectContact} />;
};

const ContactsView = ({
  publicKeys,
  refreshContacts,
  selectContact,
  setView
}: ContactsViewProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  const refreshHandler = () => {
    setLoading(true);
    refreshContacts(() => setLoading(false));
  };
  return (
    <section>
      <SectionCard>
        <BtnBar>
          <AddContactBtn setView={setView} text="New" />
          <RefreshKeysBtn refreshKeys={refreshHandler} />
        </BtnBar>
        {renderContent(loading, publicKeys, selectContact)}
      </SectionCard>
    </section>
  );
};

export default ContactsView;
