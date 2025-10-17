import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { styled } from '@mui/material';

const StyledReportProblemIcon = styled(ReportProblemIcon)({
  fontSize: 'medium',
  marginRight: 4,
});

const Paragraph = styled('p')(({ theme }) => ({
  ...theme.typography.caption,
  alignItems: 'center',
  color: theme.palette.error.main,
  display: 'flex',
  fontSize: '0.75rem',
  marginTop: '4px',
}));

type InputErrorProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

const InputError: React.FC<InputErrorProps> = ({ className, children, id }) => (
  <Paragraph className={className} id={id}>
    <StyledReportProblemIcon />
    {children}
  </Paragraph>
);

export default InputError;
