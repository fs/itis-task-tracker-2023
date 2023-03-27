import { useParams, useNavigate } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Notifier from "../components/atoms/Notifier";
import Button from "../components/atoms/Button";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DefaultTemplate>
      <Button label="Go Back" onClick={() => navigate(-1)} />
      My task {id}
      <Notifier />
    </DefaultTemplate>
  );
};

export default ProjectPage;
