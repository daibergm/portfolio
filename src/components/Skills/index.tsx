import Image from 'next/image';
import { SkillsList } from './constants';

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-[#5651e5] text-xl tracking-widest">Skills</p>
        <h2 className="pt-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {SkillsList.map((skill) => (
            <div
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              key={JSON.stringify(skill)}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    alt={skill.imageName}
                    src={`/static/assets/skills/${skill.imageName}.png`}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
