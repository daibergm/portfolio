import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '.';
import { menus } from './constants';

describe('NavBar', () => {
  it('renders correctly', async () => {
    const { getAllByText } = render(<NavBar />);
    menus.map(({ name }) => expect(getAllByText(name)).toBeTruthy());
  });

  it('show mobile navbar', () => {
    const { getByTestId, getByText } = render(<NavBar />);

    fireEvent.click(getByTestId('desktop-nav-toggle-btn'));

    expect(getByTestId('mobile-nav')).toBeTruthy();
    expect(getByText(`Let's build something legendary together`)).toBeInTheDocument();
    expect(getByText(`let's connect`)).toBeInTheDocument();
  });
});
