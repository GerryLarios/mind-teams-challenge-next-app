import { forwardRef, PropsWithChildren } from 'react';
import { Backdrop, Box, CircularProgress, styled } from '@mui/material';

type SpinnerWrapperProps = {
  className?: string;
  focusable?: boolean;
  showSpinner?: boolean;
  showOverlay?: boolean;
};

const Root = styled(Box)({ position: 'relative' });

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  zIndex: theme.zIndex.drawer,
}));

const spinnerSize = '40px';
const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary[900],
  position: 'absolute',
  left: `calc(50% - ${spinnerSize} / 2)`,
  top: `calc(50% - ${spinnerSize} / 2)`,
  height: spinnerSize,
  width: spinnerSize,
}));

export const spinnerTestId = 'spinner-loader';

// The forwardRef function is used here to be able to use this component inside the Material UI Modal component
const SpinnerWrapper = forwardRef<HTMLDivElement, PropsWithChildren<SpinnerWrapperProps>>(
  ({ children, className, focusable, showSpinner, showOverlay }, ref) => {
    return (
      <Root
        ref={ref}
        aria-busy={showSpinner || showOverlay ? true : undefined}
        className={className}
        data-testid={spinnerTestId}
        tabIndex={focusable ? -1 : undefined}
      >
        {children}
        {showSpinner && <StyledCircularProgress />}
        {showOverlay && <StyledBackdrop open={true} />}
      </Root>
    );
  },
);

SpinnerWrapper.displayName = 'SpinnerWrapper';

export default SpinnerWrapper;
