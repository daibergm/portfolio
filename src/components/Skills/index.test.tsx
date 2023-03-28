import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Skills from '.';
import { SkillsList } from './constants';

describe('Skills', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<Skills />);
    expect(getByText(`Skills`)).toBeInTheDocument();
    expect(getByText(`What I can do`)).toBeInTheDocument();
    SkillsList.map((skill) => {
      expect(getByText(skill.name)).toBeInTheDocument();
    });
  });
});
