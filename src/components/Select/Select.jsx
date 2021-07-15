import React from 'react';
import PropTypes from 'prop-types';
import classes from './Select.module.scss';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';
import Label from 'components/Label/Label';

const Select = ({ id, value, values, label, onChange, ...attrs }) => {
  const handleChange = useInputChangeHandler(onChange, id);

  return (
    <div className={classes.SelectContainer}>
      <Label htmlFor={id} label={label}>
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
      </Label>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

export default React.memo(Select);
