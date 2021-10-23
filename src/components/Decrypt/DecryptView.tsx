import React from "react";
import TextInput from "../Encrypt/TextInput";
import SectionCard from "../Main/SectionCard";

const DecryptView = (): JSX.Element => (
	<SectionCard>
		<TextInput encryptMode={false} />
	</SectionCard>
);

export default DecryptView;