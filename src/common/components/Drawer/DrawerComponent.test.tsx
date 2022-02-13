import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import DrawerComponent from './DrawerComponent';

describe('DrawerComponent suit tests', () => {
  test('Render correctly', () => {
    const component = render(
      <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
        <DrawerComponent>
          <div />
        </DrawerComponent>
      </ThemeProvider>
    );

    expect(component).toMatchSnapshot();
  });

  test('Test drawer close function', () => {
    const component = render(
      <DrawerComponent>
        <div />
      </DrawerComponent>
    );
    fireEvent.click(component.getByTestId('menu'));
  });
});
