import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import SocialIcons from '../SocialIcons';

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen flex items-center p-4 ">
      <div className="max-w-[1240px] md:m-auto py-4 w-full">
        <p className="uppercase text-[#5651e5] text-xl tracking-widest">Contact</p>
        <h2 className="pt-4">Get In Touch</h2>
        <div className="grid md:grid-cols-5 gap-8 mt-4">
          {/* Left */}
          <div className="col-span-3 md:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="h-full">
              <div className="hover:scale-105 ease-in duration-300">
                <Image
                  className="rounded-lg"
                  src="/static/assets/contact.jpg"
                  alt="contact"
                  width={640}
                  height={427}
                  layout="responsive"
                  priority
                />
              </div>
              <>
                <h2 className="mt-4">Daiber Gonzalez</h2>
                <p>Front-End Developer</p>
                <p className="mt-2">{`I'm available for freelance or full-time positions. Contact me and let's talk.`}</p>
                <p className="uppercase mt-8">connect with me</p>
                <SocialIcons className="flex py-4 m-auto" extraClass="mr-4" size={25} />
              </>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col mt-2">
                  <label htmlFor="name" className="uppercase text-sm">
                    Name
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 border-gray-300"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="phone" className="uppercase text-sm">
                    Phone Number
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 border-gray-300"
                    type="number"
                    name="phone"
                    id="phone"
                  />
                </div>
                <div className="flex flex-col md:col-span-2 mt-2">
                  <label htmlFor="email" className="uppercase text-sm">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 border-gray-300"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col md:col-span-2 mt-2">
                  <label htmlFor="subject" className="uppercase text-sm">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 border-gray-300"
                    type="text"
                    name="subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col md:col-span-2 mt-2">
                  <label htmlFor="message" className="uppercase text-sm">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-2 border-gray-300"
                    name="message"
                    id="message"
                    rows={7}
                  />
                </div>
              </div>
              <button className="w-full py-3 mt-6">send message</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center pt-16">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-200">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
