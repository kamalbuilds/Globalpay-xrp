import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';

import emotionCache from '@/lib/emotion';

import theme from '@/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}

export default MyApp;
