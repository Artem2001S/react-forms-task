import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValueChanged } from 'redux/reducers/userFormSlice';
import Form from 'components/Form/Form';

export const FormContainer = () => {
  const inputs = useSelector((state) => state.userForm.inputs);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const inputChangedHandler = (e) => {
    dispatch(
      inputValueChanged({ inputId: e.target.name, value: e.target.value })
    );
  };

  return (
    <Form
      title="Enter user information"
      inputs={inputs}
      onSubmit={handleFormSubmit}
      onInputChanged={inputChangedHandler}
    />
  );
};
