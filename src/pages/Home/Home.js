import React from "react";
import { useQuery } from "urql";
import { UserData} from "graphql/queries";
import { decodeToken ,  cleanToken } from "utils/tokens";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export default function Home() {
  console.log("Home")
  let id = decodeToken().id;
  console.log("Home 2")
  const history = useHistory();
 

  const [{ fetching, data, error }] = useQuery({
    query: UserData,
    variables: {
      id: id,
    },
  });

  if (fetching) {
    return `Loading `;
  } else if (error) {
    return `Oh no! Error: ${error}`;
  }

  const logout = ()=>{
    cleanToken()
    history.push("/login");
  }

  return (
    <Div>
      
      <Input
        defaultValue={data.user.firstName}
        name="firstName"
        type="text"
        disabled
      />
      <Input
        defaultValue={data.user.lastName}
        type="text"
        name="lastName"
        disabled
      />

      <Button onClick={logout}> Logout </Button>
    </Div>
  );
}
