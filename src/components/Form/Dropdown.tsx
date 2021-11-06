import React from "react";
import styled from "styled-components";

type DropdownProps = {
  options: Array<string>;
  label: string;
  selectedValue: string | number;
  setValue: Function;
  subLabel?: string;
};

const Label = styled.label`
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
`;

const SubLabel = styled.label`
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 0.95rem;
  padding-left: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem;
  background: #2f3e46;
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

const Dropdown = ({
  options,
  label,
  setValue,
  subLabel,
  selectedValue,
}: DropdownProps): JSX.Element => {
  return (
    <>
      <Label>{label || ""}</Label>
      <SubLabel>{subLabel || ""}</SubLabel>
      <Select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value)
        }
        value={selectedValue}
      >
        {options.length &&
          options.map((value: string) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </Select>
    </>
  );
};

export default Dropdown;