import React from 'react';
import { render, screen } from '@testing-library/react';

import { useProjects } from "src/lib/hooks/states/project";

import mockProjects from './mockProjects';

import ProjectsList from './ProjectsList';

jest.mock('src/lib/hooks/states/project');

describe('ProjectsList', () => {
  
  test('should show list of projects', async () => {
    const mockUseProjects = jest.fn(() => ({ projects: mockProjects, loading: undefined }));
    useProjects.mockImplementation(mockUseProjects);

    // Act
    render(<ProjectsList />)
    const projectNames = screen.getAllByTestId('project-name')

    // Assert
    expect(projectNames).toHaveLength(mockProjects.length);
    projectNames.forEach((el, index) => {
      expect(el).toHaveTextContent(mockProjects[index].name);
    })
  })

  test('should show empty message', async () => {
    const mockUseProjects = jest.fn(() => ({ projects: [], loading: undefined }));
    useProjects.mockImplementation(mockUseProjects);

    // Act
    render(<ProjectsList />)
    const projectNames = screen.queryAllByTestId('project-name')
    const emptyMessage = screen.getByTestId('empty-message');

    // Assert
    expect(projectNames).toHaveLength(0);
    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('Нет проектов');
  })
})