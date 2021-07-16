import React from 'react';
import PropTypes from 'prop-types';
import classes from './Title.module.scss';

const Title = ({ title }) => {
  return <div className={classes.Title}>{title}</div>;
};

Title.propTypes = { title: PropTypes.string.isRequired };

export default React.memo(Title);
