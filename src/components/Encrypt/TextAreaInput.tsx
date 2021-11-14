import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import FileInput from "./FileInput";
import SubmitBtn from "./SubmitBtn";

type TextInputProps = {
  encryptMode: boolean;
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const LabelRow = styled.div`
  display: flex;
`;

const Label = styled.label`
  padding: 0 0.5rem 0 0;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

const TextArea = styled(motion.textarea)`
  width: calc(100% - 0.8rem - 1px);
  height: 48vh;
  margin: 1rem auto 0;
  padding: 0.4rem;
  background: #203031;
  border-top: 1px solid #84a98c;
  border-bottom: 1px solid #84a98c;
  border-right: none;
  border-left: none;
  box-shadow: -0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.45);
  color: #cad2c5;
  font-family: "Lora", serif;
  font-size: 1rem;

	&:focus {
		outline: none;
	}
`;

const TextAreaInput = ({ encryptMode }: TextInputProps): JSX.Element => {
  const [text, setText] = React.useState("");
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);
  const labelText = encryptMode
    ? "Compose a message or upload text file."
    : "Paste encrypted text or upload encrypted text file.";
  const btnText = encryptMode ? "Encrypt" : "Decrypt";
  return (
    <Container>
      <LabelRow>
        <Label>{labelText}</Label>
        <FileInput />
      </LabelRow>
      <TextArea
        animate={{ x: [-30, 0] }}
        onChange={(e) => handleTextChange(e)}
        transition={{ duration: 0.45, ease: "easeOut" }}
        value={text}
      />
      <SubmitBtn
        endpoint={encryptMode ? "encrypt" : "decrypt"}
        label={btnText}
        setText={setText}
        text={text}
      />
    </Container>
  );
};

export default TextAreaInput;