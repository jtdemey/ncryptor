import React from "react";
import SectionCard from "../Main/SectionCard";
import GenerateKeyForm from "./GenerateKeyForm";

type GenerateKeyViewProps = {
  refreshKeys: Function;
	setView: Function;
};

const GenerateKeyView = ({ refreshKeys, setView }: GenerateKeyViewProps): JSX.Element => (
	<SectionCard>
		<GenerateKeyForm refreshKeys={refreshKeys} setView={setView} />
	</SectionCard>
);

export default GenerateKeyView;
