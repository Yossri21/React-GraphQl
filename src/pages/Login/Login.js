
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import React, { useState, useCallback } from "react";
import useLogin from "./useLogin";
import {validToken} from "utils/tokens"

import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;


export default function Login() {
  console.log("Login")
  const [identifier, setIdentifier] = useState("test@freshcells.de");
  const [password, setPassword] = useState("KTKwXm2grV4wHzW");

  const { onSubmit } = useLogin({ identifier, password });

  const onChange = useCallback((event) => {
    event.target.name === "password"
      ? setPassword(event.target.value)
      : setIdentifier(event.target.value);
  }, []);
  if(validToken()){
    return <Redirect to= "/" />
  }
  return (
    <Div>
    
      <Input
        defaultValue={identifier}
        name="identifier"
        onChange={onChange}
        placeholder="type identifier"
        type="email"

      />
      <Input   defaultValue={password}
        type="password"
        name="password"
        onChange={onChange}
        placeholder="type password" /> 

<Button onClick={onSubmit} > Connexion </Button>
{/*
      <button type="button" onClick={onSubmit}>
        CLICK
      </button>
      <input
        defaultValue={password}
        type="password"
        name="password"
        onChange={onChange}
        placeholder="type password"
      />
      <input
        defaultValue={identifier}
        name="identifier"
        onChange={onChange}
        placeholder="type identifier"
      />*/}
    </Div>
  );
}
