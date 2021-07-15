import { useCallback } from 'react';

export const useInputChangeHandler = (onChange, inputId) =>
  useCallback((e) => onChange(inputId, e.target.value), [onChange, inputId]);
