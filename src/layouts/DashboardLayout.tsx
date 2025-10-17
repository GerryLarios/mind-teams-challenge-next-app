import { useRouter } from 'next/router';
import { styled } from '@mui/material';
import NavigationLayout, { navigationLayoutClasses } from './NavigationLayout';
import NavigationMenuView from './NavigationLayout/NavigationMenuView';
import { DashboardView } from '@/types';
import { useDashboardLayout } from '@/hooks';

const StyledNavigationLayout = styled(NavigationLayout)<{ isAdminPortal: boolean }>(
  ({ isAdminPortal, theme }) =>
    isAdminPortal
      ? {
          overflow: 'auto',
          [theme.breakpoints.down('lg')]: {
            [`.${navigationLayoutClasses.body}`]: {
              flexDirection: 'column',
            },
          },
        }
      : null,
);

const pathRegexByView = {
  [DashboardView.ACCOUNT_MANAGEMENT]: /^\/accounts/,
  [DashboardView.CLIENT_MANAGEMENT]: /^\/clients/,
  [DashboardView.TECHNOLOGY_MANAGEMENT]: /^\/technologies/,
  [DashboardView.USER_MANAGEMENT]: /^\/users/,
};

const views = [
  DashboardView.USER_MANAGEMENT,
  DashboardView.ACCOUNT_MANAGEMENT,
  DashboardView.CLIENT_MANAGEMENT,
  DashboardView.TECHNOLOGY_MANAGEMENT,
];

function getViewPath(v: DashboardView) {
  switch (v) {
    case DashboardView.ACCOUNT_MANAGEMENT:
      return '/admin/accounts';
    case DashboardView.CLIENT_MANAGEMENT:
      return '/admin/clients';
    case DashboardView.TECHNOLOGY_MANAGEMENT:
      return '/admin/technologies';
    case DashboardView.USER_MANAGEMENT:
      return '/admin/users';
    default:
      return '/admin/users';
  }
}

type DashboardLayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const { isOpen } = useDashboardLayout();
  const router = useRouter();

  const selectedView = Object.keys(pathRegexByView).find((v) =>
    pathRegexByView[v as DashboardView].test(router.asPath),
  );

  return (
    <StyledNavigationLayout
      isAdminPortal
      title={title}
      sideNavItems={views.map((v) => (
        <NavigationMenuView
          key={v}
          to={getViewPath(v)}
          isOpen={isOpen}
          selected={selectedView === v}
          view={v}
        />
      ))}
    >
      {children}
    </StyledNavigationLayout>
  );
};

export default DashboardLayout;
