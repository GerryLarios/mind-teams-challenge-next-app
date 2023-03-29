import { AuthFormData } from '@/types';
import { styled } from '@mui/material';
import Link from 'next/link';
import { Card } from '../Card';
import SignUpForm from '../SignUpForm';

const Paragraph = styled('p')(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.secondary[800],
  fontWeight: 500,
  margin: '4px 0 0 32px',
}));

const Title = styled('p')(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.secondary[900],
}));

const SuccessCardHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

type SignUpManagementProps = {
  countdown?: null | number;
  email?: string;
  loading: boolean;
  onSignUp: (data: AuthFormData) => void;
};

const SignUpManagement: React.FC<SignUpManagementProps> = ({
  countdown,
  email,
  loading,
  onSignUp,
}) => (
  <>
    {countdown == null ? (
      <>{email && <SignUpForm email={email} isDisabled={loading} onSubmit={onSignUp} />}</>
    ) : (
      <Card>
        <SuccessCardHeader>
          <Title>Registration successful</Title>
        </SuccessCardHeader>
        <Paragraph>
          You will be sent to the sign in page in {countdown} seconds. If you are not automatically
          redirected,{' '}
          <Link href="/signin" target="_self">
            click here
          </Link>
        </Paragraph>
      </Card>
    )}
  </>
);

export default SignUpManagement;
