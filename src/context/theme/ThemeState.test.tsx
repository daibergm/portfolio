import { render } from '@testing-library/react';

import { STORAGE_KEYS } from '@constants/index';

import ThemeState from './ThemeState';

describe('ThemeState suit tests', () => {
  beforeEach(() => localStorage.clear());

  test('Render correctly', () => {
    localStorage.setItem(STORAGE_KEYS.theme, 'dark');
    const component = render(
      <ThemeState>
        <div />
      </ThemeState>
    );

    expect(component).toMatchSnapshot();
  });
});
