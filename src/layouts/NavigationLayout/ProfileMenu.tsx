import { useState } from 'react';
import { styled } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import LogoutIcon from '@mui/icons-material/Logout';
import ContextMenu from '@/components/ContextMenu';
import GhostButton from '@/components/GhostButton';
import PersonIcon from '@mui/icons-material/Person';
import UserAvatar from '@/components/UserAvatar';
import { getUserDisplayName } from '@/utils';
import { AuthenticatedUser } from '@/types';

const ArrowDown = styled(KeyboardArrowDown)(({ theme }) => ({
  color: theme.palette.secondary[600],
}));

const ArrowUp = styled(KeyboardArrowUp)(({ theme }) => ({
  color: theme.palette.secondary[600],
}));

const ProfileButton = styled(GhostButton)({
  paddingLeft: 6,
});

const UserInfoContainer = styled('div')({
  marginRight: 16,
});

const Username = styled('div')({
  textAlign: 'right',
});

const RoleText = styled('p')(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.secondary[800],
  textAlign: 'right',
}));

export type ProfileMenuProps = {
  className?: string;
  user: AuthenticatedUser;
  onSignOut: () => void;
};

const StyledContextMenuOption = styled(ContextMenu.Option)({
  minWidth: '180px',
  ['&:last-child']: {
    borderBottom: 'none',
  },
});

const StyledContextMenuOptionLink = StyledContextMenuOption.withComponent(ContextMenu.OptionLink);

const ProfileMenu: React.FC<ProfileMenuProps> = ({ className, user, onSignOut }) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const username = getUserDisplayName(user);
  const isOpen = anchorElement != null;

  return (
    <>
      <ContextMenu
        anchorElement={anchorElement}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isOpen}
        onClose={() => setAnchorElement(null)}
      >
        <StyledContextMenuOptionLink icon={<PersonIcon />} label="My profile" href="/profile" />
        <StyledContextMenuOption
          colorVariant="red"
          icon={<LogoutIcon />}
          label="Log out"
          onClick={onSignOut}
        />
      </ContextMenu>
      <ProfileButton
        aria-label="Open profile menu"
        className={className}
        data-testid="profile-menu-button"
        onClick={(e) => setAnchorElement(e.currentTarget)}
      >
        <UserInfoContainer>
          <Username>{username}</Username>
          {(user.isAdmin || user.isSuperAdmin) && <RoleText>Admin</RoleText>}
        </UserInfoContainer>
        <UserAvatar user={user} />
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </ProfileButton>
    </>
  );
};

export default ProfileMenu;
