import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NavBtn = {
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
	min-height: 4rem;
	border-radius: 50%;
`;

const Label = styled.h5`
	color: #CAD2C5;
	font-family: 'Lora', serif;
	font-size: 0.9rem;
	margin: auto;
`;

const NavButton = ({ color, svgSrc, text }: NavBtn): JSX.Element => (
	<section>
		<Btn style={{ background: color }}>
			<FontAwesomeIcon icon={svgSrc} color="#CAD2C5" width="1.75rem" />
		</Btn>
		<Label>{text}</Label>
	</section>
);

export default NavButton;