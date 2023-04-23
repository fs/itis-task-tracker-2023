import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
`

const StyledList = styled.ul`
  gap: 1rem;
  list-style: square;
  margin-left: 1rem;
`;

const Title = styled.h1`
  color: #7938db;
  list-style: square;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ProjectInfo = ({ project }) => {
  const { name, tasks } = project;

  return (
    <Wrapper>
      <Title> {name} </Title>
      <StyledList>
        {tasks.map(({ title, id }) => <li key={id}>{title}</li>) }
      </StyledList>
    </Wrapper>
  )
};

export default ProjectInfo;
