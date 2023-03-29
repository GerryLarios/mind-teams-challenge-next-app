import { List, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenuChild from './NavigationMenuChild';

const StyledList = styled(List)(({ theme }) => ({
  ...theme.typography.body1,
  alignItems: 'flex-end',
  backgroundColor: 'transparent',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  whiteSpace: 'nowrap',
}));

type NavigationMenuProps = {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onToggleMenu?: () => void;
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  children,
  className,
  isOpen,
  onToggleMenu,
}) => {
  return (
    <StyledList className={className}>
      <NavigationMenuChild.Root>
        <NavigationMenuChild.Indicator selected={false} />
        <NavigationMenuChild.Button
          $darkerIconOnHover
          data-testid="burger-button"
          onClick={onToggleMenu}
        >
          <NavigationMenuChild.Icon>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </NavigationMenuChild.Icon>
        </NavigationMenuChild.Button>
      </NavigationMenuChild.Root>
      {children}
    </StyledList>
  );
};

export default Object.assign(NavigationMenu);
