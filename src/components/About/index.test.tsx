import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import About from '.';

describe('About', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<About />);
    expect(getByText(`About`)).toBeInTheDocument();
    expect(getByText(`Who I Am`)).toBeInTheDocument();
    expect(
      getByText(
        `I have always had a knack for technology and working with computers. In 2016 I started working with HTML, CSS, Java & JavaScript to provide support to some legacy projects for a Colombian company, after that I was working for others companies using technologies like ReactJs, ReactNative, Git, TypeScript, NodeJs, etc...`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `Currently I work as a Front-End developer focussed on responsive web apps using NextJs and mobile apps using ReactNative, sometimes I also use NodeJs for personal projects but I prefer to use headless backend like Firebase.`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `I am open to learn new technologies, for example I am really interested on Flutter to make front apps and NodeJs/Python to make APIS/Trading Bots`
      )
    ).toBeInTheDocument();
    expect(getByText(`Check out some of my latest projects.`)).toBeInTheDocument();
  });
});
