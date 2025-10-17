import { IconButton, styled } from '@mui/material';
import Close from '@mui/icons-material/Close';
import GhostButton from '../GhostButton';

const ModalCloseButton = styled(IconButton)(
  ({ theme }) => ({
    display: 'block',
    color: theme.palette.secondary[400],
    height: 42,
    width: 42,
  }),
  GhostButton.hoverAndFocusStyles,
);

ModalCloseButton.defaultProps = {
  disableFocusRipple: true,
  children: <Close />,
};

export default ModalCloseButton;
