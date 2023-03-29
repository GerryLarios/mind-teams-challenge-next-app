import IndependentPageLayout from '@/layouts/IndependentPageLayout';
import ProfileManagement from '@/components/ProfileManagement';
import { useAlertError, useAlertSuccess, useAuthenticatedUser, useProvider } from '@/hooks';
import { UserInformationFormData } from '@/types';
import { updateUsers } from '@/providers';

export default function Profile() {
  const user = useAuthenticatedUser();
  const userId = user?.id as string;
  const { showError } = useAlertError();
  const { showSuccess } = useAlertSuccess();

  const [runEditUserInformation, { loading: editingUserInformation }] = useProvider(
    (data: UserInformationFormData) => updateUsers(userId, data),
    {
      onComplete: () => showSuccess('Personal information edited successfuly'),
      onError: () => showError(),
    },
  );

  return (
    <IndependentPageLayout>
      <ProfileManagement
        canChangePassword
        loading={editingUserInformation}
        user={user}
        onEditPersonalInformation={runEditUserInformation}
        onEditProfessionalInformation={(data: any) => {
          throw new Error('Function not implemented.');
        }}
      />
    </IndependentPageLayout>
  );
}
