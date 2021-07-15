import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const Input = ({ id, value, label, name, onChange, ...attrs }) => {
  const handleChange = useCallback(
    (e) => onChange(id, e.target.value),
    [id, onChange]
  );

  return (
    <div className={classes.InputContainer}>
      <label htmlFor={id}>
        {label && <div className={classes.Label}>{label}</div>}
        <input
          className={classes.Input}
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          {...attrs}
        />
      </label>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(Input);
