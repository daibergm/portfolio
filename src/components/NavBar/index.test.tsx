import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '.';

describe('NavBar', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NavBar />);

    expect(getByText('NavBar')).toBeInTheDocument();
  });
});
