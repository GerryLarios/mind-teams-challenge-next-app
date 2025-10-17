import { styled } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const StyledInfoIcon = styled(InfoIcon)({
  fontSize: 'small',
  marginRight: 4,
});

const Paragraph = styled('p')(({ theme }) => ({
  ...theme.typography.caption,
  alignItems: 'center',
  color: theme.palette.secondary[500],
  display: 'flex',
  marginTop: '4px',
}));

type InputHelpProps = {
  children?: React.ReactNode;
  id?: string;
};

const InputHelp: React.FC<InputHelpProps> = ({ children, id }) => (
  <Paragraph id={id}>
    <StyledInfoIcon />
    {children}
  </Paragraph>
);

export default InputHelp;
