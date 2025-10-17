import { FieldError } from 'react-hook-form';
import { styled } from '@mui/material';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import { PasswordValidations } from '@/utils';
import InputHelp from '../InputHelp';

const HelperText = styled(InputHelp)(({ theme }) => ({
  ...theme.typography.caption,
  marginTop: '4px',
}));

const WrapperList = styled('ul')({
  margin: '0 0 0 24px',
  padding: 0,
});

const HelperTextItem = styled('li')(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.secondary[500],
}));

const marginRight = 5;

const Checked = styled(Check)({
  color: 'green',
  fontSize: 'x-small',
  marginRight,
});

const Cross = styled(Close)({
  color: 'red',
  fontSize: 'x-small',
  marginRight,
});

const Dot = styled(FiberManualRecord)({
  fontSize: 'xx-small',
  marginRight,
});

type InputPasswordHelpProps = {
  dirty?: boolean;
  error?: FieldError;
};

type PasswordValidationsKeys = keyof PasswordValidations;
const lengthKeys: PasswordValidationsKeys[] = ['minLength', 'required'];
const patternKeys: PasswordValidationsKeys[] = ['validate', 'required'];

type PasswordIndicatorProps = {
  dirty?: boolean;
  hasError: boolean;
  index: number;
};

const PasswordIndicator: React.FC<PasswordIndicatorProps> = ({ dirty, hasError, index }) => {
  if (!dirty) {
    return <Dot data-testid={`dot-${index}`} />;
  }

  return hasError ? (
    <Cross data-testid={`cross-${index}`} />
  ) : (
    <Checked data-testid={`checked-${index}`} />
  );
};

const InputPasswordHelp: React.FC<InputPasswordHelpProps> = ({ dirty, error }) => (
  <>
    <HelperText>Your password must include:</HelperText>
    <WrapperList>
      <HelperTextItem>
        <PasswordIndicator
          dirty={dirty}
          hasError={lengthKeys.some((key) => error?.types?.[key])}
          index={1}
        />
        At least 8 characters.
      </HelperTextItem>
      <HelperTextItem>
        <PasswordIndicator
          dirty={dirty}
          hasError={patternKeys.some((key) => error?.types?.[key])}
          index={2}
        />
        At least 1 number or special character.
      </HelperTextItem>
    </WrapperList>
  </>
);

export default InputPasswordHelp;
