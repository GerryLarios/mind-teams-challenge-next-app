import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';

export const colors = {
  background: {
    white: '#FFFFFF',
    blue: '#FCFEFF',
  },
  black: {
    100: '#1B1B1B',
    90: '#333333',
    80: '#494949',
    70: '#52525B',
    60: '#767676',
    40: '#A4A4A4',
    30: '#FCFCFC',
    20: '#D1D1D1',
    10: '#E8E8E8',
  },
  blue: {
    100: '#245E94',
    80: '#507EA9',
    60: '#7C9EBF',
    40: '#A7BFD4',
    20: '#D3DFEA',
    10: '#E9EFF4',
  },
  green: {
    100: '#00B18F',
    50: '#66D0BC',
    20: '#CCEFE9',
    10: '#E6F7F4',
  },
  purple: {
    100: '#3D3E78',
    80: '#444791',
    60: '#5B5FC7',
    40: '#9299F7',
    20: '#E8EBFA',
    10: '#E8EBFA',
  },
  red: {
    100: '#D0021B',
    50: '#E36776',
    20: '#F6CCD1',
    10: '#FAE6E8',
  },
  snow: {
    100: '#E1F2FE',
    50: '#F0F9FF',
    20: '#F9FCFF',
    10: '#FCFEFF',
  },
  teal: {
    100: '#5098A4',
    20: '#DCEAED',
    10: '#EEF5F6',
  },
  yellow: {
    100: '#F3DE8A',
    20: '#FDF8E8',
    10: '#FEFCF3',
  },
};

const typography = {
  header: {
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: '0.006em',
    lineHeight: '36px',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: '0.006em',
    lineHeight: '32px',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: '0.006em',
    lineHeight: '28px',
  },
  lead: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '24px',
  },
  body: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: '-0.003em',
    lineHeight: '20px',
  },
  caption: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: '0.006em',
    lineHeight: '16px',
  },
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { fontFamily: 'Roboto' },
        'html, body, #__next': { height: '100%' },
        '#__next': {
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
        },
        ul: { listStyle: 'none', padding: 0 },
        'h1, h2, h3, h4, h5, h6, p': { margin: 0 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'default',
      },
    },
  },
  borders: {
    table: `1px solid ${colors.blue[20]}`,
  },
  palette: {
    background: {
      default: colors.background.blue,
      paper: colors.background.white,
    },
    common: {
      black: colors.black[100],
      disabled: colors.black[40],
      light: colors.background.blue,
      white: colors.background.white,
    },
    error: {
      main: colors.red[100],
      900: colors.red[100],
      500: colors.red[50],
      100: colors.red[20],
      50: colors.red[10],
    },
    success: {
      main: colors.green[100],
      900: colors.green[100],
      500: colors.green[50],
      100: colors.green[20],
      50: colors.green[10],
    },
    warning: {
      main: colors.yellow[100],
      900: colors.yellow[100],
      100: colors.yellow[20],
      50: colors.yellow[10],
    },
    grey: {
      900: colors.black[100],
      800: colors.black[90],
      700: colors.black[80],
      600: colors.black[70],
      500: colors.black[60],
      300: colors.black[40],
      200: colors.black[30],
      100: colors.black[20],
      50: colors.black[10],
    },
    primary: {
      main: colors.purple[100],
      900: colors.purple[100],
      700: colors.purple[80],
      500: colors.purple[60],
      300: colors.purple[40],
      100: colors.purple[20],
      50: colors.purple[10],
    },
    secondary: {
      main: colors.blue[80],
      900: colors.blue[100],
      800: colors.blue[80],
      700: colors.blue[60],
      600: colors.blue[40],
      400: colors.blue[20],
      300: colors.blue[10],
      200: colors.snow[100],
      100: colors.snow[50],
      50: colors.snow[20],
    },
    text: {
      primary: colors.black[80],
      secondary: colors.black[60],
      disabled: colors.black[40],
    },
  },
  mixins: {
    cardBorder: {
      border: `1px solid ${colors.snow[100]}`,
      borderRadius: '4px',
    },
    inputBorder: {
      border: `1px solid ${colors.blue[20]}`,
      borderRadius: '4px',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    body1: typography.body,
    header: typography.header,
    h1: typography.title,
    h2: typography.subtitle,
    h3: typography.lead,
    caption: typography.caption,
    subtitle1: typography.caption,
  },
  boxShadows: {
    card: '0px 6px 30px rgba(36, 94, 148, 0.08)',
  },
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
