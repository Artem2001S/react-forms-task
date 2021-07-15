import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import RadioButtons from 'components/RadioButtons/RadioButtons';
import Checkboxes from 'components/Checkboxes/Checkboxes';
import classes from './Form.module.scss';
import DatePicker from 'components/DatePicker/DatePicker';
import Button from 'components/Button/Button';
import Errors from 'components/Errors/Errors';

const Form = ({ title, inputs, errors, onSubmit, onInputChange }) => (
  <div className={classes.FormContainer}>
    <div className={classes.Title}>{title}</div>
    {errors.length > 0 && <Errors errors={errors} />}
    <form className={classes.Form} onSubmit={onSubmit}>
      {inputs.map(({ inputType, validationData, ...inputData }) => {
        switch (inputType) {
          case 'textField':
            return (
              <Input
                key={inputData.id}
                {...inputData}
                onChange={onInputChange}
              />
            );
          case 'select':
            return (
              <Select
                key={inputData.id}
                {...inputData}
                onChange={onInputChange}
              />
            );
          case 'date':
            return (
              <DatePicker
                key={inputData.id}
                {...inputData}
                onChange={onInputChange}
              />
            );
          case 'radio':
            return (
              <RadioButtons
                key={inputData.id}
                {...inputData}
                onChange={onInputChange}
              />
            );
          case 'checkbox':
            return (
              <Checkboxes
                key={inputData.id}
                {...inputData}
                onChange={onInputChange}
              />
            );
          default:
            return null;
        }
      })}
      <Button>Print</Button>
    </form>
  </div>
);

Form.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.array,
  errors: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default React.memo(Form);
