import React from "react";
import TextAreaInput from "./TextAreaInput";
import SectionCard from "../Main/SectionCard";

const EncryptView = (): JSX.Element => (
	<SectionCard>
		<TextAreaInput encryptMode={true} />
	</SectionCard>
);

export default EncryptView;