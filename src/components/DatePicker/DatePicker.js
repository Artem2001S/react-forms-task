import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './DatePicker.module.scss';

const DatePicker = ({ id, value, label, onChange, ...attrs }) => {
  const handleChange = useCallback(
    (e) => onChange(id, e.target.value),
    [id, onChange]
  );

  return (
    <div className={classes.DatePickerContainer}>
      <label htmlFor={id}>
        {label && <div className={classes.Label}>{label}</div>}
        <input
          className={classes.DatePicker}
          id={id}
          type="date"
          name={id}
          value={value}
          onChange={handleChange}
          {...attrs}
        />
      </label>
    </div>
  );
};

DatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(DatePicker);
