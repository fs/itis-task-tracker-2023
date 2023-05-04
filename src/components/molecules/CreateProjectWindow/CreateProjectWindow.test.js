import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useCreateProject } from "src/lib/hooks/actions/createProject";

import CreateProjectWindow from "./CreateProjectWindow";

jest.mock("src/lib/hooks/actions/createProject");

describe("CreateProjectWindow", () => {
  const mockCreateProject = jest.fn();
  const mockUseCreateProject = jest.fn(() => [mockCreateProject]);
  useCreateProject.mockImplementation(mockUseCreateProject);

  test("should call createProject on submit", async () => {
    // Arrange
    const expectedValue = {
      name: "project-name",
      description: "project-description",
    };

    // Act
    const user = userEvent.setup();
    render(<CreateProjectWindow isOpen setIsOpen={jest.fn()} />);

    const projectNameField = screen.getByTestId("input-project-name");
    await user.type(projectNameField, expectedValue.name);

    const projectDescriptionField = screen.getByTestId("input-project-description");
    await user.type(projectDescriptionField, expectedValue.description);

    const createProjectButton = screen.getByTestId("create-project-button");
    await user.click(createProjectButton);

    // Assert
    expect(mockCreateProject).toHaveBeenCalledWith(expectedValue);
  });
});
