import { Children, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material';
import { useAuthenticatedUser, useDashboardLayout } from '@/hooks';
import DefaultLayout from '../DefaultLayout';
import ItemsContainer from './ItemsContainer';
import NavigationMenu from './NavigationMenu';
import ProfileMenu from './ProfileMenu';
import { removeAuthToken } from '@/utils';

const TitleContainer = styled('div')({
  display: 'flex',
});

const StyledProfileMenu = styled(ProfileMenu)({
  height: 40,
  width: 200,
});

const Text = styled('h1')(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.secondary[900],
  marginLeft: 8,
}));

const Wrapper = styled('div')({
  display: 'flex',
  flex: '1 auto',
  overflow: 'auto',
});

export const navigationLayoutClasses = {
  body: 'base-navigation-layout-body',
};

type NavigationLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  hideHeader?: boolean;
  sideNavItems?: React.ReactNode;
  title?: string;
};

const NavigationLayout: React.FC<NavigationLayoutProps> = ({
  children,
  className,
  sideNavItems,
  title,
}) => {
  const { isOpen, toggleIsOpen } = useDashboardLayout();
  const user = useAuthenticatedUser();
  const router = useRouter();

  const closeSideNavMenuIfEmpty = useCallback(() => {
    if (isOpen && Children.count(sideNavItems) === 0) {
      toggleIsOpen();
    }
  }, [isOpen, sideNavItems, toggleIsOpen]);

  useEffect(closeSideNavMenuIfEmpty, [closeSideNavMenuIfEmpty]);

  if (!user) {
    return <></>;
  }

  const handleSignOut = () => {
    removeAuthToken();
    router.push('/signin');
  };

  return (
    <DefaultLayout className={className}>
      <ItemsContainer isOpen={isOpen}>
        {sideNavItems && (
          <NavigationMenu isOpen={isOpen} onToggleMenu={toggleIsOpen}>
            {sideNavItems}
          </NavigationMenu>
        )}
      </ItemsContainer>
      <DefaultLayout.Content>
        <DefaultLayout.ContentTop>
          <TitleContainer className={className}>
            <Text>{title}</Text>
          </TitleContainer>
          <StyledProfileMenu user={user} onSignOut={handleSignOut} />
        </DefaultLayout.ContentTop>
        <Wrapper className={navigationLayoutClasses.body}>{children}</Wrapper>
      </DefaultLayout.Content>
    </DefaultLayout>
  );
};

export default NavigationLayout;
