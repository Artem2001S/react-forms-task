import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const Input = ({ id, value, label, ...attrs }) => (
  <div className={classes.InputContainer}>
    <label htmlFor={id}>
      {label && <div className={classes.Label}>{label}</div>}
      <input
        className={classes.Input}
        id={id}
        type="text"
        name={id}
        value={value}
        {...attrs}
      />
    </label>
  </div>
);

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default React.memo(Input);
