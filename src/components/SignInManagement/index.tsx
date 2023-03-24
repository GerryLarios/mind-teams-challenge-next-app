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

type SignInFormProps = {
  isDisabled?: boolean;
  onSubmit: (data: AuthFormData) => void;
};

const SignInForm: React.FC<SignInFormProps> = ({ isDisabled, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      email: '',
    },
  });

  return (
    <RegisterCard onSubmit={handleSubmit(onSubmit)} data-testid="signup-form">
      <Title>Sign In to Mind Teams!</Title>
      <Subtitle>Please fill the following fields to enter to the app.</Subtitle>
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
            placeholder="user@email.io"
            id={id}
            aria-describedby={ariaDescribedBy}
            color="secondary"
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
      <ButtonsContainer>
        <RegisterButton colorVariant="primary" disabled={isDisabled} type="submit">
          Sign In
        </RegisterButton>
      </ButtonsContainer>
    </RegisterCard>
  );
};

export default SignInForm;
