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
    onError: error => console.error(error),
  });

  const mutate = async ({ id }) => {
    const destroyProjectInput = {
      id,
    };

    await mutation({ variables: { input: destroyProjectInput } });
  };

  return [mutate, mutationState];
};
