import { useQuery } from "@apollo/client";

import Projects from "src/graphql/queries/projects";

export const useProjects = () => {
  const { data, loading, error } = useQuery(Projects, {
    fetchPolicy: "cache-and-network",
  });

  return {
    projects: data?.projects || [],
    loading,
    error,
  };
};
