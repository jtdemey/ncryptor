import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: calc(100% - 1rem);
  margin: 1rem auto 0;
  padding: 0.5rem;
  background: #52796f;
  border: 1px solid #354f52;
  border-radius: 4px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.45);
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const executeFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/genkey`, {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ userId: 'testaroo' })
	});

const GenerateKeyBtn = (): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  const clickFunc = () => {
    setLoading(true);
    executeFetch().then((response: Response) => response.json()).then(result => {
      console.log(result);
			setLoading(false);
    });
  };
  return (
    <Button onClick={() => clickFunc()}>{loading ? "Loading" : 'Generate a new key'}</Button>
  );
};

export default GenerateKeyBtn;