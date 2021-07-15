import React from 'react';
import PropTypes from 'prop-types';
import classes from './Label.module.scss';

const Label = ({ label, htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor}>
      <div className={classes.Label}>{label}</div>
      {children}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(Label);
