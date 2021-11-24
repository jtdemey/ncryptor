import React from "react";
import styled from "styled-components";
import SectionCard from "../Main/SectionCard";

const Container = styled.section`
  overflow-y: scroll;
	scrollbar-color: #777 #444;
	scrollbar-width: thin;
`;

const ContactsView = (): JSX.Element => (
  <Container>
    <SectionCard>

		</SectionCard>
  </Container>
);

export default ContactsView;