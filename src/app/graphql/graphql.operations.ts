import { gql } from 'apollo-angular';

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    userFirstname
    userLastname
    userBio
    userDateOfBirth
    userGender
    userStatus
    userPreference
    userProfileImg
    username
  }
`;

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

const INTERNAL_SIGN_IN_MUTATION = gql`
  mutation InternalSignIn($email: String!, $password: String!) {
    internalSignIn(email: $email, password: $password) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export { GET_USERS, INTERNAL_SIGN_IN_MUTATION };
