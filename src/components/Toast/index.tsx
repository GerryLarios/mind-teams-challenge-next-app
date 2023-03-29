import { styled, Alert, AlertColor, Snackbar, Theme } from '@mui/material';
import Close from '@mui/icons-material/Close';
import Done from '@mui/icons-material/Done';
import PriorityHigh from '@mui/icons-material/PriorityHigh';

function getSeverityStyles(theme: Theme, severity?: AlertColor) {
  switch (severity) {
    case 'success':
      return {
        boxShadow: '0px 0px 62px rgba(230, 247, 244, 0.5)',
        borderColor: theme.palette.success[100],
      };
    case 'error':
      return {
        boxShadow: '0px 0px 62px rgba(250, 230, 232, 0.5)',
        borderColor: theme.palette.error[100],
      };
    case 'warning':
      return {
        boxShadow: '0px 0px 62px rgba(253, 248, 232, 0.5)',
        borderColor: theme.palette.warning[100],
      };
    default:
      return {};
  }
}

const StyledAlert = styled(Alert)(({ theme, severity }) => ({
  ...theme.typography.body1,
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
  border: '1px solid',
  borderRadius: '4px',
  padding: '4px 8px 4px 16px',
  '& .MuiAlert-icon': { marginRight: '4px' },
  '& .MuiAlert-message': {
    marginRight: '24px',
  },
  '& .MuiAlert-action': {
    width: 40,
    height: 40,
    margin: 0,
    padding: 0,
    '.MuiIconButton-root': {
      padding: 10,
      svg: {
        fill: theme.palette.secondary[600],
      },
      '&:hover svg': {
        fill: theme.palette.secondary[700],
      },
    },
  },
  ...getSeverityStyles(theme, severity),
}));

const CloseIcon = styled(Close)(({ theme }) => ({
  color: theme.palette.error[500],
  fontSize: 'small',
}));

const SuccessIcon = styled(Done)(({ theme }) => ({
  color: theme.palette.success[500],
  fontSize: 'small',
}));

const WarningIcon = styled(PriorityHigh)(({ theme }) => ({
  color: theme.palette.warning[500],
  fontSize: 'small',
}));

type ToastType = {
  children?: React.ReactNode;
  open: boolean;
  severity?: AlertColor;
  onClose?: () => void;
};

const Toast: React.FC<ToastType> = ({ children, onClose, open, severity = 'success' }) => (
  <Snackbar
    open={open}
    onClose={onClose}
    autoHideDuration={3000}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <StyledAlert
      onClose={onClose}
      variant="outlined"
      severity={severity}
      iconMapping={{
        error: <CloseIcon data-testid="close-icon" />,
        success: <SuccessIcon data-testid="success-icon" />,
        warning: <WarningIcon data-testid="warning-icon" />,
      }}
    >
      {children}
    </StyledAlert>
  </Snackbar>
);

export default Toast;
