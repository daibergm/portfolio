import Image from 'next/image';
import PersonalInfo from '../personalInfo';

function About() {
  return (
    <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
      {/* start .col and routePath image left */}
      <div className="col-span-12 md:col-span-4">
        {/* personal images for routePath page  */}
        <Image
          className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
          src="/images/about/about.jpeg"
          width={300}
          height={400}
          alt="routePath"
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          <h3 className="text-4xl font-medium text-white mb-2.5 ">Who am i?</h3>
          <p className="text-color-910 leading-7">
            {`I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focussed on building responsive web apps and mobile apps, while learning
            other technologies.`}
          </p>
          <p className="leading-7 mt-2.5 text-color-910">
            My aim is to convey your message and brand identity through innovative and effective
            software solutions
          </p>
        </div>

        {/* personal information */}
        <div>
          <h3 className="text-4xl font-medium my-5 text-white">Personal Info</h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PersonalInfo />
          </div>
        </div>
        {/* End personal information */}
      </div>
      {/* End about right content */}
    </div>
  );
}

export default About;
