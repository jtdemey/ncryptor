import React from "react";
import styled from "styled-components";
import NavBtn, { NavBtnProps } from "./NavBtn";
import {
  faEnvelope,
  faEnvelopeOpen,
  faKey,
  faUserFriends,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { AppViews } from "../../data/AppViews";

type NavBarProps = {
	setView: Function 
};

const genNavBtnProps = (
  id: number,
  svgSrc: IconDefinition,
  text: string,
  color: string
): NavBtnProps => ({
	clickFunc: () => false,
  color,
  id,
  svgSrc,
  text,
});

const navBtns: NavBtnProps[] = [
  genNavBtnProps(AppViews.Encrypt, faEnvelope, "Encrypt", "#B64402"),
  genNavBtnProps(AppViews.Decrypt, faEnvelopeOpen, "Decrypt", "#564787"),
  genNavBtnProps(AppViews.Keychain, faKey, "Keychain", "#4C1E4F"),
  genNavBtnProps(AppViews.Contacts, faUserFriends, "Contacts", "#32021F"),
];

const Container = styled.div`
	width: 100%;
  position: fixed;
  bottom: 0rem;
  overflow: hidden;
`;
/*
const Ellipse = styled.div`
	position: relative;
	height: 4rem;
	transform: translateY(2rem);
  background: #2f3e46;
	border-radius: 50%;
	z-index: 1;
`;
*/
const Bar = styled.div`
	position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 0.75rem;
	z-index: 2;
`;

const NavBar = ({ setView }: NavBarProps): JSX.Element => (
  <Container>
    <Bar>
      {navBtns.map((btn) => (
        <NavBtn
          key={btn.id}
          id={btn.id}
					clickFunc={() => setView(btn.id)}
          color={btn.color}
          svgSrc={btn.svgSrc}
          text={btn.text}
        />
      ))}
    </Bar>
  </Container>
);

export default NavBar;