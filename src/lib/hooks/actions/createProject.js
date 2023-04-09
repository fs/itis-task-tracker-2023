import { useMutation } from "@apollo/client";

import projects from "src/graphql/queries/projects";
import createProject from "src/graphql/mutations/createProject";

export const useCreateProject = () => {
  const [mutation, mutationState] = useMutation(createProject, {
    refetchQueries: [{ query: projects }],
  });

  const mutate = async ({ name, description }) => {
    const createProjectInput = {
      name,
      description,
    };

    try {
      await mutation({ variables: { input: createProjectInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState];
};
