import React from 'react';
import PropTypes from 'prop-types';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';
import Label from 'components/Label/Label';
import classes from './CheckBox.module.scss';

const CheckBox = ({ id, value, checked, onChange }) => {
  const handleChange = useInputChangeHandler(onChange, id);

  return (
    <div className={classes.CheckboxContainer}>
      <Label htmlFor={value} label={value}>
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
      </Label>
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
