import React from 'react';
import PropTypes from 'prop-types';
import { useInputChangeHandler } from 'hooks/useInputChangeHandler';
import classes from './Input.module.scss';
import Label from 'components/Label/Label';

const Input = ({ id, value, label, name, onChange, ...attrs }) => {
  const handleChange = useInputChangeHandler(onChange, id);

  return (
    <div className={classes.InputContainer}>
      <Label htmlFor={id} label={label}>
        <input
          className={classes.Input}
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          {...attrs}
        />
      </Label>
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
