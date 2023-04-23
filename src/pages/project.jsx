import { useParams, useNavigate } from "react-router-dom";
import { useProject } from "src/lib/hooks/states/project";

import DefaultTemplate from "src/components/templates/DefaultTemplate";
import Notifier from "src/components/atoms/Notifier";
import Button from "src/components/atoms/Button";
import ProjectInfo from "src/components/organisms/ProjectInfo/ProjectInfo";

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
