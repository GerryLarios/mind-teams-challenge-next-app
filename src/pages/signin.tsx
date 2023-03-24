import { useAlertError, useProvider } from '@/hooks';
import MutedLayout from '@/layouts/MutedLayout';
import { signin } from '@/providers';
import { useRouter } from 'next/router';
import SignInForm from '@/components/SignInManagement';
import { setAuthToken } from '@/utils';

export default function SignUp() {
  const router = useRouter();
  const { showError } = useAlertError();

  const [runSignIn, { loading }] = useProvider(signin, {
    onComplete(data) {
      setAuthToken(data);
      router.push('/admin/users');
    },
    onError() {
      showError();
    },
  });

  return (
    <MutedLayout>
      <SignInForm isDisabled={loading} onSubmit={runSignIn} />
    </MutedLayout>
  );
}
