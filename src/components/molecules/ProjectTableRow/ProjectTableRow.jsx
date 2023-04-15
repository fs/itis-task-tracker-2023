import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "src/components/atoms/Button";
import DestroyProjectWindow from "../DestroyProjectWindow/DestroyProjectWindow";

const TableItem = styled.td`
  padding: 12px;
`;

const ProjectTableRow = ({ project }) => {
  const { name, description, createdAt } = project;
  const [isDestroyModalOpen, setIsDestroyModalOpen] = useState(false);

  return (
    <>
      <tr>
        <TableItem> {name} </TableItem>
        <TableItem> {description} </TableItem>
        <TableItem> {createdAt} </TableItem>
        <TableItem>
          <Link to="/projects/5">
            <Button label="Tasks" />
          </Link>
        </TableItem>
        <TableItem>
          <Button label="Edit" color="#7938db" />
        </TableItem>
        <TableItem>
          <Button onClick={() => setIsDestroyModalOpen(true)} label="Destroy" color="#eb5369" />
        </TableItem>
      </tr>
      {isDestroyModalOpen && (
        <DestroyProjectWindow isOpen={isDestroyModalOpen} projectName={name} setIsOpen={setIsDestroyModalOpen} />
      )}
    </>
  );
};

export default ProjectTableRow;
