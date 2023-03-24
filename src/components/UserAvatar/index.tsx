import { Avatar, styled } from '@mui/material';
import { UserDisplay } from '@/types';
import { getAvatarName, getUserDisplayName } from '@/utils';

const StyledAvatar = styled(Avatar, { shouldForwardProp: (p) => p !== 'size' })(({ theme }) => ({
  ...theme.typography.caption,
  backgroundColor: theme.palette.secondary[200],
  color: theme.palette.secondary[800],
  fontSize: '12px',
  height: 32,
  letterSpacing: '-0.01em',
  padding: 0,
  width: 32,
}));

type UserAvatarProps = {
  className?: string;
  user: UserDisplay;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ className, user }) => (
  <StyledAvatar alt={getUserDisplayName(user)} className={className}>
    {getAvatarName(user)}
  </StyledAvatar>
);

export default UserAvatar;
