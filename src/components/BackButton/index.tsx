import Link from 'next/link';
import { ButtonBase, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GhostButton from '../GhostButton';

export const backButtonClasses = {
  backButtonIcon: 'back-button-icon',
};

const Root = styled(GhostButton)({
  padding: '0 6px',
}) as typeof ButtonBase;

const BackIcon = styled(ArrowBackIcon)(({ theme }) => ({
  fontSize: 'medium',
  color: theme.palette.secondary[900],
}));

const BackText = styled('span')({
  marginLeft: 8,
});

type BackButtonProps = {
  children?: React.ReactNode;
  className?: string;
  href: string;
};

const BackButton: React.FC<BackButtonProps> = ({ children, className, href }) => {
  return (
    <Link href={href} passHref>
      <Root component="a" className={className}>
        <BackIcon className={backButtonClasses.backButtonIcon} />
        <BackText>{children}</BackText>
      </Root>
    </Link>
  );
};

export default BackButton;
