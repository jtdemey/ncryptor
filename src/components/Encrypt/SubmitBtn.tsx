import React from "react";
import styled from "styled-components";

export type SubmitBtnProps = {
  endpoint: string;
	label: string;
	setText: Function;
  text: string;
};

const Button = styled.div`
  width: 8rem;
  margin: 1rem auto 0;
  padding: 0.5rem;
  background: #52796f;
  border: 1px solid #354f52;
  border-radius: 4px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.45);
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const executeFetch = (endpoint: string, text: string): Promise<Response> =>
  fetch(`${window.location.href}api/${endpoint}`, {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ text })
	});

const SubmitBtn = ({ endpoint, label, setText, text }: SubmitBtnProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  const clickFunc = () => {
    setLoading(true);
    executeFetch(endpoint, text).then((response: Response) => response.json()).then(result => {
      console.log(result);
			setLoading(false);
			setText(result.text);
    });
  };
  return (
    <Button onClick={() => clickFunc()}>{loading ? "Loading" : label}</Button>
  );
};

export default SubmitBtn;