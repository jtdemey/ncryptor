import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type RadioBtnGroupProps = {
  label: string;
  selections: string[];
};

const Label = styled(motion.label)`
  display: block;
  margin: 1rem 0 0.5rem;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
`;

const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;

const BtnGroup = styled.div`
  display: flex;
  flex-flow: column;
`;

const BtnLabel = styled(motion.label)`
  color: #cad2c5;
  padding: 0 0.25rem 0.25rem;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
`;

const Input = styled(motion.input)`
  margin: 0 0 1rem;
  padding: 0.5rem;
  background: #203031;
  border: 1px solid #222;
  box-shadow: -3px 3px 8px #222;
  color: #cad2c5;
  font-family: "Lora", serif;
  font-size: 1.1rem;
  outline: none;
`;

const RadioBtnGroup = ({
  label,
  selections
}: RadioBtnGroupProps): JSX.Element => {
  const [selectedValue, selectValue] = React.useState("");
  return (
    <>
      <Label
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1.05, ease: "easeOut" }}
      >
        {label || "Expiration Date"}
      </Label>
      <Container>
        {selections.map(selection => (
          <BtnGroup>
            <BtnLabel>{selection}</BtnLabel>
            <Input
              checked={selection === selectedValue}
              key={selection}
              onChange={e => selectValue(e.target.value)}
              type="radio"
              value={selection}
            />
          </BtnGroup>
        ))}
      </Container>
    </>
  );
};

export default RadioBtnGroup;
