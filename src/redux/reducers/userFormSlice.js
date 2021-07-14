import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputs: [
    { id: 'name', type: 'text', label: 'Name', value: '' },
    { id: 'phone', type: 'text', label: 'Phone number', value: '' },
    { id: 'email', type: 'text', label: 'Email', value: '' },
    {
      id: 'city',
      type: 'select',
      value: '',
      label: 'Choose city',
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
    { id: 'gender', type: 'radio', value: 'Male', values: ['Male', 'Female'] },
    { id: 'dateOfBirth', type: 'date', label: 'Date of birth', value: '' },
  ],
  errors: [],
};

const formReducer = createSlice({
  initialState,
  name: 'userForm',
  reducers: {
    some: (state) => {
      return state;
    },
  },
});

export default formReducer.reducer;
