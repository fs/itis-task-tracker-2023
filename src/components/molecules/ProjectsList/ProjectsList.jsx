import React from "react";
import { v4 } from "uuid";
import styled from "styled-components";
import ProjectTableRow from "../ProjectTableRow";

const mockProjects = [
  {
    name: "Project #1",
    description: "It's my first project",
    createdAt: "22 days ago",
  },
  {
    name: "Project #2",
    description: "It's my second project",
    createdAt: "20 days ago",
  },
  {
    name: "Stackers team",
    description: "",
    createdAt: "10 days ago",
  },
];

const Wrapper = styled.div`
  overflow: auto;
  margin-top: 48px;
  max-width: 1000px;
  padding: 16px;
  background: #fafafa;
`;

const Table = styled.table`
  width: 100%;
`;

const TableItem = styled.td`
  padding: 12px;
`;

const Head = styled.thead`
  border-bottom: 1px solid #bdbdbd;
`;

const ProjectsList = () => {
  return (
    <Wrapper>
      <Table>
        <Head>
          <tr key={`table-header-${v4()}`}>
            <TableItem> Name </TableItem>
            <TableItem> Description </TableItem>
            <TableItem> Created At </TableItem>
          </tr>
        </Head>
        <tbody>
          {mockProjects.map((project) => (
            <ProjectTableRow project={project} key={`table-row-${v4()}`} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ProjectsList;
