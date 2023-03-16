import { AppProps } from 'next/app';

// @Assets
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
