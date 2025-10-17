import { RegisterOptions } from 'react-hook-form';

export type PasswordValidations = Pick<RegisterOptions, 'required' | 'minLength' | 'validate'>;

const REGULAR_EXPRESSION_PASSWORD = /[\d!@#$%^&*_-]+/;

export const passwordValidations: PasswordValidations = {
  required:
    'Password must be at least 8 characters long and include at least one number or special character.',
  minLength: 8,
  validate: (v) => REGULAR_EXPRESSION_PASSWORD.test(v),
};
