import { useRouter } from 'next/router';
import { IconButton, styled } from '@mui/material';
import BackButton from '@/components/BackButton';
import ModalCloseButton from '@/components/ModalCloseButton';
import usePreviousPath from '@/hooks/usePreviousPath';
import DefaultLayout from './DefaultLayout';

const StyledCloseButton = styled(ModalCloseButton)(({ theme }) => ({
  color: theme.palette.secondary[900],
})) as typeof IconButton;

const IndependentPageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const previousPath = usePreviousPath();
  const router = useRouter();

  return (
    <DefaultLayout>
      <DefaultLayout.Content>
        <DefaultLayout.ContentTop>
          {/* <BackButton href={previousPath}>Back to Mind teams</BackButton>
          <StyledCloseButton onClick={() => router.push(previousPath)} /> */}
        </DefaultLayout.ContentTop>
        {children}
      </DefaultLayout.Content>
    </DefaultLayout>
  );
};

export default IndependentPageLayout;
