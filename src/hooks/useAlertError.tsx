import { ErrorMessages, FriendlyError } from '@/utils';
import useAlert from './useAlert';

export default function useAlertError() {
  const { showAlert } = useAlert();

  return {
    showError(error?: string | FriendlyError | Error) {
      showAlert({
        message: (() => {
          if (typeof error === 'string') {
            return error;
          }

          return (
            (error instanceof FriendlyError &&
              // @ts-expect-error error message
              ErrorMessages[error.code]) ||
            ErrorMessages.DEFAULT
          );
        })(),
        severity: 'error',
      });
    },
  };
}
