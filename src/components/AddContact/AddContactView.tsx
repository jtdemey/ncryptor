import React from "react";
import SectionCard from "../Main/SectionCard";
import AddContactForm from "./AddContactForm";

type AddContactViewProps = {
	setView: Function;
};

const AddContactView = ({ setView }: AddContactViewProps): JSX.Element => (
	<SectionCard>
		<AddContactForm setView={setView} />
	</SectionCard>
);

export default AddContactView;
