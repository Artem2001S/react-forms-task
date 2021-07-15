import React from 'react';
import PropTypes from 'prop-types';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';
import Label from 'components/Label/Label';
import classes from './DatePicker.module.scss';

const DatePicker = ({ id, value, name, label, onChange }) => {
  const handleChange = useInputChangeHandler(onChange, id);

  return (
    <div className={classes.DatePickerContainer}>
      <Label htmlFor={id} label={label}>
        <input
          className={classes.DatePicker}
          id={id}
          type="date"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Label>
    </div>
  );
};

DatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(DatePicker);
