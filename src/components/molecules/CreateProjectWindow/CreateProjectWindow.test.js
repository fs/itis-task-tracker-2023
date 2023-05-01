import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { useCreateProject } from "src/lib/hooks/actions/createProject";

import CreateProjectWindow from "./CreateProjectWindow";

jest.mock("src/lib/hooks/actions/createProject");

describe("CreateProjectWindow", () => {
  const mockCreateProject = jest.fn();
  const mockUseCreateProject = jest.fn(() => [mockCreateProject])
  useCreateProject.mockImplementation(mockUseCreateProject);

  test("should call createProject on submit", async () => {
    // Arrange
    const expectedValue = {
      name: "project-name",
      description: "project-description",
    };

    // Act
    render(<CreateProjectWindow isOpen setIsOpen={jest.fn()} />);

    const projectNameField = screen.getByTestId("input-project-name");
    fireEvent.change(projectNameField, { target: { value: expectedValue.name } });

    const projectDescriptionField = screen.getByTestId("input-project-description");
    fireEvent.change(projectDescriptionField, { target: { value: expectedValue.description } });

    const createProjectButton = screen.getByTestId("create-project-button");
    fireEvent.click(createProjectButton);

    // Assert
    expect(mockCreateProject).toHaveBeenCalledWith("asd");
  });
});
