import React from "react";
import styled from 'styled-components';
import FileInput from "./FileInput";

const Container = styled.div`
	display: flex;
	flex-flow: column;
`;

const LabelRow = styled.div`
	display: flex;
`;

const Label = styled.label`
	padding: 0 0.5rem 0 0;
	color: #CAD2C5;
	font-family: 'Lato', sans-serif;
	font-size: 1.1rem;
	line-height: 1.5rem;
`;

const TextArea = styled.textarea`
	width: calc(100% - 0.8rem - 1px);
	min-height: 16rem;
	margin: 1rem auto 0;
	padding: 0.4rem;
	background: #354F52;
	border: none;
	border-radius: 2px;
	color: #CAD2C5;
	font-family: 'Lora', serif;
	font-size: 1rem;
`;

const SubmitBtn = styled.div`
	width: 8rem;
	margin: 1rem auto 0;
	padding: 0.5rem;
	background: #52796F;
	border: 1px solid #354F52;
	border-radius: 4px;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.45);
	color: #CAD2C5;
	font-family: 'Lato', sans-serif;
	font-size: 1.25rem;
	font-weight: bold;
	text-align: center;
	text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
`;

const TextInput = (): JSX.Element => (
	<Container>
		<LabelRow>
			<Label>Compose a message or upload text file</Label>
			<FileInput />
		</LabelRow>
		<TextArea />
		<SubmitBtn>Encrypt</SubmitBtn>
	</Container>
);

export default TextInput;