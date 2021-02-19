import React, { useState, useCallback } from "react";

import useLogin from "./useLogin";

export default function Login() {
  const [identifier, setIdentifier] = useState("test@freshcells.de");
  const [password, setPassword] = useState("KTKwXm2grV4wHzW");

  const { onSubmit } = useLogin({ identifier, password });

  const onChange = useCallback((event) => {
    event.target.name === "password"
      ? setPassword(event.target.value)
      : setIdentifier(event.target.value);
  }, []);

  return (
    <div>
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
      />
    </div>
  );
}
