import SocialIcons from '../SocialIcons';

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">{`Let's build something together`}</p>
          <h1 className="pt-2 text-gray-700">
            {`Hi, I'm`} <span className="text-[#5651e5]">Daiber</span>
          </h1>
          <h1 className="pt-2 text-gray-700">A Front-End Developer</h1>
          <p className="pt-2 text-gray-600 md:max-w-[70%] m-auto">{`I'm a front-end developer specializing in building exceptional digital experiences. Currently, I'm focussed on building responsive web apps and mobile apps, while learning other technologies.`}</p>
          <SocialIcons
            className="flex justify-between pt-4 max-w-[330px] m-auto"
            size={30}
            tailwindPadding="3"
            color="#5651e5"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
