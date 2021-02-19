
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import React, { useState, useCallback } from "react";
import useLogin from "./useLogin";
import {validToken} from "utils/token"
 
import { Redirect } from "react-router-dom";
import Form from "components/Form/Form";




export default function Login() {
  console.log("Login")
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit } = useLogin({ identifier, password });

  const onChange = useCallback((event) => {
    event.target.name === "password"
      ? setPassword(event.target.value)
      : setIdentifier(event.target.value);
  }, []);



  if(validToken()){
    return <Redirect to= "/" />
  }
  return (
   
    <Form onSubmit={handleSubmit}>
      <Input
        defaultValue={identifier}
        name="identifier"
        onChange={onChange}
        placeholder="type identifier"
        type="email"
        required

      />
      <Input   defaultValue={password}
        type="password"
        name="password"
        onChange={onChange}
        required
        placeholder="type password" /> 

<Button type="submit" > Login </Button>
</Form>
 
   
  );
}
