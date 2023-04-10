import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '.';
import { menus } from './constants';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('NavBar', () => {
  it('renders correctly', async () => {
    const { getAllByText } = render(<NavBar />);
    menus.map(({ name }) => expect(getAllByText(name)).toBeTruthy());
  });

  it('show mobile navbar', () => {
    const { getByTestId, getByText } = render(<NavBar />);

    fireEvent.click(getByTestId('desktop-nav-toggle-btn'));

    expect(getByTestId('mobile-nav')).toBeTruthy();
    expect(getByText(`Let's build something together`)).toBeInTheDocument();
    expect(getByText(`let's connect`)).toBeInTheDocument();
  });
});
