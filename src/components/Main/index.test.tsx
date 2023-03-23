import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Main from '.';

describe('Main', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<Main />);
    expect(getByText(`Hi, I'm`)).toBeTruthy();
    expect(getByText(`Daiber`)).toBeTruthy();
    expect(getByText(`A Front-End Developer`)).toBeTruthy();
    expect(
      getByText(
        `I'm a front-end developer specializing in building exceptional digital experiences. Currently, I'm focussed on building responsive web apps and mobile apps, while learning other technologies.`
      )
    ).toBeTruthy();
  });
});
