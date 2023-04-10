import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiRadioButtonFill } from 'react-icons/ri';
import { ProjectsList } from '@/mocks';

function Project() {
  const { query } = useRouter();
  const { image, name, techStack, description, isPrivate, url, repoUrl } =
    ProjectsList.find((obj) => obj.id === query.id) || {};

  return (
    <div className="w-full absolute">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10"></div>
        <Image
          alt={name}
          src={`/static/assets/projects/${image}.png`}
          layout="fill"
          priority
          className="absolute z-1"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">{name}</h2>
          <h3>
            {techStack?.map((tech, i) => {
              const separator = i + 1 < techStack.length ? ' / ' : '';
              return <span key={tech}>{`${tech}${separator}`}</span>;
            })}
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{description}</p>
          {!isPrivate && (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
          )}
          <a href={url} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-4">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {techStack?.map((tech) => (
                <p key={tech} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Project;
