import React from 'react';
import PropTypes from 'prop-types';
import classes from './DatePicker.module.scss';

const DatePicker = ({ id, value, label, ...attrs }) => (
  <div className={classes.DatePickerContainer}>
    <label htmlFor={id}>
      {label && <div className={classes.Label}>{label}</div>}
      <input
        className={classes.DatePicker}
        id={id}
        type="date"
        name={id}
        value={value}
        {...attrs}
      />
    </label>
  </div>
);

DatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default React.memo(DatePicker);
