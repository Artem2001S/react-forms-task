import React from 'react';
import PropTypes from 'prop-types';
import classes from './CheckBox.module.scss';
import { useCallback } from 'react';

const CheckBox = ({ id, value, checked, onChange }) => {
  const handleChange = useCallback(
    (e) => onChange(id, e.target.value),
    [id, onChange]
  );

  return (
    <div className={classes.CheckboxContainer}>
      <label htmlFor={value}>
        {value && <div className={classes.Label}>{value}</div>}
        <input
          className={classes.CheckboxInput}
          id={value}
          name={id}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <span className={classes.Checkbox} />
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default React.memo(CheckBox);
