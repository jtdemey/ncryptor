import React from "react";
import styled from "styled-components";

type GenerateKeySubmitBtnProps = {
  algorithm: string;
  userId: string;
};

const Button = styled.div`
  margin: 2rem auto 0.5rem;
  padding: 0.5rem;
  background: #52796f;
  border: 1px solid #222;
  box-shadow: -3px 3px 8px #222;
  color: #cad2c5;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
	font-weight: bold;
  outline: none;
	text-align: center;
`;

const executeFetch = (userId: string, algorithm: string): Promise<Response> =>
  fetch(`${window.location.href}api/genkey`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, algorithm }),
  });

const GenerateKeySubmitBtn = ({
  algorithm,
  userId,
}: GenerateKeySubmitBtnProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  const clickFunc = () => {
    setLoading(true);
    executeFetch(userId, algorithm)
      .then((response: Response) => response.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
      });
  };
  return <Button onClick={() => clickFunc()}>{loading ? '...' : 'Generate'}</Button>;
};

export default GenerateKeySubmitBtn;