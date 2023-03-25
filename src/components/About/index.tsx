import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-4 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-[#5651e5] text-xl tracking-widest">About</p>
          <h2 className="pt-4">Who I Am</h2>
          <p className="pt-2 text-gray-600">
            I have always had a knack for technology and working with computers. In 2016 I started
            working with HTML, CSS, Java & JavaScript to provide support to some legacy projects for
            a Colombian company, after that I was working for others companies using technologies
            like ReactJs, ReactNative, Git, TypeScript, NodeJs, etc...
          </p>
          <p className="pt-2 text-gray-600">
            Currently I work as a Front-End developer focussed on responsive web apps using NextJs
            and mobile apps using ReactNative, sometimes I also use NodeJs for personal projects but
            I prefer to use headless backend like Firebase.
          </p>
          <p className="pt-2 text-gray-600">
            I am open to learn new technologies, for example I am really interested on Flutter to
            make front apps and NodeJs/Python to make APIS/Trading Bots
          </p>
          <Link href="/">
            <p className="pt-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="max-w-[640px] mt-2 md:m-auto h-auto shadow-xl shadow-gray-400 rounded-xl p-2 hover:scale-105 ease-in duration-300 flex items-center justify-center">
          <Image
            src="/static/assets/about.jpg"
            alt="about"
            width={640}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
