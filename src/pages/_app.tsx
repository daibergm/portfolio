import { AppProps } from 'next/app';

// @Assets
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@styles/globals.css';

// @Components
import DrawerComponent from '@components/Drawer/DrawerComponent';

// @Context
import { ThemeState } from '@context/index';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeState>
      <DrawerComponent>
        <Component {...pageProps} />;
      </DrawerComponent>
    </ThemeState>
  );
}

export default MyApp;
