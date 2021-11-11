import React from "react";
import SectionCard from "../Main/SectionCard";
import GenerateKeyForm from "./GenerateKeyForm";

type GenerateKeyViewProps = {
	setView: Function;
};

const GenerateKeyView = ({ setView }: GenerateKeyViewProps): JSX.Element => (
	<SectionCard>
		<GenerateKeyForm setView={setView} />
	</SectionCard>
);

export default GenerateKeyView;