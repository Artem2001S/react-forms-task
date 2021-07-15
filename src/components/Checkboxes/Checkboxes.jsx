import React from 'react';
import PropTypes from 'prop-types';
import classes from './Checkboxes.module.scss';
import CheckBox from './CheckBox/CheckBox';

const Checkboxes = ({ id, label, values, selectedValues, onChange }) => (
  <div className={classes.CheckBoxesContainer}>
    {label && <div className={classes.Label}>{label}</div>}
    <div className={classes.Checkboxes}>
      {values.map((checkbox) => (
        <CheckBox
          key={checkbox}
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
