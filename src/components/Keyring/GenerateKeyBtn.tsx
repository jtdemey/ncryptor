import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AppViews } from "../../data/AppViews";

type GenerateKeyBtnProps = {
	setView: Function
};

const Button = styled.div`
	margin-bottom: 2rem;
  padding: 0.5rem;
  background: #52796f;
  border: 1px solid #354f52;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.45);
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const SvgSpan = styled.span`
	padding: 0.25rem;
`;

const TextSpan = styled.h3`
	display: inline-block;
	margin: 0;
	padding: 0 0 0 0.5rem;
`;

const GenerateKeyBtn = ({ setView }: GenerateKeyBtnProps): JSX.Element => {
	const clickFunc = () => setView(AppViews.GenerateKey);
  return (
    <Button onClick={() => clickFunc()}>
			<SvgSpan>
				<FontAwesomeIcon icon={faPlus} width="1rem" style={{ transform: 'translateY(0.1rem)' }} />
			</SvgSpan>
			<TextSpan>Generate new keypair</TextSpan>
		</Button>
  );
};

export default GenerateKeyBtn;