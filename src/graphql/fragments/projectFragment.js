import { gql } from "@apollo/client";

export default gql`
  fragment Project on Project {
    createdAt
    description
    id
    name
    updatedAt
  }
`;
