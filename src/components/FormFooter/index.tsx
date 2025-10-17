import { styled, useMediaQuery, useTheme } from '@mui/material';
import { default as Button, ButtonVariant } from '../Button';

const ButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '32px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    rowGap: '16px',
  },
}));

const Buttons = styled('div')({
  display: 'flex',
  columnGap: '18px',
  marginLeft: 'auto',
  justifyContent: 'flex-end',
});

type SubmitButtonProps = {
  disabled: boolean | undefined;
  label: string | undefined;
  variant: ButtonVariant | undefined;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, label, variant }) =>
  label ? (
    <Button colorVariant={variant ?? 'primary'} disabled={disabled} type="submit">
      {label}
    </Button>
  ) : null;

type TertiaryButtonProps = {
  disabled: boolean | undefined;
  label: string | undefined;
  onClick: (() => void) | undefined;
};

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ disabled, label, onClick }) =>
  label ? (
    <Button colorVariant="destructive" disabled={disabled} type="button" onClick={onClick}>
      {label}
    </Button>
  ) : null;

type CancelButtonProps = {
  disabled: boolean | undefined;
  onClick: (() => void) | undefined;
};

const CancelButton: React.FC<CancelButtonProps> = ({ disabled, onClick }) =>
  onClick ? (
    <Button colorVariant="tertiary" disabled={disabled} type="button" onClick={onClick}>
      Cancel
    </Button>
  ) : null;

type FormLabels = {
  submit?: string;
  tertiary?: string;
};

export type FormFooterProps = {
  className?: string;
  labels: FormLabels;
  submitting?: boolean;
  submitVariant?: ButtonVariant;
  onCancel?: () => void;
  onTertiary?: () => void;
};

const FormFooter: React.FC<FormFooterProps> = ({
  className,
  labels,
  submitting,
  submitVariant,
  onTertiary,
  onCancel,
}) => {
  const theme = useTheme();
  const matched = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ButtonGroup className={className}>
      {matched ? (
        <>
          <SubmitButton disabled={submitting} label={labels.submit} variant={submitVariant} />
          <TertiaryButton disabled={submitting} label={labels.tertiary} onClick={onTertiary} />
          <CancelButton disabled={submitting} onClick={onCancel} />
        </>
      ) : (
        <>
          <TertiaryButton disabled={submitting} label={labels.tertiary} onClick={onTertiary} />
          <Buttons>
            <CancelButton disabled={submitting} onClick={onCancel} />
            <SubmitButton disabled={submitting} label={labels.submit} variant={submitVariant} />
          </Buttons>
        </>
      )}
    </ButtonGroup>
  );
};

export default FormFooter;
