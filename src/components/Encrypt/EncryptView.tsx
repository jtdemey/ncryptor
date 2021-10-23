import React from "react";
import TextInput from "./TextInput";
import SectionCard from "../Main/SectionCard";

const EncryptView = (): JSX.Element => (
	<SectionCard>
		<TextInput encryptMode={true} />
	</SectionCard>
);

export default EncryptView;