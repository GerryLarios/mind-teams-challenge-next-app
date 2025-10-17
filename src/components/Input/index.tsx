import { OutlinedInput, outlinedInputClasses, styled } from '@mui/material';

export default styled(OutlinedInput)(({ theme }) => ({
  ...theme.typography.body1,
  backgroundColor: '#FCFEFF',
  boxSizing: 'border-box',
  height: '44px',
  width: '100%',
  borderColor: 'blue',
  '&.Mui-focused': {
    backgroundColor: theme.palette.common.white,
    [`& .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.secondary[600],
      borderWidth: '1px',
    },
    '&:read-only': {
      backgroundColor: '#FCFEFF',
    },
  },
  [`&:hover > .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: theme.palette.secondary[600],
  },
  [`& > .${outlinedInputClasses.input}`]: {
    height: '100%',
    padding: '0 16px',
    '&::placeholder': {
      color: theme.palette.secondary[700],
    },

    [`&.${outlinedInputClasses.disabled}`]: {
      cursor: 'not-allowed',
    },
    '&:read-only': {
      color: theme.palette.secondary[600],
      [`& + .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.palette.secondary[50],
      },
    },
  },
  [`& > .${outlinedInputClasses.notchedOutline}`]: theme.mixins.inputBorder,
}));
