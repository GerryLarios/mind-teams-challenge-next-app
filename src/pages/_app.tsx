import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '@/theme';
import {
  AlertsProvider,
  AuthenticatedUserProvider,
  DashboardLayoutProvider,
  PreviousPathProvider,
} from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Mind Teams Challenge" />
        <title>Mind Teams Challenge</title>
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <AlertsProvider>
          <AuthenticatedUserProvider>
            <DashboardLayoutProvider>
              <PreviousPathProvider>
                <Component {...pageProps} />
              </PreviousPathProvider>
            </DashboardLayoutProvider>
          </AuthenticatedUserProvider>
        </AlertsProvider>
      </ThemeProvider>
    </>
  );
}
