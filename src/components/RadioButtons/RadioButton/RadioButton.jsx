import React from 'react';
import PropTypes from 'prop-types';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';
import classes from './RadioButton.module.scss';
import Label from 'components/Label/Label';

const RadioButton = ({ id, value, checked, onChange }) => {
  const handleChange = useInputChangeHandler(onChange, id);

  return (
    <div className={classes.RadioButtonContainer}>
      <Label htmlFor={value} label={value}>
        <input
          className={classes.RadioButtonInput}
          id={value}
          name={id}
          type="radio"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <span className={classes.RadioButton} />
      </Label>
    </div>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(RadioButton);
