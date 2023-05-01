import { useMutation } from "@apollo/client";

import projects from "src/graphql/queries/projects";
import createProject from "src/graphql/mutations/createProject";

export const useCreateProject = ({ onSubmit }) => {
  const [mutation, mutationState] = useMutation(createProject, {
    refetchQueries: [{ query: projects }],
    onCompleted: onSubmit,
    onError: error => console.error(error),
  });

  const mutate = async ({ name, description }) => {
    const createProjectInput = {
      name,
      description,
    };

    await mutation({ variables: { input: createProjectInput } });
  };

  return [mutate, mutationState];
};
