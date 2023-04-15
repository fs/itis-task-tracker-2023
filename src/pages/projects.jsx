import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsList from "../components/molecules/ProjectsList";
import Notifier from "../components/atoms/Notifier";

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      My Projects
      <ProjectsList />
      <Notifier />
    </DefaultTemplate>
  );
};

export default ProjectsPage;
