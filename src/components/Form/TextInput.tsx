import React from "react";
import styled from "styled-components";

type TextInputProps = {
  changeHandler: Function;
  maximum: number;
  label?: string;
  value?: string;
};

const Label = styled.label`
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: calc(100% - 1rem);
  margin: 0 0 1rem;
  padding: 0.5rem;
  background: #203031;
  border: 1px solid #222;
  box-shadow: -3px 3px 8px #222;
  color: #cad2c5;
  font-family: "Lora", serif;
  font-size: 1.1rem;
  outline: none;

  &:focus {
    border: 1px solid #84a98c;
  }

  &::placeholder {
    color: #84a98c;
  }
`;

const TextInput = ({
  changeHandler,
  maximum,
  label,
  value,
}: TextInputProps): JSX.Element => {
  return (
    <>
      <Label>{label || ""}</Label>
      <Input
        onChange={(e) => changeHandler(e)}
        max={maximum || 128}
        type="text"
        value={value}
      />
    </>
  );
};

export default TextInput;