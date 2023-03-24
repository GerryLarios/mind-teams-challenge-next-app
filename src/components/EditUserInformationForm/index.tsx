import { useForm } from 'react-hook-form';
import { styled } from '@mui/material';
import { UserResult, UserInformationFormData } from '@/types';
import Form, { formClasses } from '../Form';
import TextInputGroup from '../TextInputGroup';
import { REGULAR_EXPRESSION_EMAIL } from '@/utils';

const StyledForm = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '508px',
  width: '100%',
  [`& .${formClasses.formFooter}`]: {
    marginTop: 'auto',
  },
  [`& .${formClasses.formWrapper}`]: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const marginBottom = '24px';

const EmailTextGroup = styled(TextInputGroup)({ marginBottom });

const StyledTextInputGroup = styled(TextInputGroup)({ flexBasis: '50%' });

const NameContainer = styled('div')(({ theme }) => ({
  columnGap: 24,
  display: 'flex',
  marginBottom,
  rowGap: marginBottom,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const Header = styled('h2')(({ theme }) => ({
  ...theme.typography.h2,
}));

const Subheader = styled('p')(({ theme }) => ({
  ...theme.typography.h3,
  margin: '4px 0 16px 0',
}));

type EditUserInformationForm = Pick<UserResult, 'email' | 'firstname' | 'lastname'> & {
  submitting?: boolean;
  onSubmit: (data: UserInformationFormData) => void;
};

const EditUserInformationForm: React.FC<EditUserInformationForm> = ({
  email,
  firstname,
  lastname,
  submitting,
  onSubmit,
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<UserInformationFormData>({
    defaultValues: {
      email,
      firstname: firstname ?? '',
      lastname: lastname ?? '',
    },
  });

  return (
    <StyledForm
      submitting={submitting}
      footerProps={{ labels: { submit: 'Update profile' } }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header>Profile</Header>
      <Subheader>Personal information</Subheader>
      <NameContainer>
        <StyledTextInputGroup
          label="First name"
          error={errors.firstname?.message}
          inputProps={{
            placeholder: 'First name',
            ...register('firstname', { required: 'The first name is required' }),
          }}
        />
        <StyledTextInputGroup
          label="Last name"
          error={errors?.lastname?.message}
          inputProps={{
            placeholder: 'Last name',
            ...register('lastname', { required: 'The last name required' }),
          }}
        />
      </NameContainer>
      <EmailTextGroup
        label="Email"
        error={errors?.email?.message}
        inputProps={{
          placeholder: 'Email',
          type: 'email',
          readOnly: true,
          ...register('email', {
            required: 'The email is required',
            pattern: {
              value: REGULAR_EXPRESSION_EMAIL,
              message: 'Please enter your email address in format: yourname@example.com.',
            },
          }),
        }}
      />
    </StyledForm>
  );
};

export default EditUserInformationForm;
