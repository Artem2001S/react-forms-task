import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './Checkbox/Checkbox';
import classes from './Checkboxes.module.scss';

const Checkboxes = ({ id, label, values, selectedValues, onChange }) => (
  <div className={classes.CheckBoxesContainer}>
    {label && <div className={classes.Label}>{label}</div>}
    <div className={classes.Checkboxes}>
      {values.map((checkbox) => (
        <CheckBox
          key={id.concat(checkbox)}
          id={id}
          value={checkbox}
          checked={selectedValues.includes(checkbox)}
          onChange={onChange}
        />
      ))}
    </div>
  </div>
);

Checkboxes.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

export default React.memo(Checkboxes);
