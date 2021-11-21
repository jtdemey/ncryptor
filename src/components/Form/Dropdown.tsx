import React from "react";
import styled from "styled-components";

type DropdownProps = {
  label: string;
  selectedValue: string | number;
  selections: [any, string][];
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
  margin: 0;
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

	&:after {
		border-radius: 0px;
	}
`;

const Dropdown = ({
  selections,
  label,
  setValue,
  subLabel,
  selectedValue,
}: DropdownProps): JSX.Element => {
  return (
    <>
      {label && <Label>{label || ""}</Label>}
      {subLabel && <SubLabel>{subLabel || ""}</SubLabel>}
      <Select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value)
        }
        value={selectedValue}
      >
        {selections.length &&
          selections.map((pair: [any, string]) => (
            <option key={pair[0]} value={pair[1]}>
              {pair[1]}
            </option>
          ))}
      </Select>
    </>
  );
};

export default Dropdown;