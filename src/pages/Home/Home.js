import React from "react";
import { useQuery } from "urql";
import { UserData} from "graphql/queries";
import { decodeToken ,  cleanToken } from "utils/token";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { Redirect, useHistory } from "react-router-dom";
 
import {validToken} from "utils/token"
import Form from "components/Form/Form";
import Loading from "components/loading/Loading";


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

 
  const logout = ()=>{
    cleanToken()
    history.push("/login");
  }

  if(!validToken()){
    return <Redirect to= "/login" />
  }
 
  return (
    <Form>

      <Input
        defaultValue={data?.user?.firstName}
        name="firstName"
        type="text"
        disabled
      />
      <Input
        defaultValue={data?.user?.lastName}
        type="text"
        name="lastName"
        disabled
      />

{ error && <p> Something Went Wrong </p>}

 { fetching && <Loading />}


      <Button onClick={logout}> Logout </Button>
    </Form>


  );
}
