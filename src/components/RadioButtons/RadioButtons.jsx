import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton/RadioButton';
import classes from './RadioButtons.module.scss';

const RadioButtons = ({ id, label, values, value, onChange }) => {
  const handleChange = useCallback(
    (e) => onChange(id, e.target.value),
    [id, onChange]
  );

  return (
    <div className={classes.RadioButtonsContainer}>
      {label && <div className={classes.Label}>{label}</div>}
      <div className={classes.RadioButtons}>
        {values.map((radio) => (
          <RadioButton
            key={radio}
            id={id}
            value={radio}
            checked={radio === value}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

RadioButtons.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  values: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(RadioButtons);
