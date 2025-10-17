import { styled, Button, CSSObject, Theme, alpha } from '@mui/material';

export type ButtonVariant =
  | 'primary'
  | 'primary-alt'
  | 'secondary'
  | 'tertiary'
  | 'destructive'
  | 'danger';

export type ButtonProps = {
  colorVariant?: ButtonVariant;
};

type ButtonVariantStyle = Partial<CSSObject & Record<'disabled' | 'hover', CSSObject>>;

function getVariantStyles(theme: Theme, variant?: ButtonVariant): ButtonVariantStyle {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.palette.primary[700],
        borderWidth: '1px',
        color: theme.palette.common.white,
        disabled: {
          backgroundColor: theme.palette.primary[300],
          color: theme.palette.primary[50],
        },
        hover: {
          backgroundColor: theme.palette.primary[900],
        },
      };
    case 'primary-alt':
      return {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.primary[700],
        borderWidth: '1px',
        color: theme.palette.primary[700],
        disabled: {
          borderColor: theme.palette.primary[300],
          color: theme.palette.primary[300],
        },
        hover: {
          backgroundColor: theme.palette.primary[900],
          borderColor: theme.palette.primary[900],
          color: theme.palette.common.white,
        },
      };

    case 'secondary':
      return {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.grey[700],
        borderWidth: '1px',
        color: theme.palette.secondary[700],
        disabled: {
          borderColor: theme.palette.grey[300],
          color: theme.palette.secondary[300],
        },
        hover: {
          backgroundColor: theme.palette.primary[900],
          borderColor: theme.palette.primary[900],
          color: theme.palette.common.white,
        },
      };
    case 'tertiary':
      return {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.secondary[400],
        borderWidth: '1px',
        color: theme.palette.secondary[700],
        disabled: {
          borderColor: theme.palette.secondary[300],
          color: theme.palette.secondary[600],
        },
        hover: {
          backgroundColor: theme.palette.secondary[400],
          borderColor: theme.palette.secondary[400],
          color: theme.palette.secondary[900],
        },
      };
    case 'destructive':
      return {
        backgroundColor: 'transparent',
        borderColor: theme.palette.error[50],
        borderWidth: '1px',
        color: theme.palette.error.main,
        disabled: {
          backgroundColor: theme.palette.common.white,
          color: alpha(theme.palette.primary.main, 0.5),
        },
        hover: {
          backgroundColor: theme.palette.error.main,
          borderColor: theme.palette.error.main,
          color: theme.palette.common.white,
        },
      };
    case 'danger':
      return {
        backgroundColor: '#D51B32',
        borderWidth: '1px',
        color: theme.palette.common.white,
        hover: {
          backgroundColor: theme.palette.error[900],
        },
      };
    default:
      return {};
  }
}

export default styled(Button, { shouldForwardProp: (p) => p !== 'colorVariant' })<ButtonProps>(
  ({ disabled, theme, colorVariant }) => {
    const {
      disabled: disabledStyles,
      hover = undefined,
      ...base
    } = getVariantStyles(theme, colorVariant);

    return {
      ...theme.typography.body1,
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: 0,
      cursor: 'pointer',
      height: '44px',
      padding: '0 16px',
      ...base,
      ':focus': {
        outlineColor: 'gray',
      },
      ':disabled': {
        ...disabledStyles,
        cursor: 'not-allowed',
        pointerEvents: 'initial',
      },
      ':hover': disabled
        ? // Overwrite default MUI disable+hover backgroundColor
          { backgroundColor: disabledStyles?.backgroundColor ?? base?.backgroundColor }
        : hover,
    };
  },
);
