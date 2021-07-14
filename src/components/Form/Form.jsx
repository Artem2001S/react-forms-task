import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import DatePicker from 'components/DatePicker/DatePicker';
import classes from './Form.module.scss';

const Form = ({ title, inputs, onSubmit, onInputChanged }) => {
  return (
    <div className={classes.FormContainer}>
      <div className={classes.Title}>{title}</div>
      <form className={classes.Form} onSubmit={onSubmit}>
        {inputs.map((input) => {
          switch (input.inputType) {
            case 'textField':
              return (
                <Input
                  key={input.id}
                  id={input.id}
                  onChange={onInputChanged}
                  value={input.value}
                  label={input.label}
                />
              );
            case 'select':
              return (
                <Select
                  key={input.id}
                  id={input.id}
                  value={input.value}
                  values={input.values}
                  label={input.label}
                  onChange={onInputChanged}
                />
              );
            case 'date':
              return (
                <DatePicker
                  key={input.id}
                  id={input.id}
                  onChange={onInputChanged}
                  value={input.value}
                  label={input.label}
                />
              );
            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(Form);
