import { styled } from '@mui/material';
import { ProfileView } from '@/types';
import SideMenu, { SideMenuItem } from '@/components/SideMenu';
import { useCallback } from 'react';

const Body = styled('div')(({ theme }) => ({
  alignItems: 'flex-start',
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

const StyledSideMenu = styled(SideMenu)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    maxWidth: '508px',
    width: '100%',
  },
}));

type ProfileSideMenuProps = {
  children?: React.ReactNode;
  items: SideMenuItem<ProfileView>[];
  view: ProfileView;
  onViewChange?: (v: ProfileView) => void;
};

const ProfileSideMenu: React.FC<ProfileSideMenuProps> = ({
  children,
  items,
  view,
  onViewChange,
}) => {
  const changeView = useCallback((v: string) => onViewChange?.(v as ProfileView), [onViewChange]);

  return (
    <Body>
      <StyledSideMenu items={items} responsive value={view} onChange={changeView} />
      {children}
    </Body>
  );
};

export default ProfileSideMenu;
