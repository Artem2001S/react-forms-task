import Form from 'components/Form/Form';
import React from 'react';
import { useSelector } from 'react-redux';

export const FormContainer = () => {
  const inputs = useSelector((state) => state.userForm.inputs);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      title="Enter user information"
      inputs={inputs}
      onSubmit={handleFormSubmit}
    />
  );
};
