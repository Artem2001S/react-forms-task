import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './Select.module.scss';

const Select = ({ id, value, values, label, onChange, ...attrs }) => {
  const handleChange = useCallback(
    (e) => onChange(id, e.target.value),
    [id, onChange]
  );

  return (
    <div className={classes.SelectContainer}>
      <label htmlFor={id}>
        {label && <div className={classes.Label}>{label}</div>}
        <select
          id={id}
          className={classes.Select}
          name={id}
          value={value}
          onChange={handleChange}
        >
          {values.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(Select);
