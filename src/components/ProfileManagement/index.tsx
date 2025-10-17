import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import CodeIcon from '@mui/icons-material/Code';
import { ProfileView, UserInformationFormData, UserResult } from '@/types';
import ProfileSideMenu from '../ProfileSideMenu';
import EditUserInformationForm from '../EditUserInformationForm';
import EditUserPasswordForm from '../EditUserPasswordForm';
import EditUserProfileForm from '../EditUserProfileForm';

type ProfileManagementProps = {
  canChangePassword?: boolean;
  loading?: boolean;
  user?: UserResult;
  onEditPersonalInformation: (data: UserInformationFormData) => void;
  onEditProfessionalInformation: (data: any) => void;
};

const ProfileManagement: React.FC<ProfileManagementProps> = ({
  canChangePassword = false,
  loading,
  user,
  onEditPersonalInformation,
  onEditProfessionalInformation,
}) => {
  const [view, setView] = useState(ProfileView.EDIT_USER);

  if (!user) {
    return <></>;
  }

  return (
    <ProfileSideMenu
      items={[
        {
          icon: <PersonIcon />,
          label: 'Account management',
          value: ProfileView.EDIT_USER,
        },
        {
          icon: <CodeIcon />,
          label: 'Professional profile',
          value: ProfileView.EDIT_PROFILE,
        },
        ...(canChangePassword
          ? [
              {
                icon: <KeyIcon />,
                label: 'Login and security',
                value: ProfileView.EDIT_PASSWORD,
              },
            ]
          : []),
      ]}
      view={view}
      onViewChange={setView}
    >
      {(() => {
        switch (view) {
          case ProfileView.EDIT_PASSWORD:
            return <EditUserPasswordForm />;
          case ProfileView.EDIT_PROFILE:
            return (
              <EditUserProfileForm
                resume={user.profile?.resume ?? null}
                technologies={user?.profile?.technologies ?? null}
                lenguageLevel={user?.profile?.lenguageLevel ?? null}
              />
            );
          default:
            return (
              <EditUserInformationForm
                email={user.email}
                firstname={user.firstname}
                lastname={user.lastname}
                onSubmit={onEditPersonalInformation}
              />
            );
        }
      })()}
    </ProfileSideMenu>
  );
};

export default ProfileManagement;
