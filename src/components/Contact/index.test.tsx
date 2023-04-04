import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Contact from '.';

// TODO: Test the form
describe('Contact', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<Contact />);
    expect(getByText(`Contact`)).toBeInTheDocument();
    expect(getByText(`Get In Touch`)).toBeInTheDocument();
    expect(getByText(`Daiber Gonzalez`)).toBeInTheDocument();
    expect(getByText(`Front-End Developer`)).toBeInTheDocument();
    expect(getByText(`connect with me`)).toBeInTheDocument();
  });
});
