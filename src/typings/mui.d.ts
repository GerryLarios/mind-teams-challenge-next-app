import { Color } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    disabled: string;
    light: string;
  }

  interface Palette {
    green?: ColorPartial;
  }

  interface PaletteOptions {
    green?: ColorPartial;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    borders: Record<'table', string>;
    boxShadows: Record<'card', string>;
  }
}

declare module '@mui/material' {
  /* eslint-disable-next-line */
  interface PaletteColor extends Color {}
}

declare module '@mui/system/createTheme' {
  interface Theme {
    boxShadows: Record<'card', string>;
    borders?: Record<'table', string>;
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    cardBorder: CSSProperties;
    inputBorder: CSSProperties;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    header: TypographyStyleOptions;
  }

  interface Typography {
    header: TypographyStyle;
  }
}
