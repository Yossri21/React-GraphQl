import { gql } from "@urql/core";

const LOGIN = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;

export default LOGIN;
