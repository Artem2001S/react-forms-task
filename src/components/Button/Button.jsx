import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = ({ children, ...attrs }) => (
  <button className={classes.Button} {...attrs}>
    {children}
  </button>
);

Button.propTypes = { children: PropTypes.node };

export default React.memo(Button);
