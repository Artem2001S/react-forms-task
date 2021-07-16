const testRegexp = (string, regexp) => regexp.test(string);

// source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegexp = /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

//https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd
const dateRegexp = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;

export const validateInputs = (inputs) => {
  const errors = [];

  inputs.forEach(({ id, value, label, validationData }) => {
    if (!validationData) return;

    if (validationData.isRequired && !value) {
      errors.push(`Fill data in the '${label}' field.`);
      return;
    }

    if (validationData.isEmail) {
      const isEmailCorrect = testRegexp(value, emailRegexp);
      !isEmailCorrect &&
        errors.push(
          'Invalid email. Example of the mail format: mail@gmail.com'
        );
      return;
    }

    if (validationData.isPhone) {
      const isPhoneCorrect = testRegexp(value, phoneRegexp);
      !isPhoneCorrect &&
        errors.push(
          'Invalid phone number. Example of the phone number format: 89103123167, +7-910-221-22-22,+7(910)-221-22-22 etc.'
        );
      return;
    }

    if (validationData.isDate) {
      const isDateCorrect = testRegexp(value, dateRegexp);

      !isDateCorrect &&
        errors.push('Invalid date. Example of the date format: YYYY-MM-DD');
      return;
    }
  });

  return errors;
};
