import React from "react";
import styled from "styled-components";
import NavButton, { NavBtn } from "./NavButton";
import { faEnvelope, faEnvelopeOpen, faKey, faUserFriends, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const genNavBtn = (
  id: number,
  svgSrc: IconDefinition,
  text: string,
  color: string
): NavBtn => ({
  color,
  id,
  svgSrc,
  text,
});

const navBtns: NavBtn[] = [
  genNavBtn(0, faEnvelope, "Encrypt", "#B64402"),
  genNavBtn(1, faEnvelopeOpen, "Decrypt", "#564787"),
  genNavBtn(2, faKey, "Keychain", "#4C1E4F"),
  genNavBtn(3, faUserFriends, "Contacts", "#32021F")
];

const Bar = styled.div`
  width: 100%;
	position: fixed;
	bottom: 2rem;
	display: flex;
	justify-content: space-evenly;
`;

const NavBar = (): JSX.Element => (
  <Bar>
    {navBtns.map((btn) => (
      <NavButton
        key={btn.id}
        id={btn.id}
        color={btn.color}
        svgSrc={btn.svgSrc}
        text={btn.text}
      />
    ))}
  </Bar>
);

export default NavBar;