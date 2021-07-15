import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton/RadioButton';
import classes from './RadioButtons.module.scss';

const RadioButtons = ({ id, label, values, value, onChange }) => (
  <div className={classes.RadioButtonsContainer}>
    {label && <div className={classes.Label}>{label}</div>}
    <div className={classes.RadioButtons}>
      {values.map((radio) => (
        <RadioButton
          key={id.concat(radio)}
          id={id}
          value={radio}
          checked={radio === value}
          onChange={onChange}
        />
      ))}
    </div>
  </div>
);

RadioButtons.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  values: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(RadioButtons);
