import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NavBtnProps = {
	clickFunc: Function;
	color: string;
  id: number;
  svgSrc: IconDefinition;
  text: string;
};

const Btn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.75rem;
	margin-top: 0.5rem;
	min-height: 3.75rem;
	background: #202B31;
	box-shadow: -0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.45);
	border-radius: 50%;
`;

const Label = styled.h5`
	color: #CAD2C5;
	font-family: 'Lato', sans-serif;
	font-size: 0.9rem;
	font-weight: 100;
	margin: auto;
	padding-top: 0.45rem;
	text-align: center;
`;

const NavBtn = ({ clickFunc, color, svgSrc, text }: NavBtnProps): JSX.Element => (
	<section>
		<Btn onClick={() => clickFunc()} style={{ border: `0.15rem solid ${color}` }}>
			<FontAwesomeIcon icon={svgSrc} color="#CAD2C5" width="28px" />
		</Btn>
		<Label>{text}</Label>
	</section>
);

export default NavBtn;