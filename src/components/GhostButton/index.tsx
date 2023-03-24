import { ButtonBase, CSSObject, styled, Theme } from '@mui/material';

const hoverAndFocusStyles = ({ theme }: { theme: Theme }): CSSObject => ({
  '&:focus': {
    backgroundColor: theme.palette.grey[50],
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary[100],
  },
});

const GhostButton = styled(ButtonBase)(
  ({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.secondary[900],
    fontWeight: 600,
    borderRadius: 4,
    width: 'initial !important',
  }),
  hoverAndFocusStyles,
);

export default Object.assign(GhostButton, { hoverAndFocusStyles });
