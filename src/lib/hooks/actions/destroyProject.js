import { useContext } from "react";
import { useMutation } from "@apollo/client";

import destroyProject from "src/graphql/mutations/destroyProject";
import projects from "src/graphql/queries/projects"
import NotifierContext from "src/context/NotifierContext";

export const useDestroyProject = ({ onSubmit }) => {
  const { setMessage } = useContext(NotifierContext);

  const [mutation, mutationState] = useMutation(destroyProject, {
    refetchQueries: [{ query: projects }],
    onCompleted: (data) => {
      onSubmit();
      setMessage(`Проект ${data?.destroyProject?.project?.name} успешно удален`)
    },
  });

  const mutate = async ({ id }) => {
    const destroyProjectInput = {
      id,
    };

    try {
      await mutation({ variables: { input: destroyProjectInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState];
};
