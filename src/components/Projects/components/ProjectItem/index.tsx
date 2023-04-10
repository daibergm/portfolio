import Image from 'next/image';
import Link from 'next/link';
import { ProjectItemProps } from './types';

function ProjectItem({ item }: ProjectItemProps) {
  const { name, image, techStack, id } = item;

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-2xl p-2 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        alt={name}
        src={`/static/assets/projects/${image}.png`}
        width={1080}
        height={720}
        className="rounded-lg group-hover:opacity-10"
      />
      <div className="absolute hidden group-hover:block">
        <h3 className="text-xl text-white tracking-wider text-center">{name}</h3>
        <p className="pt-2 pb-4 text-white text-center">
          {techStack?.map((tech, i) => {
            const separator = i + 1 < techStack.length ? ' / ' : '';
            return <span key={tech}>{`${tech}${separator}`}</span>;
          })}
        </p>
        <Link href={`/project/${id}`}>
          <p className="py-2 text-center bg-white rounded-lg text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
