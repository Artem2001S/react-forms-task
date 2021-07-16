const testRegexp = (string, regexp) => regexp.test(string);

// source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegexp = /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

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
  });

  return errors;
};
