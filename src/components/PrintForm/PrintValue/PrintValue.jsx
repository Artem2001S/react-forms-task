import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/Label/Label';
import classes from './PrintValue.module.scss';

const PrintValue = ({ value, label, selectedValues }) => (
  <div className={classes.Value}>
    <Label label={label}>
      <strong>{value || selectedValues?.join(', ') || 'No value'}</strong>
    </Label>
  </div>
);

PrintValue.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(PrintValue);
