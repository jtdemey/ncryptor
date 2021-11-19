import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
	margin: 0.3rem 0 0 auto;
`;

const Label = styled.label`
	display: inline-block;
	padding: 0.25rem;
	border: 1px solid #CAD2C5;
	border-radius: 2px;
	color: #CAD2C5;
	font-family: 'Lato', sans-serif;
	font-size: 1.1rem;
	line-height: 1.1rem;
`;

const Input = styled.input`
	display: none;
`;

const FileInput = (): JSX.Element => (
	<Container>
		<Label htmlFor="file-input">
			<FontAwesomeIcon icon={faUpload} width="32px" />
		</Label>
		<Input type="file" name="file-input" />
	</Container>
);

export default FileInput;