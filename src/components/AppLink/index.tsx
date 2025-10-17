import Link from 'next/link';
import { Link as MuiLink, styled } from '@mui/material';

const StyledMuiLink = styled(MuiLink)({
  color: 'inherit',
});

type AppLinkProps = {
  children?: React.ReactNode;
  className?: string;
  href: string;
};

const AppLink: React.FC<AppLinkProps> = ({ children, className, href }) => {
  return (
    <Link href={href} passHref>
      <StyledMuiLink className={className} underline="none">
        {children}
      </StyledMuiLink>
    </Link>
  );
};

export default AppLink;
