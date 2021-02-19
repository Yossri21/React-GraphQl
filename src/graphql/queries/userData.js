import { gql } from "@urql/core";
/*
const ME = gql`
query user ($id:ID!){
  user (id: $id) {
    id
    email
    firstName
    lastName
  }
}
`;
*/

const UserData = `
query user ($id:ID!) {
    user(id: $id){
      id
      email
      firstName
      lastName
    }
  }
`;


export default UserData;
