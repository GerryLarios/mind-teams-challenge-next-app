import type { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeProvider from '@/theme';
import { AlertsProvider } from '@/context';
import { CssBaseline } from '@mui/material';

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
          <Component {...pageProps} />
        </AlertsProvider>
      </ThemeProvider>
    </>
  );
}
