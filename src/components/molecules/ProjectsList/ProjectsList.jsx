import React from "react";
import { v4 } from "uuid";
import styled from "styled-components";

import Button from "../../atoms/Button";
import ModalWindow from "../../atoms/ModalWindow";

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
      <ModalWindow> Hello </ModalWindow>
      <Table>
        <Head>
          <tr key={`table-header-${v4()}`}>
            <TableItem> Name </TableItem>
            <TableItem> Description </TableItem>
            <TableItem> Created At </TableItem>
          </tr>
        </Head>
        <tbody>
          {mockProjects.map(({ name, description, createdAt }) => (
            <tr key={`table-row-${v4()}`}>
              <TableItem> {name} </TableItem>
              <TableItem> {description} </TableItem>
              <TableItem> {createdAt} </TableItem>
              <TableItem>
                <Button label="Tasks" />
              </TableItem>
              <TableItem>
                <Button label="Edit" color="#7938db" />
              </TableItem>
              <TableItem>
                <Button label="Destroy" color="#eb5369" />
              </TableItem>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ProjectsList;
