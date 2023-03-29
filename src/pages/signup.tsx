import { useCallback, useMemo, useState } from 'react';
import SignUpManagement from '@/components/SignUpManagement';
import { useAlertError, useProvider } from '@/hooks';
import MutedLayout from '@/layouts/MutedLayout';
import { signup } from '@/providers';
import { useRouter } from 'next/router';

const redirectToSignInInitialCountdown = 10;
const oneSecondInMilliseconds = 1000;

export default function SignUp() {
  const { showError } = useAlertError();
  const [countdown, setCountdown] = useState<number>();

  const router = useRouter();
  const email = useMemo(() => router.query.email as string, [router.query?.email]);

  const startCountdown = useCallback(() => {
    setCountdown(redirectToSignInInitialCountdown);

    const interval = setInterval(() => {
      setCountdown((oldCountdown) => {
        const newCountdown = (oldCountdown as number) - 1;

        if (newCountdown <= 0) {
          clearInterval(interval);
        }

        return newCountdown;
      });
    }, oneSecondInMilliseconds);
  }, []);

  const [runSignUp, { loading }] = useProvider(signup, {
    onComplete: startCountdown,
    onError: () => showError(),
  });

  return (
    <MutedLayout>
      <SignUpManagement
        countdown={countdown}
        email={email}
        loading={loading}
        onSignUp={runSignUp}
      />
    </MutedLayout>
  );
}
