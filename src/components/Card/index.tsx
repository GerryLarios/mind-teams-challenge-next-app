import { styled, CSSObject } from '@mui/material';

export type CardSize = 'sm' | 'md' | 'lg';

export type CardProps = {
  size?: CardSize;
};

function getCardSize(variant?: CardSize): CSSObject {
  const variants = {
    sm: { maxWidth: '420px' },
    md: { maxWidth: '576px' },
    lg: { maxWidth: '768px' },
  };

  return variant ? variants[variant] : {};
}

export const Card = styled('div', { shouldForwardProp: (p) => p !== 'size' })<CardProps>(
  ({ size, theme }) => ({
    ...getCardSize(size),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: theme.boxShadows.card,
    boxSizing: 'border-box',
    padding: '24px',
  }),
);

export const CardContent = styled('div')({ margin: 16 });

export const CardHeader = styled('h1')(({ theme }) => theme.typography.h2);

export const CardImage = styled('img')({ marginBottom: 16, height: 40, width: 40 });

export const CardItem = styled('li')(({ theme }) => ({
  ...theme.mixins.cardBorder,
  height: '100%',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.boxShadows.card,
  },
}));

export const CardList = styled('ul')(({ theme }) => ({
  columnGap: '30px',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridTemplateRows: 'max-content',
  height: 'max-content',
  margin: '24px 0 0',
  minHeight: '300px',
  rowGap: '30px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const CardParagraph = styled('p')(({ theme }) => theme.typography.body1);
