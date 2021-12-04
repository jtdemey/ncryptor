import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AppViews } from "../../data/AppViews";
import { Button, SvgSpan, TextSpan } from "../Keyring/GenerateKeyBtn";

type AddContactBtnProps = {
  setView: Function;
  text?: string;
};

const AddContactBtn = ({
  setView,
  text
}: AddContactBtnProps): JSX.Element => (
  <Button onClick={() => setView(AppViews.CreateContact)}>
    <SvgSpan>
      <FontAwesomeIcon
        icon={faPlus}
        width="16px"
        style={{ transform: "translateY(0.1rem)" }}
      />
    </SvgSpan>
    <TextSpan>{text || "New"}</TextSpan>
  </Button>
);

export default AddContactBtn;
