import { backdropClasses, styled } from '@mui/material';
import { Card } from '../Card';
import SpinnerWrapper from '../SpinnerWrapper';
import FormFooter, { FormFooterProps } from '../FormFooter';

export const formClasses = {
  formWrapper: 'form-wrapper',
  formFooter: 'form-footer',
};

const Root = styled(SpinnerWrapper)({
  [`& .${backdropClasses.root}`]: {
    borderRadius: '4px',
  },
});

const StyledCard = styled(Card.withComponent('form'))({ minHeight: '100%' });

export type FormProps = {
  children?: React.ReactNode;
  className?: string;
  footerProps?: Omit<FormFooterProps, 'submitting'>;
  submitting?: boolean;
  onKeyDown?: React.KeyboardEventHandler;
  onSubmit: React.FormEventHandler;
};

const Form: React.FC<FormProps> = ({
  children,
  className,
  footerProps,
  submitting,
  onKeyDown,
  onSubmit,
}) => (
  <Root className={className} showOverlay={submitting} showSpinner={submitting}>
    <StyledCard
      className={formClasses.formWrapper}
      noValidate
      onKeyDown={onKeyDown}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
      {footerProps && (
        <FormFooter className={formClasses.formFooter} {...footerProps} submitting={submitting} />
      )}
    </StyledCard>
  </Root>
);

export default Form;
