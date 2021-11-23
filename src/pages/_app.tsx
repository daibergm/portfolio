import { AppProps } from 'next/app';

// @Assets
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@styles/globals.css';

// @Components
import DrawerComponent from '@components/Drawer/DrawerComponent';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DrawerComponent>
      <Component {...pageProps} />;
    </DrawerComponent>
  );
}

export default MyApp;
