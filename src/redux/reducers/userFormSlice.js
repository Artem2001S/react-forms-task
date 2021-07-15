import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  inputs: [
    {
      id: nanoid(),
      name: 'name',
      inputType: 'textField',
      label: 'Name',
      value: '',
      isRequired: true,
    },
    {
      id: nanoid(),
      name: 'phone',
      inputType: 'textField',
      label: 'Phone number',
      value: '',
      isRequired: true,
    },
    {
      id: nanoid(),
      name: 'email',
      inputType: 'textField',
      label: 'Email',
      value: '',
      isRequired: true,
    },
    {
      id: nanoid(),
      name: 'city',
      inputType: 'select',
      value: '',
      label: 'City',
      values: [
        'Moscow',
        'Tver',
        'Saint Petersburg',
        'Yekaterinburg',
        'Novosibirsk',
        'Rostov-on-Don',
        'Voronezh',
        'Another',
      ],
    },
    {
      id: nanoid(),
      name: 'dateOfBirth',
      inputType: 'date',
      label: 'Date of birth',
      value: '',
      isRequired: true,
    },
    {
      id: nanoid(),
      name: 'gender',
      label: 'Gender',
      inputType: 'radio',
      value: '',
      values: ['Male', 'Female'],
      isRequired: true,
    },
    {
      id: nanoid(),
      name: 'skills',
      inputType: 'checkbox',
      label: 'Select your skills',
      selectedValues: [],
      values: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Angular',
        'Vue',
        'Svelte',
      ],
    },
  ],
  errors: [],
};

const formReducer = createSlice({
  initialState,
  name: 'userForm',
  reducers: {
    inputValueChanged: (state, { payload }) => {
      const { inputId } = payload;
      const input = state.inputs.find((input) => input.id === inputId);

      if (input.inputType === 'checkbox') {
        if (input.selectedValues.includes(payload.value)) {
          input.selectedValues = input.selectedValues.filter(
            (value) => value !== payload.value
          );
        } else {
          input.selectedValues.push(payload.value);
        }
      } else {
        input.value = payload.value;
      }
    },
  },
});

export default formReducer.reducer;
export const { inputValueChanged } = formReducer.actions;
