import useAlert from './useAlert';

export default function useSuccessAlert() {
  const { showAlert } = useAlert();

  return {
    showSuccess(message: string) {
      showAlert({ message, severity: 'success' });
    },
  };
}
