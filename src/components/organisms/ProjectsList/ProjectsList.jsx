import React, { useState } from "react";
import styled from "styled-components";

import { useProjects } from "src/lib/hooks/states/project";

import Button from "src/components/atoms/Button";
import ProjectTableRow from "src/components/molecules/ProjectTableRow";
import CreateProjectWindow from "src/components/molecules/CreateProjectWindow";

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
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { projects } = useProjects();

  return (
    <Wrapper>
      {projects.length ? (
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

          <Button label="Create new project" onClick={() => setIsCreateModalOpen(true)} />
        </>
      ) : (
        <div data-testid='empty-message'>Нет проектов</div>
      )}
      {isCreateModalOpen && <CreateProjectWindow setIsOpen={setIsCreateModalOpen} isOpen={isCreateModalOpen} />}
    </Wrapper>
  );
};

export default ProjectsList;
