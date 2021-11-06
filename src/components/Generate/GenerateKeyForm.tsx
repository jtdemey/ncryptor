import React from "react";
import styled from "styled-components";
import Dropdown from "../Form/Dropdown";
import TextInput from "../Form/TextInput";
import GenerateKeySubmitBtn from "./GenerateKeySubmitBtn";

const Container = styled.article``;

const Header = styled.h2`
  margin: 0 auto 1.5rem;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

const executeFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getcurves`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const parseCurves = (curvesResponse: string): string[] => {
  const curvesString = curvesResponse.split(":")[2];
  return curvesString.split(";").map((curve: string) => curve.trim());
};

const initialOptions: string[] = ["rsa4096", "rsa2048", "rsa1024"];

const GenerateKeyForm = (): JSX.Element => {
  const [dropdownOptions, setDropdownOptions] = React.useState(initialOptions);
  const [userId, setUserId] = React.useState("");
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState("");
  React.useEffect(() => {
    executeFetch()
      .then((response: Response) => response.json())
      .then((result) =>
        setDropdownOptions(dropdownOptions.concat(parseCurves(result.curves)))
      );
  }, []);
  return (
    <Container>
      <Header>Create a new keypair</Header>
      <TextInput
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserId(e.target.value)
        }
        maximum={128}
        label="User ID"
        value={userId}
      />
      <Dropdown
        options={dropdownOptions}
        label="Algorithm"
        setValue={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSelectedAlgorithm(e.toString());
        }}
        subLabel="(recommended: rsa4096)"
        selectedValue={selectedAlgorithm}
      />
      <GenerateKeySubmitBtn algorithm={selectedAlgorithm} userId={userId} />
    </Container>
  );
};

export default GenerateKeyForm;