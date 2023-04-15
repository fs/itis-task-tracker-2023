import { gql } from "@apollo/client";

export default gql`
  fragment ProjectInfo on Project {
    createdAt
    description
    id
    name
    updatedAt
    tasks {
      createdAt
      deadlineAt
      description
      id
      state
      title
      updatedAt
    }
  }
`;
