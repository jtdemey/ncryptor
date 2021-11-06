import React from "react";
import TextAreaInput from "../Encrypt/TextAreaInput";
import SectionCard from "../Main/SectionCard";

const DecryptView = (): JSX.Element => (
	<SectionCard>
		<TextAreaInput encryptMode={false} />
	</SectionCard>
);

export default DecryptView;