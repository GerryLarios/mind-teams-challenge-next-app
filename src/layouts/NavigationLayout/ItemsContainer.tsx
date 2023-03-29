import { CSSObject, styled, Theme } from '@mui/material';

const openedMixin = (theme: Theme): CSSObject => ({
  width: '205px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const Container = styled('div', { shouldForwardProp: (p) => p !== 'isOpen' })<{
  isOpen?: boolean;
}>(({ theme, isOpen = true }) => ({
  width: '48px',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  padding: '16px 0',
  overflowX: 'hidden',
  ...(isOpen ? openedMixin : closedMixin)(theme),
}));

export type ItemsContainerProps = {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
};

export const ItemsContainer: React.FC<ItemsContainerProps> = ({ children, className, isOpen }) => (
  <Container className={className} isOpen={isOpen}>
    {children}
  </Container>
);

export default ItemsContainer;
