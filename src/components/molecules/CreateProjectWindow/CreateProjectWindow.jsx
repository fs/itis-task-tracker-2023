import React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { Form as FormikForm, FormikProvider, useFormik } from "formik";

import Button from "src/components/atoms/Button";
import ModalWindow from "src/components/atoms/ModalWindow";

import { useCreateProject } from "src/lib/hooks/actions/createProject";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 8px;
  margin-bottom: 1rem;
`;

const ErrorWrapper = styled.div`
  color: #e18c8c;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const Input = styled.input`
  height: 2.5rem;
  border: 1px solid darkgrey;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
`;

const CreateProjectWindow = ({ isOpen, setIsOpen }) => {
  const onSubmit = () => {
    setIsOpen(!isOpen);
  };
  const [createProject] = useCreateProject({ onSubmit });

  const create = (values) => {
    console.log(values);
    createProject(values);
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Должно содержать больше 2 символов")
      .max(50, "Максимальная длина 50 символов")
      .required("Это обязательное поле"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: schema,
    onSubmit: create,
  });
  const { setFieldValue, values, errors } = formik;

  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormikProvider value={formik}>
        <FormikForm>
          <Wrapper>
            <StyledLabel htmlFor="name">
              Name
              <Input
                id="name"
                name="name"
                onChange={({ target: { value } }) => setFieldValue("name", value)}
                value={values.name}
                data-testid="input-project-name"
              />
              <ErrorWrapper> {errors.name} </ErrorWrapper>
            </StyledLabel>
            <StyledLabel htmlFor="description">
              Description
              <Input
                id="description"
                name="description"
                onChange={({ target: { value } }) => setFieldValue("description", value)}
                value={values.description}
                data-testid="input-project-description"
              />
            </StyledLabel>
          </Wrapper>
          <Button type="submit" label="Create" testId="create-project-button" />
        </FormikForm>
      </FormikProvider>
    </ModalWindow>
  );
};

export default CreateProjectWindow;
