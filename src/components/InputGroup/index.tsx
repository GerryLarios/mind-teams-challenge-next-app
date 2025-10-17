import { useMemo } from 'react';
import { styled } from '@mui/material';
import { useUniqueId } from '@/hooks';
import InputError from '../InputError';
import InputHelp from '../InputHelp';
import Label from '../Label';

const StyledLabel = styled(Label)({
  display: 'flex',
  marginBottom: '8px',
});

const MutedText = styled('p')(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.secondary[600],
  marginLeft: 4,
}));

type InputGroupProps = {
  children?: React.ReactNode;
  className?: string;
  error?: string;
  help?: string;
  label: string;
  optional?: boolean;
  renderInput: (props: { id: string; ariaDescribedBy?: string }) => React.ReactNode;
};

const InputGroup: React.FC<InputGroupProps> = ({
  children,
  className,
  error,
  help,
  label,
  optional,
  renderInput,
}) => {
  const id = useUniqueId();
  const _errorId = useUniqueId();
  const _helpId = useUniqueId();
  const errorId = error ? _errorId : undefined;
  const helpId = help ? _helpId : undefined;
  const ariaDescribedBy = useMemo(
    () => [errorId, helpId].filter((s) => s).join(',') || undefined,
    [errorId, helpId],
  );

  return (
    <div className={className}>
      <StyledLabel htmlFor={id}>
        {label} {optional && <MutedText>(optional)</MutedText>}
      </StyledLabel>
      {renderInput({ id, ariaDescribedBy })}
      {errorId && <InputError id={errorId}>{error}</InputError>}
      {helpId && <InputHelp id={helpId}>{help}</InputHelp>}
      {children}
    </div>
  );
};

export default InputGroup;
