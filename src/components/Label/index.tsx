import { styled } from '@mui/material';

export default styled('label')(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.secondary[500],
  display: 'block',
}));
