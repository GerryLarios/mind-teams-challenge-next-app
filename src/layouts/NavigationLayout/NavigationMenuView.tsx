import Link from 'next/link';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import Tooltip from '@/components/Tooltip';
import NavigationMenuChild from './NavigationMenuChild';
import { DashboardView } from '@/types';

const configByView = {
  [DashboardView.USER_MANAGEMENT]: {
    icon: GroupIcon,
    label: 'Users',
  },
  [DashboardView.ACCOUNT_MANAGEMENT]: {
    icon: AccountTreeIcon,
    label: 'Accounts',
  },
  [DashboardView.CLIENT_MANAGEMENT]: {
    icon: BusinessIcon,
    label: 'Clients',
  },
  [DashboardView.TECHNOLOGY_MANAGEMENT]: {
    icon: CodeIcon,
    label: 'Technologies',
  },
};

type NavigationMenuViewProps = {
  className?: string;
  to: string;
  isOpen: boolean;
  selected: boolean;
  view: DashboardView;
};

const NavigationMenuView: React.FC<NavigationMenuViewProps> = ({
  className,
  to,
  isOpen,
  selected,
  view,
}) => {
  const { icon: Icon, label } = configByView[view];

  return (
    <NavigationMenuChild.Root className={className}>
      <NavigationMenuChild.Indicator selected={selected} />
      <Tooltip title={isOpen ? '' : label} placement="right">
        <Link href={to} passHref>
          <NavigationMenuChild.Button
            component="a"
            selected={selected}
            data-testid={`section-${view}`}
          >
            <NavigationMenuChild.Icon selected={selected}>
              <Icon />
            </NavigationMenuChild.Icon>
            <NavigationMenuChild.Label>{label}</NavigationMenuChild.Label>
          </NavigationMenuChild.Button>
        </Link>
      </Tooltip>
    </NavigationMenuChild.Root>
  );
};

export default NavigationMenuView;
