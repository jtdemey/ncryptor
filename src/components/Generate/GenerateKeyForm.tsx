import React from "react";
import styled from "styled-components";
import Dropdown from "../Form/Dropdown";
import RadioBtnGroup from "../Form/RadioBtnGroup";
import TextInput from "../Form/TextInput";
import BackBtn from "../Main/BackBtn";
import CancelCreateBtn from "./CancelCreateBtn";
import GenerateKeySubmitBtn from "./GenerateKeySubmitBtn";
import { AppViews } from "../../data/AppViews";
import { sanitizeInput } from "../../utils/StringSanitizer";
import ValidationErrorArea from "../Form/ValidationErrorArea";

type GenerateKeyFormProps = {
  setView: Function;
};

export const Container = styled.article`
  max-width: 400px;
  margin: auto;
`;

export const Header = styled.h2`
  margin: 0 auto 1.5rem;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

export const BtnBar = styled.h2`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ds = (stringValue: string): [string, string] => [
  stringValue,
  stringValue
];

const executeFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getcurves`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

const parseCurves = (curvesResponse: string): [string, string][] => {
  const curvesString = curvesResponse.split(":")[2];
  return curvesString.split(";").map((curve: string) => ds(curve.trim()));
};

const GenerateKeyForm = ({ setView }: GenerateKeyFormProps): JSX.Element => {
  const initialOptions: [string, string][] = [
    ds("rsa4096"),
    ds("rsa2048"),
    ds("rsa1024")
  ];
  const [dropdownOptions, setDropdownOptions] = React.useState(initialOptions);
  const [userId, setUserId] = React.useState("");
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState("rsa4096");
  const [selectedDate, setSelectedDate] = React.useState("");
  const initialErrors: string[] = [];
  const [validationErrors, setValidationErrors] = React.useState(initialErrors);
  const radioSelections = ["1m", "2m", "6m", "1y", "never", "custom"];
  React.useEffect(() => {
    executeFetch()
      .then((response: Response) => response.json())
      .then(result =>
        setDropdownOptions(dropdownOptions.concat(parseCurves(result.curves)))
      );
  }, []);
  return (
    <Container>
      <BackBtn clickFunc={() => setView(AppViews.Keyring)} />
      <Header>Create a new keypair</Header>
      <ValidationErrorArea errors={validationErrors} />
      <TextInput
        autoFocus={true}
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserId(sanitizeInput(e.target.value))
        }
        maximum={64}
        label="User ID"
        value={userId}
      />
      <Dropdown
        animationDuration={0.75}
        selections={dropdownOptions}
        label="Algorithm"
        setValue={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedAlgorithm(e.toString())
        }
        subLabel="(recommended: rsa4096)"
        selectedValue={selectedAlgorithm}
      />
      <RadioBtnGroup
        label="Expiration Date"
        selections={radioSelections}
        selectedValue={selectedDate}
        selectValue={setSelectedDate}
      />
      <BtnBar>
        <GenerateKeySubmitBtn
          algorithm={selectedAlgorithm}
          expirationDate={selectedDate}
          userId={userId}
          setValidationErrors={setValidationErrors}
        />
        <CancelCreateBtn clickFunc={() => setView(AppViews.Keyring)} />
      </BtnBar>
    </Container>
  );
};

export default GenerateKeyForm;
