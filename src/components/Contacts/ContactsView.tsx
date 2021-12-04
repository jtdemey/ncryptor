import React from "react";
import styled from "styled-components";
import { PublicKey } from "../Main/NcryptorApp";
import SectionCard from "../Main/SectionCard";
import NoKeysHeader from "../Keyring/NoKeysHeader";
import ContactsList from "./ContactsList";
import RefreshKeysBtn from "../Keyring/RefreshKeysBtn";
import AddContactBtn from "./AddContactBtn";

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

const ContactsView = ({
  publicKeys,
	refreshContacts,
  selectContact,
  setView
}: ContactsViewProps): JSX.Element => {
  return (
    <section>
      <SectionCard>
				<BtnBar>
					<AddContactBtn setView={setView} text="New" />
					<RefreshKeysBtn refreshKeys={refreshContacts} />
				</BtnBar>
        {publicKeys.length < 1 ? (
          <NoKeysHeader text="No public keys found" />
        ) : (
          <ContactsList
            contacts={publicKeys}
            selectContact={selectContact}
          />
        )}
      </SectionCard>
    </section>
  );
};

export default ContactsView;
