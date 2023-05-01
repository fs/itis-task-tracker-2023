import React from 'react';
import { render, screen } from '@testing-library/react';

import { useProjects } from "src/lib/hooks/states/project";

import mockProjects from './mockProjects';

import ProjectsList from './ProjectsList';

jest.mock('src/lib/hooks/states/project');

describe('ProjectsList', () => {
  const mockUseProjects = jest.fn(() => ({ projects: mockProjects, loading: undefined }));
  useProjects.mockImplementation(mockUseProjects);

  test('should show list of projects', async () => {
    // Arrange
    expect(1).toBe(1);

    // Act
    render(<ProjectsList />)
    const projectNames = screen.getAllByTestId('project-name')

    // Assert
    expect(projectNames).toHaveLength(mockProjects.length);
    projectNames.forEach((el, index) => {
      expect(el).toHaveTextContent(mockProjects[index].name);
    })
  })
})