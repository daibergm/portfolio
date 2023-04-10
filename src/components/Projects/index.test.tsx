import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProjectsList } from '@/mocks';
import Projects from '.';

describe('Projects', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<Projects />);
    expect(getByText(`Projects`)).toBeInTheDocument();
    expect(getByText(`What I have Built`)).toBeInTheDocument();
    ProjectsList.map((project) => {
      expect(getByText(project.name)).toBeInTheDocument();
      // expect(getByText(project.techStack)).toBeInTheDocument();
    });
  });
});
