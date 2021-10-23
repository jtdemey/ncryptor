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
	width: 4rem;
	margin-top: 0.5rem;
	min-height: 4rem;
	background: #202B31;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.45);
	border-radius: 50%;
`;

const Label = styled.h5`
	color: #CAD2C5;
	font-family: 'Lato', sans-serif;
	font-size: 0.9rem;
	font-weight: 100;
	margin: auto;
	padding-top: 0.25rem;
	text-align: center;
`;

const NavButton = ({ clickFunc, color, svgSrc, text }: NavBtnProps): JSX.Element => (
	<section>
		<Btn onClick={() => clickFunc()} style={{ border: `0.15rem solid ${color}` }}>
			<FontAwesomeIcon icon={svgSrc} color="#CAD2C5" width="1.75rem" />
		</Btn>
		<Label>{text}</Label>
	</section>
);

export default NavButton;