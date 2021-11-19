import React from "react";
import styled from "styled-components";
import { AppViews } from "../../data/AppViews";
import Dropdown from "../Form/Dropdown";
import TextInput from "../Form/TextInput";
import BackBtn from "../Main/BackBtn";
import CancelCreateBtn from "./CancelCreateBtn";
import GenerateKeySubmitBtn from "./GenerateKeySubmitBtn";

type GenerateKeyFormProps = {
	setView: Function;
};

const Header = styled.h2`
  margin: 0 auto 1.5rem;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

const BtnBar = styled.h2`
	display: grid;
	grid-template-columns: 1fr 1fr;
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

const sanitizeInput = (raw: string): string => {
	for (let i = 0; i < raw.length; i++) {
		if (raw[i] === " ") {
			raw = raw.slice(0, i) + raw.slice(i + 1);
			i--;
		}
	}
	return raw.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
};

const initialOptions: string[] = ["rsa4096", "rsa2048", "rsa1024"];

const GenerateKeyForm = ({ setView }: GenerateKeyFormProps): JSX.Element => {
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
    <article>
			<BackBtn clickFunc={() => setView(AppViews.Keychain)} />
      <Header>Create a new keypair</Header>
      <TextInput
        changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserId(sanitizeInput(e.target.value))
        }
        maximum={64}
        label="User ID"
        value={userId}
      />
      <Dropdown
        selections={dropdownOptions}
        label="Algorithm"
        setValue={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSelectedAlgorithm(e.toString());
        }}
        subLabel="(recommended: rsa4096)"
        selectedValue={selectedAlgorithm}
      />
			<BtnBar>
				<GenerateKeySubmitBtn algorithm={selectedAlgorithm} userId={userId} />
				<CancelCreateBtn clickFunc={() => setView(AppViews.Keychain)} />
			</BtnBar>
    </article>
  );
};

export default GenerateKeyForm;