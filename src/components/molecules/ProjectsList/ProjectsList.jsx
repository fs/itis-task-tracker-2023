import React from "react";
import { v4 } from "uuid";
import styled from "styled-components";

import { useProjects } from "src/lib/hooks/states/project";
import { useCreateProject } from "src/lib/hooks/actions/createProject";
import { useDestroyProject } from "src/lib/hooks/actions/destroyProject";

import Button from "src/components/atoms/Button";
import ProjectTableRow from "src/components/molecules/ProjectTableRow";


const Wrapper = styled.div`
  overflow: auto;
  margin-top: 48px;
  max-width: 1000px;
  padding: 16px;
  background: #fafafa;
`;

const Table = styled.table`
  width: 100%;
  margin: 0 0 1rem;
`;

const TableItem = styled.td`
  padding: 12px;
`;

const Head = styled.thead`
  border-bottom: 1px solid #bdbdbd;
`;

const ProjectsList = () => {
  const { projects } = useProjects();

  const [createProject] = useCreateProject();
  // const [destroyProject] = useDestroyProject();

  return (
    <Wrapper>
      {!!projects.length && (
        <>
          <Table>
            <Head>
              <tr>
                <TableItem> Name </TableItem>
                <TableItem> Description </TableItem>
                <TableItem> Created At </TableItem>
              </tr>
            </Head>
            <tbody>
            {projects.map((project) => (
              <ProjectTableRow project={project} key={`table-row-${project.id}`} />
            ))}
            </tbody>
          </Table>

          <Button label="create new project" onClick={() => createProject({ name: "test", description: "lol" })} />
        </>
      )}
    </Wrapper>
  );
};

export default ProjectsList;
