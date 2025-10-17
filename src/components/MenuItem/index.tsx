import { styled, MenuItem as MuiMenuItem, Theme } from '@mui/material';

export type MenuItemColorVariant = 'red';

type GetVariantStylesParams = {
  theme: Theme;
  colorVariant?: MenuItemColorVariant;
};

function getVariantStyles({ theme, colorVariant }: GetVariantStylesParams) {
  if (colorVariant === 'red') {
    return {
      borderTop: `solid 1px ${theme.palette.secondary[50]}`,
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error[50],
        color: theme.palette.error.main,
        svg: {
          fill: theme.palette.error.main,
        },
      },
    };
  }

  return {
    color: theme.palette.secondary[800],
    '&:hover': {
      backgroundColor: theme.palette.secondary[100],
      color: theme.palette.secondary[900],
      svg: {
        color: theme.palette.secondary[900],
      },
    },
  };
}

type StyleProps = {
  colorVariant?: MenuItemColorVariant;
};

const paddingX = 16;
const paddingY = 6;

const MenuItem = styled(MuiMenuItem, {
  shouldForwardProp: (p) => p !== 'colorVariant',
})<StyleProps>(
  {
    paddingBottom: paddingY,
    paddingLeft: paddingX,
    paddingRight: paddingX,
    paddingTop: paddingY,
  },
  getVariantStyles,
);

export default Object.assign(MenuItem, {
  paddingX,
  paddingY,
});
