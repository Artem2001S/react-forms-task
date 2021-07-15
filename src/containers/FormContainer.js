import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValueChanged } from 'redux/reducers/userFormSlice';
import Form from 'components/Form/Form';

export const FormContainer = () => {
  const inputs = useSelector((state) => state.userForm.inputs);
  const dispatch = useDispatch();

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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
      onSubmit={handleFormSubmit}
      onInputChange={inputChangedHandler}
    />
  );
};
