import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import classes from './PrintForm.module.scss';
import PrintValue from './PrintValue/PrintValue';

const PrintForm = ({ inputs }) => (
  <div className={classes.PrintForm}>
    <Title title="User information" />
    {inputs.map(({ label, value, selectedValues }, index) => (
      <PrintValue
        key={index}
        value={value}
        label={label}
        selectedValues={selectedValues}
      />
    ))}
  </div>
);

PrintForm.propTypes = { inputs: PropTypes.array };

export default React.memo(PrintForm);
