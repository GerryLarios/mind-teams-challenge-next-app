import { InputBaseProps } from '@mui/material';
import InputGroup from '@/components/InputGroup';
import Input from '@/components/Input';

type TextInputGroupProps = {
  className?: string;
  error?: string;
  label: string;
  inputProps: InputBaseProps;
};

const TextInputGroup: React.FC<TextInputGroupProps> = ({ className, error, inputProps, label }) => (
  <InputGroup
    className={className}
    label={label}
    error={error}
    renderInput={({ id, ariaDescribedBy }) => (
      <Input id={id} aria-describedby={ariaDescribedBy} type="text" {...inputProps} />
    )}
  />
);

export default TextInputGroup;
