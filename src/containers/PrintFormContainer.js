import React from 'react';
import PrintForm from 'components/PrintForm/PrintForm';
import { useSelector } from 'react-redux';

const PrintFormContainer = () => {
  const inputs = useSelector((state) => state.userForm.inputs);

  return <PrintForm inputs={inputs} />;
};

export default React.memo(PrintFormContainer);
