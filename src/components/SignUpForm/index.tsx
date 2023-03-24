import React from 'react';
import { styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { passwordValidations, REGULAR_EXPRESSION_EMAIL } from '@/utils';
import { AuthFormData } from '@/types';
import Button from '../Button';
import { Card, CardHeader, CardParagraph } from '../Card';
import Input from '../Input';
import InputGroup from '../InputGroup';
import InputPassword from '../InputPassword';
import InputPasswordHelp from '../InputPasswordHelp';

const Title = styled(CardHeader)({
  marginBottom: 4,
});

const Subtitle = styled(CardParagraph)({
  marginBottom: 16,
});

const StyledInputGroup = styled(InputGroup)({ marginBottom: 24 });

const StyledInputPasswordGroup = styled(InputGroup)({ marginBottom: 8 });

const ButtonsContainer = styled('div')({ marginTop: 32 });

const RegisterButton = styled(Button)({
  display: 'block',
  width: '100%',
});

const RegisterCard = styled(Card.withComponent('form'))({
  maxHeight: '680px',
  width: '100%',
});

type SignUpFormProps = {
  email: string;
  isDisabled?: boolean;
  onSubmit: (data: AuthFormData) => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ email, isDisabled, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      password: '',
      email,
    },
  });

  return (
    <RegisterCard onSubmit={handleSubmit(onSubmit)} data-testid="signup-form">
      <Title>Registration</Title>
      <Subtitle>Please fill the following fields to complete the registration process.</Subtitle>
      <StyledInputGroup
        label="Email"
        renderInput={({ id, ariaDescribedBy }) => (
          <Input
            {...register('email', {
              required: 'The email is required',
              pattern: {
                value: REGULAR_EXPRESSION_EMAIL,
                message: 'Please enter your email address in format: yourname@example.com.',
              },
            })}
            id={id}
            aria-describedby={ariaDescribedBy}
            color="secondary"
            disabled
          />
        )}
      />
      <StyledInputPasswordGroup
        label="Password"
        error={errors.password?.message}
        renderInput={({ id, ariaDescribedBy }) => (
          <InputPassword
            autoComplete="off"
            id={id}
            data-testid="input-password"
            aria-describedby={ariaDescribedBy}
            {...register('password', passwordValidations)}
          />
        )}
      />
      {!errors.password?.message && (
        <InputPasswordHelp dirty={dirtyFields.password} error={errors.password} />
      )}
      <ButtonsContainer>
        <RegisterButton colorVariant="primary" disabled={isDisabled} type="submit">
          Register
        </RegisterButton>
      </ButtonsContainer>
    </RegisterCard>
  );
};

export default SignUpForm;
