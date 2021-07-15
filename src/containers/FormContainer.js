import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValueChanged, getErrors } from 'redux/reducers/userFormSlice';
import { validateInputs } from 'utils/formValidation';
import Form from 'components/Form/Form';

export const FormContainer = () => {
  const inputs = useSelector((state) => state.userForm.inputs);
  const errors = useSelector((state) => state.userForm.errors);
  const dispatch = useDispatch();

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getErrors({ errors: validateInputs(inputs) }));
    },
    [dispatch, inputs]
  );

  const inputChangedHandler = useCallback(
    (id, value) => {
      dispatch(inputValueChanged({ inputId: id, value }));
    },
    [dispatch]
  );

  return (
    <Form
      title="Enter user information"
      inputs={inputs}
      errors={errors}
      onSubmit={handleFormSubmit}
      onInputChange={inputChangedHandler}
    />
  );
};
