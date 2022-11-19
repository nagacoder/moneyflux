import gql from "graphql-tag";

export const Login = gql`
  mutation Login($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        name
        id
      }
    }
  }
`;
