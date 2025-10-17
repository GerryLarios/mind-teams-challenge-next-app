import { useState, forwardRef, ForwardedRef } from 'react';
import { styled, InputAdornment, IconButton, InputProps } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '../Input';

const EyeOpenIcon = styled(VisibilityIcon)(({ theme }) => ({
  color: theme.palette.secondary[900],
  fontSize: 'medium',
}));

const EyeCloseIcon = styled(VisibilityOffIcon)(({ theme }) => ({
  color: theme.palette.secondary[900],
  fontSize: 'medium',
}));

const StyledInput = styled(Input)(({ theme }) => ({
  ...theme.typography.body1,
  borderRadius: '2px',
  boxSizing: 'border-box',
  width: '100%',
  '::placeholder': {
    color: theme.palette.grey[300],
  },
  ':disabled': {
    cursor: 'not-allowed',
  },
}));

const InputPassword = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <StyledInput
      ref={ref}
      {...props}
      classes={{ focused: '' }}
      type={showPassword ? 'text' : 'password'}
      color="secondary"
      placeholder="Password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={toggleShowPassword}
            aria-label={showPassword ? 'Show password' : 'Hide password'}
            data-testid="input-password-toggle"
          >
            {showPassword ? (
              <EyeOpenIcon data-testid="visibility-off" />
            ) : (
              <EyeCloseIcon data-testid="visibility-on" />
            )}
          </IconButton>
        </InputAdornment>
      }
    />
  );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;
