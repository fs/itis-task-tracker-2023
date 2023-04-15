import { useParams, useNavigate } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Notifier from "../components/atoms/Notifier";
import Button from "../components/atoms/Button";
import { useProject } from "../lib/hooks/states/project";
import ProjectInfo from "../components/organisms/ProjectInfo/ProjectInfo";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { project } = useProject({ projectId: id })

  return (
    <DefaultTemplate>
      {project?.name && <ProjectInfo project={project} />}
      <Button label="Go Back" onClick={() => navigate(-1)} />
      <Notifier />
    </DefaultTemplate>
  );
};

export default ProjectPage;
